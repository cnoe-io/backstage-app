/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Entity } from '@backstage/catalog-model';
import { PluginTaskScheduler, TaskRunner } from '@backstage/backend-tasks';
import { Config } from '@backstage/config';
import {
  EntityProvider,
  EntityProviderConnection,
} from '@backstage/plugin-catalog-node';
import { readAwsInfrastructureConfigs } from './config';
import { AwsConfigResource, AwsInfrastructureConfig } from './types';
import * as uuid from 'uuid';
import { Logger } from 'winston';
import { 
  ConfigServiceClient,
  SelectAggregateResourceConfigCommandOutput,
  paginateSelectAggregateResourceConfig,
  paginateSelectResourceConfig,
} from '@aws-sdk/client-config-service';
import { SHA256 } from 'crypto-js';
import format  from 'string-template'
import {
  DefaultAwsCredentialsManager,
} from '@backstage/integration-aws-node';
import { AwsCredentialIdentityProvider } from '@aws-sdk/types';

// TODO: event-based updates using S3 events (+ queue like SQS)?
/**
 * Provider which discovers catalog files (any name) within an S3 bucket.
 *
 * Use `AwsS3EntityProvider.fromConfig(...)` to create instances.
 *
 * @public
 */
export class AwsConfigInfrastructureProvider implements EntityProvider {
  private readonly logger: Logger;
  private readonly scheduleFn: () => Promise<void>;
  private connection?: EntityProviderConnection;
  private client: ConfigServiceClient;

  static async fromConfig(
    configRoot: Config,
    options: {
      logger: Logger;
      schedule?: TaskRunner;
      scheduler?: PluginTaskScheduler;
    },
  ): Promise<AwsConfigInfrastructureProvider[]> {
    const providerConfigs = readAwsInfrastructureConfigs(configRoot);

    if (!options.schedule && !options.scheduler) {
      throw new Error('Either schedule or scheduler must be provided.');
    }

    const credsManager = DefaultAwsCredentialsManager.fromConfig(configRoot);

    return Promise.all(providerConfigs.map(async providerConfig => {
      if (!options.schedule && !providerConfig.schedule) {
        throw new Error(
          `No schedule provided neither via code nor config for awsS3-provider:${providerConfig.id}.`,
        );
      }

      const taskRunner =
        options.schedule ??
        options.scheduler!.createScheduledTaskRunner(providerConfig.schedule!);

        var credentialProvider : AwsCredentialIdentityProvider;

        if (providerConfig.accountId) {
          credentialProvider = (await credsManager.getCredentialProvider({ accountId: providerConfig.accountId }))
            .sdkCredentialProvider;
        } else {
          credentialProvider = (await credsManager.getCredentialProvider()).sdkCredentialProvider;
        }

      return new AwsConfigInfrastructureProvider(
        providerConfig,
        credentialProvider,
        options.logger,
        taskRunner,
      );
    }));
  }

  private constructor(
    private readonly config: AwsInfrastructureConfig,
    credentialProvider: AwsCredentialIdentityProvider,
    logger: Logger,
    taskRunner: TaskRunner,
  ) {
    this.logger = logger.child({
      target: this.getProviderName(),
    });

    this.client = new ConfigServiceClient({
      credentialDefaultProvider: () => credentialProvider,
    });

    this.scheduleFn = this.createScheduleFn(taskRunner);
  }

  private createScheduleFn(taskRunner: TaskRunner): () => Promise<void> {
    return async () => {
      const taskId = `${this.getProviderName()}:refresh`;
      return taskRunner.run({
        id: taskId,
        fn: async () => {
          const logger = this.logger.child({
            class: AwsConfigInfrastructureProvider.prototype.constructor.name,
            taskId,
            taskInstanceId: uuid.v4(),
          });

          try {
            await this.refresh(logger);
          } catch (error) {
            logger.error(`${this.getProviderName()} refresh failed`, error);
          }
        },
      });
    };
  }

  /** {@inheritdoc @backstage/plugin-catalog-backend#EntityProvider.getProviderName} */
  getProviderName(): string {
    return `aws-config-provider:${this.config.id}`;
  }

  /** {@inheritdoc @backstage/plugin-catalog-backend#EntityProvider.connect} */
  async connect(connection: EntityProviderConnection): Promise<void> {
    this.connection = connection;
    await this.scheduleFn();
  }

  async refresh(logger: Logger) {
    if (!this.connection) {
      throw new Error('Not initialized');
    }

    logger.info('Discovering AWS infrastructure resources');

    const query = this.createQuery();

    logger.debug(`Submitting AWS Config query: ${query}`);

    let paginator = paginateSelectResourceConfig({
      client: this.client,
      pageSize: 25,
    }, {
      Expression: query,
    });

    if(this.config.aggregator) {
      paginator = paginateSelectAggregateResourceConfig({
        client: this.client,
        pageSize: 25,
      }, {
        Expression: query,
        ConfigurationAggregatorName: this.config.aggregator
      });
    }

    let entities : Entity[] = [];

    for await (const page of paginator) {
      const response = this.parseResponse(page);

      entities = entities.concat(response.map(result => {
        return this.resourceToEntity(result);
      }))
    }

    await this.connection.applyMutation({
      type: 'full',
      entities: entities.map(entity => ({
        entity,
        locationKey: this.getProviderName(),
      })),
    });


    logger.info(`Committed Resources for AWS`);
  }

  parseResponse(response: SelectAggregateResourceConfigCommandOutput): AwsConfigResource[] {
    return response.Results?.map(result => {
      const resource : AwsConfigResource = JSON.parse(result)

      return resource;
    }) ?? [];
  }

  resourceToEntity(
    resource: AwsConfigResource,
  ): Entity {
    //this.logger.info(`Resource: ${JSON.stringify(resource)}`);
    //this.logger.info(`ResourceType: ${resource.resourceType}`);

    const resourceName = resource.resourceName ? resource.resourceName.replace(':', '-') : SHA256(resource.arn).toString().slice(0, 63);

    const resourceResult = {
      apiVersion: 'backstage.io/v1alpha1',
      kind: 'Resource',
      metadata: {
        annotations: {
          'backstage.io/managed-by-origin-location': `url:https://${resource.awsRegion}.console.aws.amazon.com/config/home?region=${resource.awsRegion}#/resources/details?resourceId=${resource.resourceId}&resourceType=${resource.resourceType}`,
          'backstage.io/managed-by-location': `url:https://${resource.awsRegion}.console.aws.amazon.com/config/home?region=${resource.awsRegion}#/resources/details?resourceId=${resource.resourceId}&resourceType=${resource.resourceType}`,
          'aws.amazon.com/arn': resource.arn,
          'aws.amazon.com/resource-type': resource.resourceType,
          'aws.amazon.com/resource-id': resource.resourceId,
          'aws.amazon.com/name': resourceName,
          'aws.amazon.com/region': resource.awsRegion,
        },
        name: resourceName,
        description: `AWS Config Resource ${resource.resourceType} ${
          resource.resourceName || resource.resourceId
        }`
      },
      spec: {
        type: this.resourceType(resource.resourceType),
        ...this.resourceSpec(resource)
      },
    };

    //console.log(resourceResult)

    return resourceResult as Entity;
  }

  resourceType(type: string): string {
    return type.split('::').slice(1).join('-').toLowerCase();
  }

  tagsToFilter(): string {
    if(!this.config.filterTag) {
      return '';
    }

    if(this.config.filterTag.indexOf("=") > 0) {
      return `WHERE tags.tag = '${this.config.filterTag}'`;
    }

    return `WHERE tags.key = '${this.config.filterTag}'`;
  }

  createQuery(): string {
    let exclude = '';

    if(this.config.exclude) {
      exclude = ' AND'+(this.config.exclude.map((resourceType) => {
        return ` resourceType != '${resourceType}'`
      })).join(' AND ');
    }

    return `SELECT
    resourceId,
    resourceName,
    resourceType,
    awsRegion,
    accountId,
    arn,
    tags ${this.tagsToFilter()} ${exclude}`.trim();
  }

  resourceSpec(resource: AwsConfigResource): any {
    let result : any = {};

    let context : any = {};

    resource.tags.forEach(e => {
      context[e.key] = e.value;
    });

    //console.log(`Context: ${JSON.stringify(context)}`)

    if(this.config.spec) {

      if(this.config.spec.owner) {
        result['owner'] = format(this.config.spec.owner, context);
      }

      if(this.config.spec.dependencyOf) {
        //console.log(`Owner: ${format(this.config.spec.dependencyOf, context)}`)
        result['dependencyOf'] = [format(this.config.spec.dependencyOf, context)];
      }
    }

    //console.log(`RETURN ${JSON.stringify(result)}`)

    return result;
  }

}
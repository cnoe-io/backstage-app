/**
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Logger } from 'winston';
import { 
  CloudWatchClient, 
  GetMetricDataCommand, 
  ListTagsForResourceCommand, 
  MetricAlarm, 
  MetricDataResult, 
  ScanBy, 
  Tag,
  paginateDescribeAlarms
} from "@aws-sdk/client-cloudwatch";
import { AwsCredentialIdentityProvider } from '@aws-sdk/types';
import { Config } from '@backstage/config';
import {
  DefaultAwsCredentialsManager,
} from '@backstage/integration-aws-node';
import { CatalogApi } from '@backstage/catalog-client';

export class AwsCloudWatchApi {
  public constructor(
    private readonly logger: Logger,
    private readonly catalogApi: CatalogApi,
    private readonly client: CloudWatchClient,
  ) {}

  static async fromConfig(
    config: Config,
    catalogApi: CatalogApi,
    logger: Logger,
  ) {
    let region, accountId : string | undefined;

    const conf = config.getOptionalConfig('awsPlugins.cloudWatch');

    if(conf) {
      accountId = conf.getOptionalString('accountId');
      region = conf.getOptionalString('region');
    }

    const credsManager = DefaultAwsCredentialsManager.fromConfig(config);

    var credentialProvider : AwsCredentialIdentityProvider;

    if (accountId) {
      credentialProvider = (await credsManager.getCredentialProvider({ accountId }))
        .sdkCredentialProvider;
    } else {
      credentialProvider = (await credsManager.getCredentialProvider()).sdkCredentialProvider;
    }


    let client = new CloudWatchClient({
      region: region,
      customUserAgent: 'aws-cloudwatch-plugin-for-backstage',
      credentialDefaultProvider: () => credentialProvider
    });

    return new AwsCloudWatchApi(logger, catalogApi, client);
  }

  public async getAlarms(
    entityRef: string,
  ): Promise<AlarmItem[]> {
    this.logger?.debug(
      `Fetch CloudWatch alarms for ${entityRef}`,
    );

    let entity = await this.catalogApi.getEntityByRef(entityRef);

    if(!entity) {
      throw new Error(`Could not find entity ${entityRef}`);
    }

    const tagString =
      entity.metadata.annotations?.['aws.amazon.com/aws-cloudwatch-alarm-tags'] ?? '';

    let tags : Tag[];

    if(tagString) {
      tags = tagString.split(',').map((e) => {
        let parts = e.split('=');

        return {
          Key: parts[0],
          Value: parts[1],
        }
      });
    }
    else {
      tags = [];
    }

    tags.push({
      Key: 'component',
      Value: entity.metadata.name
    });

    let alarms : AlarmItem[] = [];

    let paginator = paginateDescribeAlarms({
      client: this.client,
      pageSize: 25,
    }, {
      
    });

    let endDate = new Date();
    let startDate = new Date();
    startDate.setHours(startDate.getHours() - 24);

    for await (const page of paginator) {
      for(let i = 0; i < page.MetricAlarms!.length; i++) {
        let alarm = page.MetricAlarms![i];

        const tagsResp = await this.client
          .send(new ListTagsForResourceCommand({
            ResourceARN: alarm.AlarmArn
          }));

        let retrievedTags = tagsResp.Tags;

        if(retrievedTags) {
          const match = tags.every((el) => {
            return retrievedTags!.find((e) => {
              return (e.Key == el.Key) && (e.Value == el.Value);
            })
          });

          if (match) {
            const metricResp = await this.client
              .send(new GetMetricDataCommand({
                StartTime: startDate,
                EndTime: endDate,
                MetricDataQueries: alarm.Metrics,
                MaxDatapoints: 1,
                ScanBy: ScanBy.TIMESTAMP_DESCENDING
              }));

            alarms.push({
              alarm: alarm,
              data: metricResp.MetricDataResults || [],
              tags: tagsResp.Tags || []
            });
          }
        }
      }
    }

    return alarms;
  }
}

interface AlarmItem {
  data: MetricDataResult[],
  alarm: MetricAlarm,
  tags: Tag[]
}
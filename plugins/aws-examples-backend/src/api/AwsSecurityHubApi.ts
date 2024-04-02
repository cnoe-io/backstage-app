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
  AwsSecurityFinding,
  SecurityHubClient,
  paginateGetFindings, 
} from "@aws-sdk/client-securityhub";
import { CatalogApi } from '@backstage/catalog-client';
import { AwsCredentialIdentityProvider } from '@aws-sdk/types';
import { Config } from '@backstage/config';
import {
  DefaultAwsCredentialsManager,
} from '@backstage/integration-aws-node';

export class AwsSecurityHubApi {
  public constructor(
    private readonly logger: Logger,
    private readonly catalogApi: CatalogApi,
    private readonly client: SecurityHubClient,
  ) {
    
  }

  static async fromConfig(
    config: Config,
    catalogApi: CatalogApi,
    logger: Logger
  ) {
    let region, accountId : string | undefined;

    const conf = config.getConfig('awsPlugins.securityHub');

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

    let client = new SecurityHubClient({
      region: region,
      customUserAgent: 'aws-securityhub-plugin-for-backstage',
      credentialDefaultProvider: () => credentialProvider
    });

    return new AwsSecurityHubApi(logger, catalogApi, client);
  }
  
  public async getFindings(entityRef: string): Promise<AwsSecurityFinding[]> {
    this.logger.info(`Fetching Security Hub data for entity ${entityRef}`);

    const entity = await this.catalogApi.getEntityByRef(entityRef);

    if(!entity) {
      throw new Error(`Failed to load entity ${entityRef}`);
    }

    let paginator = paginateGetFindings({
      client: this.client,
      pageSize: 25,
    },{
      Filters: {
        ResourceTags: [
          {
            Comparison: "EQUALS",
            Key: "component",
            Value: entity.metadata.name
          }
        ],
        WorkflowStatus: [{
          Comparison: "EQUALS",
          Value: "NEW"
        }, {
          Comparison: "EQUALS",
          Value: "NOTIFIED"
        }]
      },
      SortCriteria: [{
        Field: "SeverityLabel",
        SortOrder: "asc"
      }]
    });

    let result : AwsSecurityFinding[] = [];

    for await (const page of paginator) {
      result = result.concat(page.Findings!);
    }
    
    return result;
  }
}
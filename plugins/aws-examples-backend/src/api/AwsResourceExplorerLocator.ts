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

import { ResourceExplorer2Client, SearchCommand } from '@aws-sdk/client-resource-explorer-2'
import { Logger } from 'winston';
import { AwsResourceLocator } from './AwsResourceLocator';
import { AwsCredentialIdentityProvider } from '@aws-sdk/types';
import { Config } from '@backstage/config';
import {
  DefaultAwsCredentialsManager,
} from '@backstage/integration-aws-node';

export class AwsResourceExplorerLocator implements AwsResourceLocator {
  public constructor(
    private readonly logger: Logger,
    private readonly client: ResourceExplorer2Client,
    private readonly viewArn: string | undefined,
  ) {}

  static async fromConfig(
    config: Config,
    logger: Logger,
  ) {
    let region, accountId, viewArn : string | undefined;

    const conf = config.getOptionalConfig('awsPlugins.locator.resourceExplorer');

    if(conf) {
      viewArn = conf.getOptionalString('viewArn');
      accountId = conf.getOptionalString('accountId');
      region = conf.getOptionalString('region');

      console.log(`Using view ARN: ${viewArn}`)
    }

    const credsManager = DefaultAwsCredentialsManager.fromConfig(config);

    var credentialProvider : AwsCredentialIdentityProvider;

    if (accountId) {
      credentialProvider = (await credsManager.getCredentialProvider({ accountId }))
        .sdkCredentialProvider;
    } else {
      credentialProvider = (await credsManager.getCredentialProvider()).sdkCredentialProvider;
    }

    let client = new ResourceExplorer2Client({
      region: region,
      customUserAgent: 'aws-resourceexplorer-plugin-for-backstage',
      credentialDefaultProvider: () => credentialProvider
    });

    return new AwsResourceExplorerLocator(logger, client, viewArn);
  }

  async getResourceArns({ resourceType, tags, }: { resourceType: string; tags: string[]; }): Promise<string[]> {
    let tagFilters = tags.map((e) => {
      return `tag:${e}`
    }).join(' ');

    this.logger.debug(`Retrieving resource ARNs for ${resourceType}`);

    let query = `${tagFilters} resourcetype:${resourceType}`.trim();

    console.log(`Resource explorer query: ${query}`)

    let response = await this.client.send(new SearchCommand({
      QueryString: `${tagFilters} resourcetype:${resourceType}`.trim(),
      ViewArn: this.viewArn
    }));

    return response.Resources!.map((e) => e.Arn!);
  }
}
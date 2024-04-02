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
  WellArchitectedClient, 
  ListWorkloadsCommand, 
  GetLensReviewCommand, 
  LensReview 
} from "@aws-sdk/client-wellarchitected";
import { AwsCredentialIdentityProvider } from '@aws-sdk/types';
import { Config } from '@backstage/config';
import {
  DefaultAwsCredentialsManager,
} from '@backstage/integration-aws-node';

export class AwsWellArchitectedApi {
  public constructor(
    private readonly logger: Logger,
    private readonly client: WellArchitectedClient,
  ) {}

  static async fromConfig(
    config: Config,
    logger: Logger,
  ) {
    let region, accountId : string | undefined;

    const conf = config.getOptionalConfig('awsPlugins.wellArchitected');

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

    let client = new WellArchitectedClient({
      region: region,
      customUserAgent: 'aws-wellarchitected-plugin-for-backstage',
      credentialDefaultProvider: () => credentialProvider
    });

    return new AwsWellArchitectedApi(logger, client);
  }

  public async getReviewByComponent(
    component: string,
  ): Promise<LensReview | undefined> {
    this.logger?.debug(
      `Fetch Well Architected review for ${component}`,
    );

    const resp = await this.client
      .send(new ListWorkloadsCommand({
        WorkloadNamePrefix: component
      }));

    if(resp.WorkloadSummaries?.length == 0) {
      return undefined;
    }

    if(resp.WorkloadSummaries?.length != 1) {
      throw new Error(`Failed to find 1 Well Architected match for component ${component}, got ${resp.WorkloadSummaries?.length} matches`);
    }
  
    const workloadId = resp.WorkloadSummaries[0].WorkloadId;

    const reviewResponse = await this.client
      .send(new GetLensReviewCommand({
        WorkloadId: workloadId,
        LensAlias: 'wellarchitected'
      }));

    if(reviewResponse.LensReview) {
      return reviewResponse.LensReview;
    }

    throw new Error(`Failed to find lens review for component ${component}`);
  }
}
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
import { ChatSyncResponse } from '@internal/plugin-aws-examples-common';
import { Config } from '@backstage/config';
import { DefaultAwsCredentialsManager } from '@backstage/integration-aws-node';
import { ChatSyncCommand, QBusinessClient } from '@aws-sdk/client-qbusiness';

export class AmazonQApi {
  public constructor(
    private readonly logger: Logger,
    private readonly client: QBusinessClient,
  ) {}

  static async fromConfig(config: Config, logger: Logger) {
    const credsManager = DefaultAwsCredentialsManager.fromConfig(config);

    let credentialProvider = (await credsManager.getCredentialProvider())
      .sdkCredentialProvider;

    const client = new QBusinessClient({
      customUserAgent: 'amazon-qbusiness-plugin-for-backstage',
      credentialDefaultProvider: () => credentialProvider,
    });

    return new AmazonQApi(logger, client);
  }

  public async chatSync(
    userMessage: string,
    userId: string,
    conversationId: string | undefined,
    previousMessageId: string | undefined,
  ): Promise<ChatSyncResponse> {
    this.logger.debug('Chat sync');
    const response = await this.client.send(
      new ChatSyncCommand({
        userMessage,
        conversationId,
        parentMessageId: previousMessageId,
        applicationId: 'ffca549e-c165-451d-9708-515d067a8c76',
        userId,
      }),
    );

    return {
      response,
    };
  }
}

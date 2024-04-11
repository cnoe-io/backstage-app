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

import { IdentityApi } from '@backstage/core-plugin-api';
import { ConfigApi } from '@backstage/core-plugin-api';
import { ResponseError } from '@backstage/errors';
import { ChatSyncResponse } from '@internal/plugin-aws-examples-common';
import { AmazonQApi } from './AmazonQApi';

export class AmazonQApiClient implements AmazonQApi {
  private readonly configApi: ConfigApi;
  private readonly identityApi: IdentityApi;

  public constructor(options: {
    configApi: ConfigApi;
    identityApi: IdentityApi;
  }) {
    this.configApi = options.configApi;
    this.identityApi = options.identityApi;
  }

  async chatSync({
    userMessage,
    userId,
    conversationId,
    previousMessageId,
  }: {
    userMessage: string;
    userId: string;
    conversationId: string | undefined;
    previousMessageId: string | undefined;
  }): Promise<ChatSyncResponse> {
    const queryString = new URLSearchParams();

    if (conversationId) {
      queryString.append('conversation', conversationId);
    }

    if (previousMessageId) {
      queryString.append('previous', previousMessageId);
    }

    const urlSegment = `sync?${queryString}`;

    const services = await this.post<ChatSyncResponse>(urlSegment, {
      message: userMessage,
      user: userId,
    });

    return services;
  }

  private async post<T>(path: string, payload: any): Promise<T> {
    const baseUrl = `${await this.configApi.getString(
      'backend.baseUrl',
    )}/api/aws-examples-backend/qbusiness/}`;

    const url = new URL(path, baseUrl);

    const { token: idToken } = await this.identityApi.getCredentials();

    const response = await fetch(url.toString(), {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: idToken
        ? {
            Authorization: `Bearer ${idToken}`,
            'Content-Type': 'application/json',
          }
        : { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw await ResponseError.fromResponse(response);
    }

    return response.json() as Promise<T>;
  }
}

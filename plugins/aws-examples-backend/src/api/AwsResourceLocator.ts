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

import { Config } from "@backstage/config";
import { AwsResourceExplorerLocator } from "./AwsResourceExplorerLocator";
import { Logger } from "winston";

export interface AwsResourceLocator {
  getResourceArns({
      resourceType,
      tags,
    }: {
      resourceType: string,
      tags: string[],
    }): Promise<string[]>;
}

export class AwsResourceLocatorFactory {
  static async fromConfig(
    config: Config,
    logger: Logger,
  ) : Promise<AwsResourceLocator> {
    const conf = config.getConfig('awsPlugins.locator');

    let locatorType = conf.get('type');

    switch(locatorType) {
      case 'resourceExplorer':
        return await AwsResourceExplorerLocator.fromConfig(config, logger);
    }

    throw new Error('No resource locator type configured');
  }
}
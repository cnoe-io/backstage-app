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

import {
  configApiRef,
  createApiFactory,
  createComponentExtension,
  createPlugin,
  createRoutableExtension,
  identityApiRef,
} from '@backstage/core-plugin-api';
import {
  AwsCloudWatchApiClient,
  AwsECSApiClient,
  awsCloudWatchApiRef,
  awsECSApiRef,
} from './api';
import { AWS_ECS_SERVICE_ANNOTATION } from './constants';
import { Entity } from '@backstage/catalog-model';
import { AWSWellArchitectedApiClient } from './api/AWSWellArchitectedApiClient';
import { awsWellArchitectedApiRef } from './api/AWSWellArchitectedApi';
import { awsSecurityHubApiRef } from './api/AWSSecurityHubApi';
import { AWSSecurityHubApiClient } from './api/AWSSecurityHubApiClient';
import {
  awsEcsDashboardRouteRef,
  awsSecurityHubDashboardRouteRef,
} from './routes';

export const isAWSECSServiceAvailable = (entity: Entity) =>
  Boolean(entity?.metadata.annotations?.[AWS_ECS_SERVICE_ANNOTATION]);

export const awsExamplesPlugin = createPlugin({
  id: 'aws-examples',

  apis: [
    createApiFactory({
      api: awsECSApiRef,
      deps: { configApi: configApiRef, identityApi: identityApiRef },
      factory: ({ configApi, identityApi }) =>
        new AwsECSApiClient({ configApi, identityApi }),
    }),
    createApiFactory({
      api: awsWellArchitectedApiRef,
      deps: { configApi: configApiRef, identityApi: identityApiRef },
      factory: ({ configApi, identityApi }) =>
        new AWSWellArchitectedApiClient({ configApi, identityApi }),
    }),
    createApiFactory({
      api: awsCloudWatchApiRef,
      deps: { configApi: configApiRef, identityApi: identityApiRef },
      factory: ({ configApi, identityApi }) =>
        new AwsCloudWatchApiClient({ configApi, identityApi }),
    }),
    createApiFactory({
      api: awsSecurityHubApiRef,
      deps: { configApi: configApiRef, identityApi: identityApiRef },
      factory: ({ configApi, identityApi }) =>
        new AWSSecurityHubApiClient({ configApi, identityApi }),
    }),
  ],
  routes: {
    root: awsSecurityHubDashboardRouteRef,
  },
});

export const EntityAwsEcsDashboard = awsExamplesPlugin.provide(
  createRoutableExtension({
    name: 'EntityAwsEcsDashboard',
    component: () =>
      import('./components/AWSECSEntityPage/AWSECSEntityPage').then(
        m => m.AWSECSServicesOverviewWidget,
      ),
    mountPoint: awsEcsDashboardRouteRef,
  }),
);

export const EntityAwsWellArchitectedReviewOverviewCard =
  awsExamplesPlugin.provide(
    createComponentExtension({
      name: 'EntityAwsWellArchitectedReviewOverviewCard',
      component: {
        lazy: () =>
          import(
            './components/AWSWellArchitectedOverview/AWSWellArchitectedOverview'
          ).then(m => m.AWSWellArchitectedOverviewWidget),
      },
    }),
  );

export const EntityAwsCloudWatchAlarmsOverviewCard = awsExamplesPlugin.provide(
  createComponentExtension({
    name: 'EntityAwsCloudWatchAlarmsOverviewCard',
    component: {
      lazy: () =>
        import(
          './components/AWSCloudWatchAlarmsOverview/AWSCloudWatchAlarmsOverview'
        ).then(m => m.AWSCloudWatchAlarmsOverviewWidget),
    },
  }),
);

export const EntityAwsSecurityHubDashboard = awsExamplesPlugin.provide(
  createRoutableExtension({
    name: 'EntityAwsSecurityHubDashboard',
    component: () =>
      import('./components/AWSSecurityHubPage/AWSSecurityHubPage').then(
        m => m.AWSSecurityHubPage,
      ),
    mountPoint: awsSecurityHubDashboardRouteRef,
  }),
);

export const AmazonQChatAssistant = awsExamplesPlugin.provide(
  createRoutableExtension({
    name: 'AmazonQChatAssistant',
    component: () =>
      import('./components/AmazonQComponent').then(m => m.AmazonQComponent),
    mountPoint: awsSecurityHubDashboardRouteRef,
  }),
);

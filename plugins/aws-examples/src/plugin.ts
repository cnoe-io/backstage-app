import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const awsExamplesPlugin = createPlugin({
  id: 'aws-examples',
  routes: {
    root: rootRouteRef,
  },
});

export const AwsExamplesPage = awsExamplesPlugin.provide(
  createRoutableExtension({
    name: 'AwsExamplesPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);

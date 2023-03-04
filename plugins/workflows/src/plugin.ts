import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const workflowsPlugin = createPlugin({
  id: 'workflows',
  routes: {
    root: rootRouteRef,
  },
});

export const WorkflowsPage = workflowsPlugin.provide(
  createRoutableExtension({
    name: 'WorkflowsPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);

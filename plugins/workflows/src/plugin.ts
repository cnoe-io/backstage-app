import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootCatalogWorkflowsRouteRef } from './routes';

export const workflowsPlugin = createPlugin({
  id: 'workflows',
  routes: {
    entityContent: rootCatalogWorkflowsRouteRef,
  },
});

export const EntityWorkflowsContent = workflowsPlugin.provide(
  createRoutableExtension({
    name: 'EntityWorkflowsContent',
    component: () =>
      import('./components/BlueprintComponent').then(m => m.BlueprintsComponent),
    mountPoint: rootCatalogWorkflowsRouteRef,
  }),
);

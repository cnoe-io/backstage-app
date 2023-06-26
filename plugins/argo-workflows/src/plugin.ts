import {
    configApiRef,
    createApiFactory,
    createPlugin,
    createRoutableExtension,
    discoveryApiRef, identityApiRef
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';
import {ArgoWorkflows, argoWorkflowsApiRef} from "./api/indext";
import {kubernetesApiRef} from "@backstage/plugin-kubernetes";


export const argoWorkflowsPlugin = createPlugin({
  id: 'argo-workflows',
  routes: {
    root: rootRouteRef,
  },
  apis: [
      createApiFactory({
          api: argoWorkflowsApiRef,
          deps: {
              discoveryApi: discoveryApiRef,
              kubernetesApi: kubernetesApiRef,
              identityApi: identityApiRef,
              configApi: configApiRef},
          factory: ({
              discoveryApi, kubernetesApi, configApi, identityApi,
          }) =>
            new ArgoWorkflows(discoveryApi, kubernetesApi, configApi, identityApi)
      })
  ]
});

export const ArgoWorkflowsPage = argoWorkflowsPlugin.provide(
  createRoutableExtension({
    name: 'ArgoWorkflowsPage',
    component: () =>
      import('./components/Overview').then(m => m.OverviewComponent),
    mountPoint: rootRouteRef,
  }),
);

import {
    configApiRef,
    createApiFactory,
    createPlugin,
    createRoutableExtension,
    discoveryApiRef, oauthRequestApiRef
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
              oauthRequestApi: oauthRequestApiRef,
              configApi: configApiRef},
          factory: ({
              discoveryApi, kubernetesApi, configApi, oauthRequestApi,
          }) =>
            new ArgoWorkflows(discoveryApi, kubernetesApi, configApi, oauthRequestApi)
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

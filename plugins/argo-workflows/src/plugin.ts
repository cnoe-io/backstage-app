import {
  configApiRef,
  createApiFactory,
  createPlugin,
  createRoutableExtension,
  discoveryApiRef,
  fetchApiRef,
} from "@backstage/core-plugin-api";

import { rootRouteRef } from "./routes";
import { ArgoWorkflows, argoWorkflowsApiRef } from "./api";
import { kubernetesApiRef } from "@backstage/plugin-kubernetes";

export const argoWorkflowsPlugin = createPlugin({
  id: "argo-workflows",
  routes: {
    root: rootRouteRef,
  },
  apis: [
    createApiFactory({
      api: argoWorkflowsApiRef,
      deps: {
        discoveryApi: discoveryApiRef,
        kubernetesApi: kubernetesApiRef,
        configApi: configApiRef,
        fetchApi: fetchApiRef,
      },
      factory: ({ discoveryApi, kubernetesApi, configApi, fetchApi }) =>
        new ArgoWorkflows(discoveryApi, kubernetesApi, configApi, fetchApi),
    }),
  ],
});

export const ArgoWorkflowsPage = argoWorkflowsPlugin.provide(
  createRoutableExtension({
    name: "ArgoWorkflowsPage",
    component: () =>
      import("./components/Overview").then((m) => m.OverviewComponent),
    mountPoint: rootRouteRef,
  })
);

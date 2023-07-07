import {
  createApiFactory,
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';
import { apacheSparkApiRef, ApacheSparkClient } from './api';
import { kubernetesApiRef } from '@backstage/plugin-kubernetes';

export const APACHE_SPARK_LABEL_SELECTOR_ANNOTATION =
  'apache-spark/label-selector';
export const CLUSTER_NAME_ANNOTATION = 'apache-spark/cluster-name';
export const K8S_LABEL_SELECTOR_ANNOTATION =
  'backstage.io/kubernetes-label-selector';
export const K8S_NAMESPACE_ANNOTATION = 'backstage.io/kubernetes-namespace';
export const apacheSparkPlugin = createPlugin({
  id: 'apache-spark',
  routes: {
    root: rootRouteRef,
  },
  apis: [
    createApiFactory({
      api: apacheSparkApiRef,
      deps: {
        kubernetesApi: kubernetesApiRef,
      },
      factory: ({ kubernetesApi }) => new ApacheSparkClient(kubernetesApi),
    }),
  ],
});

export const ApacheSparkPage = apacheSparkPlugin.provide(
  createRoutableExtension({
    name: 'ApacheSparkPage',
    component: () =>
      import('./components/Overvew').then(m => m.ApacheSparkOverviewPage),
    mountPoint: rootRouteRef,
  }),
);

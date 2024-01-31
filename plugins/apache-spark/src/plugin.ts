import {
  createApiFactory,
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import {rootRouteRef} from './routes';
import {apacheSparkApiRef, ApacheSparkClient} from './api';
import {kubernetesApiRef} from '@backstage/plugin-kubernetes';
import {Entity} from '@backstage/catalog-model';

import {
  APACHE_SPARK_LABEL_SELECTOR_ANNOTATION,
} from './consts';

export const isApacheSparkAvailable = (entity: Entity) =>
  Boolean(entity.metadata.annotations?.[APACHE_SPARK_LABEL_SELECTOR_ANNOTATION]);

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
      factory: ({kubernetesApi}) => new ApacheSparkClient(kubernetesApi),
    }),
  ],
});

export const ApacheSparkPage = apacheSparkPlugin.provide(
  createRoutableExtension({
    name: 'ApacheSparkPage',
    component: () =>
      import('./components/Overview').then(m => m.ApacheSparkOverviewPage),
    mountPoint: rootRouteRef,
  }),
);

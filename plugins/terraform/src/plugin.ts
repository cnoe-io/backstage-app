import { createPlugin, createRoutableExtension, createApiFactory, identityApiRef, configApiRef } from '@backstage/core-plugin-api';
import { rootRouteRef } from './routes';
import {Terraform, TerraformApiRef} from "./api";
import {kubernetesApiRef} from "@backstage/plugin-kubernetes";

import {
  TERRAFORM_S3_BUCKET,
  TERRAFORM_S3_PREFIX,
  TERRAFORM_LOCAL_PATH,
  TERRAFORM_SECRET_NAME,
  TERRAFORM_SECRET_NAMESPACE,
} from './consts';

import {Entity} from '@backstage/catalog-model';

export const isTerraformAvailable = (entity: Entity) =>
  ((Boolean(entity.metadata.annotations?.[TERRAFORM_S3_BUCKET]) &&
    Boolean(entity.metadata.annotations?.[TERRAFORM_S3_PREFIX])) ||
    Boolean(entity.metadata.annotations?.[TERRAFORM_LOCAL_PATH]) ||
   (Boolean(entity.metadata.annotations?.[TERRAFORM_SECRET_NAME]) &&
    Boolean(entity.metadata.annotations?.[TERRAFORM_SECRET_NAMESPACE]))
  );

export const terraformPlugin = createPlugin({
  id: 'terraform',
  routes: {
    root: rootRouteRef,
  },
  apis: [
    createApiFactory({
      api: TerraformApiRef,
      deps: {
        kubernetesApi: kubernetesApiRef,
        identityApi: identityApiRef,
        configApi: configApiRef,
      },
      factory: ({kubernetesApi, identityApi, configApi}) =>
        new Terraform(kubernetesApi, identityApi, configApi),
    }),
  ],
});

export const TerraformPluginPage = terraformPlugin.provide(
  createRoutableExtension({
    name: 'TerraformPluginPage',
    component: () =>
      import('./components/RootComponent').then(m => m.RootComponent),
    mountPoint: rootRouteRef,
  }),
);

import { ScmIntegrations } from '@backstage/integration';
import { createPublishGiteaAction } from './gitea-actions';

import {
  coreServices,
  createBackendModule,
} from '@backstage/backend-plugin-api';
import { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node/alpha';
import { createArgoCDApp } from './argocd';
import { getRootLogger } from '@backstage/backend-common';
import { createKubernetesApply } from './k8s-apply';
import { createSanitizeResource } from './sanitize';
import { createVerifyDependency } from './verify';
import { createHttpRequest } from './http-request';

export const cnoeScaffolderActions = createBackendModule({
  pluginId: 'scaffolder',
  moduleId: 'cnoe-actions',
  register(env) {
    env.registerInit({
      deps: {
        scaffolder: scaffolderActionsExtensionPoint,
        config: coreServices.rootConfig,
      },
      async init({ scaffolder, config }) {
        const integrations = ScmIntegrations.fromConfig(config);
        const logger = getRootLogger();

        scaffolder.addActions(
          createPublishGiteaAction({
            integrations,
            config,
          }),
          createArgoCDApp({
            config,
            logger,
          }),
          createKubernetesApply(config),
          createSanitizeResource(),
          createVerifyDependency(),
          createHttpRequest(),
        );
      },
    });
  },
});

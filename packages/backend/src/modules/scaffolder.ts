import { ScmIntegrations } from '@backstage/integration';
import {
  coreServices,
  createBackendModule,
} from '@backstage/backend-plugin-api';
import { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node';
import { createPublishGiteaAction } from './actions/gitea-actions';
import { createArgoCDApp } from './actions/argocd';
import { createKubernetesApply } from './actions/k8s-apply';
import { createSanitizeResource } from './actions/sanitize';
import { createVerifyDependency } from './actions/verify';

export const cnoeScaffolderActions = createBackendModule({
  pluginId: 'scaffolder',
  moduleId: 'cnoe-actions',
  register(env) {
    env.registerInit({
      deps: {
        scaffolder: scaffolderActionsExtensionPoint,
        config: coreServices.rootConfig,
        logger: coreServices.logger,
      },
      async init({ scaffolder, config, logger }) {
        const integrations = ScmIntegrations.fromConfig(config);

        scaffolder.addActions(
          createPublishGiteaAction({ integrations, config }),
          createArgoCDApp({ config, logger }),
          createKubernetesApply(config),
          createSanitizeResource(),
          createVerifyDependency(),
        );
      },
    });
  },
});

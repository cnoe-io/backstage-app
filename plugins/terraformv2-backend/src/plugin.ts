import {
  coreServices,
  createBackendPlugin,
} from '@backstage/backend-plugin-api';
import { createRouter } from './service/router';

/**
 * terraformv2Plugin backend plugin
 *
 * @public
 */
export const terraformv2Plugin = createBackendPlugin({
  pluginId: 'terraformv2',
  register(env) {
    env.registerInit({
      deps: {
        httpRouter: coreServices.httpRouter,
        logger: coreServices.logger,
        config: coreServices.rootConfig,
      },
      async init({
        httpRouter,
        logger,
        config,
      }) {
        httpRouter.addAuthPolicy({
          path: '/health',
          allow: 'unauthenticated',
        });

        httpRouter.use(await createRouter({
          config,
          logger,
        }));
      },
    });
  },
});

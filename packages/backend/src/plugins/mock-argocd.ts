import {
  coreServices,
  createBackendPlugin,
} from '@backstage/backend-plugin-api';
import { Router } from 'express';
import * as path from 'path';
import * as fs from 'fs';

function loadFixture(name: string): any {
  // eslint-disable-next-line no-restricted-syntax
  const filePath = path.resolve(__dirname, '../mocks/fixtures', name);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

/**
 * Mock ArgoCD backend plugin — serves fixture ArgoCD app data
 * in MOCK_MODE. The @roadiehq/backstage-plugin-argo-cd frontend
 * calls the argocd backend proxy at /api/argocd/argoInstance/...
 */
export default createBackendPlugin({
  pluginId: 'argocd',
  register(env) {
    env.registerInit({
      deps: {
        httpRouter: coreServices.httpRouter,
        logger: coreServices.logger,
      },
      async init({ httpRouter, logger }) {
        logger.info('Mock ArgoCD backend activated (MOCK_MODE=true)');

        const argocdApps = loadFixture('argocd-applications.json');

        const router = Router();

        // Service locator routes — called first to find which instance has the app
        // When searchInstances=true, baseUrl is /api/argocd, so these are at /api/argocd/find/...
        router.get('/find/name/:appName', (req, res) => {
          logger.info(`Mock ArgoCD: service locator for ${req.params.appName}`);
          res.json([{ name: 'local', url: 'https://cnoe.localtest.me:8443/argocd', appName: [req.params.appName] }]);
        });

        router.get('/find/selector/:selector', (req, res) => {
          logger.info(`Mock ArgoCD: service locator by selector ${req.params.selector}`);
          res.json([{ name: 'local', url: 'https://cnoe.localtest.me:8443/argocd', appName: ['platform-api-service'] }]);
        });

        // The Roadie ArgoCD plugin calls:
        // GET /argoInstance/argocd/applications/name/{appName}
        // GET /argoInstance/argocd/applications/name/{appName}?namespace={ns}
        // GET /argoInstance/argocd/applications/selector/{selector}
        router.get('/argoInstance/:instanceName/applications/name/:appName', (req, res) => {
          const { appName } = req.params;
          logger.info(`Mock ArgoCD: serving app ${appName}`);
          const app = argocdApps.items.find((a: any) => a.metadata.name === appName);
          if (app) {
            return res.json(app);
          }
          return res.json(argocdApps.items[0]);
        });

        router.get('/argoInstance/:instanceName/applications/selector/:selector', (req, res) => {
          logger.info(`Mock ArgoCD: serving apps by selector ${req.params.selector}`);
          res.json(argocdApps);
        });

        // Catch-all for other argocd routes
        router.all('*', (req, res) => {
          logger.info(`Mock ArgoCD: catch-all for ${req.method} ${req.path}`);
          res.json(argocdApps);
        });

        httpRouter.addAuthPolicy({
          path: '/',
          allow: 'unauthenticated',
        });

        httpRouter.use(router);
        logger.info('Mock ArgoCD routes registered: /api/argocd/*');
      },
    });
  },
});

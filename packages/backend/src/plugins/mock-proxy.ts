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
 * Mock proxy backend plugin — replaces the real proxy backend
 * in MOCK_MODE, handling proxy routes like /api/proxy/argo-workflows/api/*.
 * Registers with pluginId 'proxy' so it handles /api/proxy/* routes.
 */
export default createBackendPlugin({
  pluginId: 'proxy',
  register(env) {
    env.registerInit({
      deps: {
        httpRouter: coreServices.httpRouter,
        logger: coreServices.logger,
      },
      async init({ httpRouter, logger }) {
        logger.info('Mock proxy backend activated (MOCK_MODE=true)');

        const argoWorkflows = loadFixture('argo-workflows.json');
        const argoWorkflowTemplates = loadFixture('argo-workflow-templates.json');
        const argocdApps = loadFixture('argocd-applications.json');

        const router = Router();

        // Argo Workflows proxy routes
        // Plugin builds URL as: proxyUrl + /argo-workflows/api + /api/v1/workflows/{ns}
        router.get('/argo-workflows/api/api/v1/workflows/:namespace', (_req, res) => {
          logger.info(`Mock proxy: serving argo workflows for namespace ${_req.params.namespace}`);
          res.json(argoWorkflows);
        });

        router.get('/argo-workflows/api/api/v1/workflow-templates/:namespace', (_req, res) => {
          logger.info(`Mock proxy: serving argo workflow templates for namespace ${_req.params.namespace}`);
          res.json(argoWorkflowTemplates);
        });

        // ArgoCD service locator — plugin calls this first to find which instance has the app
        router.get('/find/name/:appName', (req, res) => {
          logger.info(`Mock proxy: ArgoCD service locator for ${req.params.appName}`);
          res.json([{ name: 'local', url: 'https://cnoe.localtest.me:8443/argocd', appName: [req.params.appName] }]);
        });

        router.get('/find/selector/:selector', (req, res) => {
          logger.info(`Mock proxy: ArgoCD service locator by selector ${req.params.selector}`);
          res.json([{ name: 'local', url: 'https://cnoe.localtest.me:8443/argocd', appName: ['platform-api-service'] }]);
        });

        // ArgoCD proxy routes — used by @roadiehq/backstage-plugin-argo-cd
        // Plugin calls: proxyUrl + /argoInstance/{instance}/applications/name/{appName}
        router.get('/argoInstance/:instanceName/applications/name/:appName', (req, res) => {
          const { appName } = req.params;
          logger.info(`Mock proxy: serving ArgoCD app ${appName}`);
          const app = argocdApps.items.find((a: any) => a.metadata.name === appName);
          res.json(app || argocdApps.items[0]);
        });

        router.get('/argoInstance/:instanceName/applications/selector/:selector', (req, res) => {
          logger.info(`Mock proxy: serving ArgoCD apps by selector ${req.params.selector}`);
          res.json(argocdApps.items);
        });

        // Catch-all for other proxy routes
        router.all('*', (req, res) => {
          logger.warn(`Mock proxy: no handler for ${req.method} ${req.path}`);
          res.status(404).json({ error: 'No mock proxy handler for this path' });
        });

        httpRouter.addAuthPolicy({
          path: '/',
          allow: 'unauthenticated',
        });

        httpRouter.use(router);
        logger.info('Mock proxy routes registered: /api/proxy/argo-workflows/*');
      },
    });
  },
});

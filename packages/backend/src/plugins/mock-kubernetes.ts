import {
  coreServices,
  createBackendPlugin,
} from '@backstage/backend-plugin-api';
import { Router } from 'express';
import * as path from 'path';
import * as fs from 'fs';

function loadFixture(name: string): any {
  const filePath = path.resolve(__dirname, '../mocks/fixtures', name);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function loadFixtureText(name: string): string {
  const filePath = path.resolve(__dirname, '../mocks/fixtures', name);
  return fs.readFileSync(filePath, 'utf8');
}

/**
 * Mock kubernetes backend plugin — replaces the real kubernetes backend
 * in MOCK_MODE, serving fixture data for proxy requests.
 * Registers with pluginId 'kubernetes' so it handles /api/kubernetes/* routes.
 */
export default createBackendPlugin({
  pluginId: 'kubernetes',
  register(env) {
    env.registerInit({
      deps: {
        httpRouter: coreServices.httpRouter,
        logger: coreServices.logger,
      },
      async init({ httpRouter, logger }) {
        logger.info('Mock kubernetes backend activated (MOCK_MODE=true)');

        const sparkApplications = loadFixture('spark-applications.json');
        const argoWorkflows = loadFixture('argo-workflows.json');
        const argoWorkflowTemplates = loadFixture('argo-workflow-templates.json');
        const kubernetesWorkloads = loadFixture('kubernetes-workloads.json');
        const sparkLogs = loadFixtureText('spark-logs.txt');

        const router = Router();
        router.use(require('express').json());

        // Mock /clusters endpoint
        router.get('/clusters', (_req, res) => {
          res.json({
            items: [
              {
                name: 'local',
                authProvider: 'serviceAccount',
                dashboardUrl: '',
              },
            ],
          });
        });

        // Mock workloads/objects endpoints — used by EntityKubernetesContent
        router.post('/services/:entityName', (_req, res) => {
          logger.info(`Mock K8s: serving workloads for entity ${_req.params.entityName}`);
          res.json(kubernetesWorkloads);
        });

        router.post('/resources/workloads/query', (_req, res) => {
          logger.info('Mock K8s: serving workloads query');
          res.json(kubernetesWorkloads);
        });

        router.post('/resources/custom/query', (_req, res) => {
          logger.info('Mock K8s: serving custom resources query');
          res.json(kubernetesWorkloads);
        });

        // Mock proxy endpoint — handles all kubernetes API proxy requests
        router.all('/proxy/*', (req, res) => {
          const proxyPath = req.params[0] || req.path;

          // Pod logs
          if (proxyPath.includes('/log')) {
            logger.info(`Mock K8s: serving spark logs for ${proxyPath}`);
            return res.type('text/plain').send(sparkLogs);
          }

          // Single pod
          if (proxyPath.match(/\/pods\/[^/]+$/) && !proxyPath.includes('/log')) {
            logger.info(`Mock K8s: serving pod info for ${proxyPath}`);
            return res.json({
              metadata: { name: 'spark-etl-job-driver', namespace: 'default' },
              spec: { containers: [{ name: 'spark-kubernetes-driver' }] },
            });
          }

          // Spark applications
          if (proxyPath.includes('sparkoperator.k8s.io') || proxyPath.includes('sparkapplications')) {
            logger.info(`Mock K8s: serving spark applications for ${proxyPath}`);
            return res.json(sparkApplications);
          }

          // Argo workflow templates (check before workflows)
          if (proxyPath.includes('workflowtemplates')) {
            logger.info(`Mock K8s: serving argo workflow templates for ${proxyPath}`);
            return res.json(argoWorkflowTemplates);
          }

          // Argo workflows
          if (proxyPath.includes('argoproj.io') && proxyPath.includes('workflows')) {
            logger.info(`Mock K8s: serving argo workflows for ${proxyPath}`);
            return res.json(argoWorkflows);
          }

          // Secrets (for terraform)
          if (proxyPath.includes('/secrets/')) {
            logger.info(`Mock K8s: serving mock secret for ${proxyPath}`);
            const terraformState = loadFixture('terraform-state.json');
            return res.json({
              data: {
                tfstate: Buffer.from(JSON.stringify(terraformState)).toString('base64'),
              },
            });
          }

          logger.warn(`Mock K8s: no fixture for proxy path: ${proxyPath}`);
          return res.status(404).json({ error: 'No mock fixture for this path' });
        });

        // Allow all mock routes without auth
        httpRouter.addAuthPolicy({
          path: '/',
          allow: 'unauthenticated',
        });

        httpRouter.use(router);
        logger.info('Mock kubernetes routes registered: /api/kubernetes/clusters, /api/kubernetes/proxy/*');
      },
    });
  },
});

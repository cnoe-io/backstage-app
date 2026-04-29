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

/**
 * Mock terraform backend plugin — replaces the real terraform backend
 * in MOCK_MODE, serving fixture data. Registers with pluginId 'terraform'
 * so it handles /api/terraform/* routes.
 */
export default createBackendPlugin({
  pluginId: 'terraform',
  register(env) {
    env.registerInit({
      deps: {
        httpRouter: coreServices.httpRouter,
        logger: coreServices.logger,
      },
      async init({ httpRouter, logger }) {
        logger.info('Mock terraform backend activated (MOCK_MODE=true)');

        const terraformState = loadFixture('terraform-state.json');
        const terraformFileList = loadFixture('terraform-file-list.json');

        const router = Router();

        router.get('/health', (_req, res) => {
          res.json({ status: 'ok' });
        });

        router.post('/deflate', (_req, res) => {
          res.json(terraformState);
        });

        router.post('/getFileList', (_req, res) => {
          res.json(terraformFileList);
        });

        router.post('/getLocalFileList', (_req, res) => {
          res.json(terraformFileList);
        });

        router.post('/getTFStateFile', (_req, res) => {
          res.json(terraformState);
        });

        httpRouter.addAuthPolicy({
          path: '/',
          allow: 'unauthenticated',
        });

        httpRouter.use(router);
        logger.info('Mock terraform routes registered: /api/terraform/*');
      },
    });
  },
});

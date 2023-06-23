import { errorHandler } from '@backstage/backend-common';
import express from 'express';
import Router from 'express-promise-router';
import { Logger } from 'winston';
import {Config} from "@backstage/config";
import {Workflows} from "./workflows";

export interface RouterOptions {
  config: Config
  logger: Logger;
}


export async function createRouter(
  options: RouterOptions,
): Promise<express.Router> {
  const { logger } = options;

  const workflowSvc = new Workflows(options.config)

  const router = Router();
  router.use(express.json());

  router.get('/workflows',
      async (request, response) => {
        const selector = request.query.labelSelector
        workflowSvc.getWorkflowData()
  }

  );

  router.get('/health', (_, response) => {
    logger.info('PONG!');
    response.json({ status: 'ok' });
  });
  router.use(errorHandler());
  return router;
}

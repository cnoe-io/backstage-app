import { errorHandler } from '@backstage/backend-common';
import { Config } from '@backstage/config';
import express from 'express';
import Router from 'express-promise-router';
import { Logger } from 'winston';
// import { AwsCostAndUsageInsightsApi } from '../api/AwsCostAndUsageInsightsApi';
import { CatalogApi } from '@backstage/catalog-client';
// import { AwsCloudWatchApi, AwsECSApi } from '../api';
// import { AwsWellArchitectedApi } from '../api/AwsWellArchitectedApi';
// import { AwsSecurityHubApi } from '../api/AwsSecurityHubApi';
// import { AwsResourceLocatorFactory } from '../api/AwsResourceLocator';
import { AmazonQApi } from '../api/AmazonQApi';

export interface RouterOptions {
  logger: Logger;
  config: Config;
  catalogApi: CatalogApi;
}

export async function createRouter(
  options: RouterOptions,
): Promise<express.Router> {
  const { logger, config, catalogApi } = options;

  // const awsResourceLocator = await AwsResourceLocatorFactory.fromConfig(
  //   config,
  //   logger,
  // );

  // const awsCURApi = await AwsCostAndUsageInsightsApi.fromConfig(
  //   config,
  //   catalogApi,
  //   logger,
  // );
  // const awsWellArchitectedApi = await AwsWellArchitectedApi.fromConfig(
  //   config,
  //   logger,
  // );
  // const awsCloudWatchApi = await AwsCloudWatchApi.fromConfig(
  //   config,
  //   catalogApi,
  //   logger,
  // );
  // const awsECSApi = await AwsECSApi.fromConfig(
  //   config,
  //   catalogApi,
  //   logger,
  //   awsResourceLocator,
  // );
  // const awsSecurityHubApi = await AwsSecurityHubApi.fromConfig(
  //   config,
  //   catalogApi,
  //   logger,
  // );
  const amazonQApi = await AmazonQApi.fromConfig(config, logger);

  const router = Router();
  router.use(express.json());

  router.get('/health', (_, response) => {
    logger.info('PONG!');
    response.json({ status: 'ok' });
  });

  // router.get('/cost-insights/entity', async (req, res) => {
  //   const entityRef = req.query.entityRef?.toString();
  //   const intervals = req.query.intervals?.toString();

  //   const response = await awsCURApi.getCatalogEntityDailyCost(
  //     entityRef!,
  //     intervals!,
  //   );
  //   res.status(200).json(response);
  // });
  // router.get('/ecs/services', async (req, res) => {
  //   const entityRef = req.query.entityRef?.toString();

  //   if (entityRef === undefined) {
  //     res.status(400).send({ error: 'No entityRef provided' });
  //     return;
  //   }

  //   const services = await awsECSApi.getServicesByComponent(entityRef);
  //   res.status(200).json(services);
  // });

  // router.get('/wellarchitected/component', async (req, res) => {
  //   const component = req.query.component?.toString();

  //   if (component === undefined) {
  //     res.status(400).send({ error: 'No component provided' });
  //     return;
  //   }

  //   const review = await awsWellArchitectedApi.getReviewByComponent(component);

  //   if (!review) {
  //     res.status(200).json('{}');
  //   } else {
  //     res.status(200).json(review);
  //   }
  // });

  // router.get('/cloudwatch/alarms', async (req, res) => {
  //   const entityRef = req.query.ref?.toString();

  //   if (entityRef === undefined) {
  //     res.status(400).send({ error: 'No entity reference' });
  //     return;
  //   }

  //   const services = await awsCloudWatchApi.getAlarms(entityRef);
  //   res.status(200).json(services);
  // });

  // router.get('/securityhub/findings', async (req, res) => {
  //   const entityRef = req.query.ref?.toString();

  //   if (entityRef === undefined) {
  //     res.status(400).send({ error: 'No entity reference' });
  //     return;
  //   }

  //   const services = await awsSecurityHubApi.getFindings(entityRef);
  //   res.status(200).json(services);
  // });

  router.post('/qbusiness/sync', async (req, res) => {
    const conversationId = req.query.conversation?.toString();
    const previousMessageId = req.query.previous?.toString();

    const userMessage = req.body.message as string;
    const userId = req.body.user as string;

    const response = await amazonQApi.chatSync(
      userMessage,
      userId,
      conversationId,
      previousMessageId,
    );
    res.status(200).json(response);
  });

  router.use(errorHandler());
  return router;
}

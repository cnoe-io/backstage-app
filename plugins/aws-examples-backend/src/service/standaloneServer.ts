import { HostDiscovery, createServiceBuilder } from '@backstage/backend-common';
import { Server } from 'http';
import { Logger } from 'winston';
import { createRouter } from './router';
import { ConfigReader } from '@backstage/config';
import { CatalogClient } from '@backstage/catalog-client';

export interface ServerOptions {
  port: number;
  enableCors: boolean;
  logger: Logger;
}

export async function startStandaloneServer(
  options: ServerOptions,
): Promise<Server> {
  const logger = options.logger.child({ service: 'aws-examples-backend' });
  const config = new ConfigReader({});

  const catalogApi = new CatalogClient({
    discoveryApi: HostDiscovery.fromConfig(config),
  });
  
  logger.debug('Starting application server...');
  const router = await createRouter({
    logger,
    catalogApi,
    config
  });

  let service = createServiceBuilder(module)
    .setPort(options.port)
    .addRouter('/aws-examples', router);
  if (options.enableCors) {
    service = service.enableCors({ origin: 'http://localhost:3000' });
  }

  return await service.start().catch(err => {
    logger.error(err);
    process.exit(1);
  });
}

module.hot?.accept();

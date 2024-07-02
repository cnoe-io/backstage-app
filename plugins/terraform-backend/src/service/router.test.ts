import { getVoidLogger } from '@backstage/backend-common';
import { ConfigApi } from "@backstage/core-plugin-api"
import express from 'express';
import request from 'supertest';

import { createRouter } from './router';

describe('createRouter', () => {
  let app: express.Express;

  const mockConfig: jest.Mocked<ConfigApi> = {
    has: jest.fn(),
    keys: jest.fn(),
    get: jest.fn(),
    getOptional: jest.fn(),
    getConfig: jest.fn(),
    getOptionalConfig: jest.fn(),
    getConfigArray: jest.fn(),
    getOptionalConfigArray: jest.fn(),
    getNumber: jest.fn(),
    getOptionalNumber: jest.fn(),
    getBoolean: jest.fn(),
    getOptionalBoolean: jest.fn(),
    getString: jest.fn(),
    getOptionalString: jest.fn(),
    getStringArray: jest.fn(),
    getOptionalStringArray: jest.fn(),
  }

  beforeAll(async () => {
    const router = await createRouter({
      logger: getVoidLogger(),
      config: mockConfig,
    });
    app = express().use(router);
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('GET /health', () => {
    it('returns ok', async () => {
      const response = await request(app).get('/health');

      expect(response.status).toEqual(200);
      expect(response.body).toEqual({ status: 'ok' });
    });
  });
});

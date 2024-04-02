import { getVoidLogger } from '@backstage/backend-common';
import express from 'express';
import request from 'supertest';

import { createRouter } from './router';
import { MockConfigApi } from '@backstage/test-utils'
import { CatalogApi } from '@backstage/catalog-client';

const entity = {
    apiVersion: '1',
    kind: 'Component',
    metadata: {
      name: 'mock-entity',
    },
  };

const mockCatalogApi = {
  getEntities: jest.fn(),
  getEntityByRef: jest
  .fn()
  .mockImplementation(async () => (entity)),
} as unknown as CatalogApi;

describe('createRouter', () => {
  let app: express.Express;

  beforeAll(async () => {
    const router = await createRouter({
      logger: getVoidLogger(),
      catalogApi: mockCatalogApi,
      config: new MockConfigApi({
        app: { baseUrl: 'https://example.com' },
      })
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
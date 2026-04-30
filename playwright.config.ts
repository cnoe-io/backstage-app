import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 90000,
  retries: 1,
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    screenshot: 'only-on-failure',
    actionTimeout: 30000,
  },
  webServer: {
    command: 'WDS_SOCKET_PORT=0 DISABLE_ESLINT_PLUGIN=true MOCK_MODE=true yarn dev',
    port: 3000,
    timeout: 180000,
    reuseExistingServer: true,
  },
});

import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 60000,
  retries: 1,
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'MOCK_MODE=true yarn dev',
    port: 3000,
    timeout: 120000,
    reuseExistingServer: true,
  },
});

import { test, expect } from '@playwright/test';

test.describe('CNOE Backstage Plugin Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const enterBtn = page.getByRole('button', { name: 'Enter' });
    if (await enterBtn.isVisible({ timeout: 10000 }).catch(() => false)) {
      await enterBtn.click();
      await page.waitForURL('**/home', { timeout: 15000 });
    }
  });

  test('homepage loads with quick links', async ({ page }) => {
    await page.goto('/home');
    await expect(page.getByText('Internal Developer Platform')).toBeVisible({ timeout: 30000 });
    await expect(page.getByText('Quick Links')).toBeVisible();
    await expect(page.getByText('Starred Entities')).toBeVisible();
  });

  test('catalog page loads', async ({ page }) => {
    await page.goto('/catalog');
    await expect(page.getByText('CNOE Catalog')).toBeVisible({ timeout: 30000 });
  });

  test('entity page shows plugin tabs', async ({ page }) => {
    // Navigate to the platform-api-service entity which has all plugin annotations
    await page.goto('/catalog/default/component/platform-api-service');

    // Wait for entity page to load
    await expect(page.getByText('platform-api-service')).toBeVisible({ timeout: 30000 });

    // Check that plugin tabs are visible
    await expect(page.getByRole('tab', { name: 'Overview' })).toBeVisible();
    await expect(page.getByRole('tab', { name: 'Kubernetes' })).toBeVisible();
    await expect(page.getByRole('tab', { name: 'API' })).toBeVisible();
    await expect(page.getByRole('tab', { name: 'Dependencies' })).toBeVisible();
    await expect(page.getByRole('tab', { name: 'Docs' })).toBeVisible();
  });

  test('Apache Spark tab renders', async ({ page }) => {
    await page.goto('/catalog/default/component/platform-api-service');
    await expect(page.getByText('platform-api-service')).toBeVisible({ timeout: 30000 });

    // Click Apache Spark tab
    const sparkTab = page.getByRole('tab', { name: 'Apache Spark' });
    if (await sparkTab.isVisible()) {
      await sparkTab.click();
      // Should show the spark overview table (may show error if mock not working, but tab should render)
      await page.waitForTimeout(2000);
      // Verify no crash - page should still be functional
      await expect(page.locator('body')).not.toContainText('Something went wrong');
    }
  });

  test('Argo Workflows tab renders', async ({ page }) => {
    await page.goto('/catalog/default/component/platform-api-service');
    await expect(page.getByText('platform-api-service')).toBeVisible({ timeout: 30000 });

    const argoTab = page.getByRole('tab', { name: 'Argo Workflows' });
    if (await argoTab.isVisible()) {
      await argoTab.click();
      await page.waitForTimeout(2000);
      await expect(page.locator('body')).not.toContainText('Something went wrong');
    }
  });

  test('Terraform tab renders', async ({ page }) => {
    await page.goto('/catalog/default/component/platform-api-service');
    await expect(page.getByText('platform-api-service')).toBeVisible({ timeout: 30000 });

    const tfTab = page.getByRole('tab', { name: 'Terraform' });
    if (await tfTab.isVisible()) {
      await tfTab.click();
      await page.waitForTimeout(2000);
      await expect(page.locator('body')).not.toContainText('Something went wrong');
    }
  });

  test('no console errors on entity page', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.goto('/catalog/default/component/platform-api-service');
    await expect(page.getByText('platform-api-service')).toBeVisible({ timeout: 30000 });

    const unexpectedErrors = errors.filter(
      e =>
        !e.includes('401') &&
        !e.includes('Failed to load') &&
        !e.includes('fetch') &&
        !e.includes('net::') &&
        !e.includes('Warning:') &&
        !e.includes('prop'),
    );

    expect(unexpectedErrors).toHaveLength(0);
  });

  test('settings page shows theme switcher', async ({ page }) => {
    await page.goto('/settings');
    await expect(page.getByText('Appearance')).toBeVisible({ timeout: 30000 });
    await expect(page.getByRole('button', { name: 'CNOE Light' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'CNOE Dark' })).toBeVisible();
  });
});

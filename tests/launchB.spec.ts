import { test} from '@playwright/test';
test('launch browser', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });
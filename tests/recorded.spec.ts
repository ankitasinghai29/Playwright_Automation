import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('ankis123@gmail.com');
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill('singhai');
  await page.getByLabel('Remember me?').check();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Books' }).first().click();
  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  await page.getByRole('link', { name: 'Shopping cart (1)' }).click();
  await page.locator('#termsofservice').check();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});
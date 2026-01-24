import { test, expect } from '@playwright/test';

test('Test.', async ({ page }) => {
  await page.goto('');
  await expect(page.locator('#password')).toBeVisible();
  await page.locator('#email').fill('test@mail.com');
  console.log('Hello');

});

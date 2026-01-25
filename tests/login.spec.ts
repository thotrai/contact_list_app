import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { generateRandomUser } from '../utils/helperFunctions';

test('Verify error messgae for incorrect username or password.', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const user = generateRandomUser();

  await page.goto('');
  await loginPage.emailInput.fill(user.email);
  await loginPage.passwordInput.fill(user.password);
  await loginPage.submitButton.click();
  await expect(loginPage.errorMessage).toBeVisible();
});
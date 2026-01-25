import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { generateRandomUser } from '../utils/helperFunctions';
import { createUserViaAPI } from '../utils/apiHelpers';
import { ContactListPage } from '../pages/ContactListPage';

test.describe('Login flow.', () => {
    let user: ReturnType<typeof generateRandomUser>;

    test.beforeEach('Test data setup via API.', async ({ request }) => {
        user = generateRandomUser();
        await createUserViaAPI(request, user);
    });

    test('Login and verify that the Contact List is visible.', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const contactListPage = new ContactListPage(page);

        await page.goto('');
        await loginPage.emailInput.fill(user.email);
        await loginPage.passwordInput.fill(user.password);
        await loginPage.submitButton.click();
        await contactListPage.expectPageToBeVisible();
    });
});

test('Verify error messgae for incorrect username or password.', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const user = generateRandomUser();

  await page.goto('');
  await loginPage.emailInput.fill(user.email);
  await loginPage.passwordInput.fill(user.password);
  await loginPage.submitButton.click();
  await expect(loginPage.errorMessage).toBeVisible();
});
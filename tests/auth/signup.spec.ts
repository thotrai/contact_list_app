import { test } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { SignupPage } from '@pages/SignupPage';
import { generateRandomUser } from '@utils/helperFunctions';
import { ContactListPage } from '@pages/ContactListPage';

test('Verify that the account has been created and logged in.', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const signupPage = new SignupPage(page);
  const user = generateRandomUser();
  const contactListPage = new ContactListPage(page);

  await page.goto('');
  await loginPage.signupButton.click();
  await signupPage.expectPageToBeVisible();
  await signupPage.signup(user.firstName, user.lastName, user.email, user.password);
  await signupPage.submitButton.click();
  await contactListPage.expectPageToBeVisible();

});
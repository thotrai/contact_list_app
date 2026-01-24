import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import testData from '../test-data/testData.json';
import { ContactListPage } from '../pages/ContactListPage';
import { AddContactPage } from '../pages/AddContactPage';

test('Add a new contact, logout, login again and verify that the previously added contact is displayed.', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const contactListPage = new ContactListPage(page);
  const addContactPage = new AddContactPage(page);

  await page.goto('');
  await loginPage.login(testData.validUser.email, testData.validUser.password);
  await contactListPage.expectPageToBeVisible();
  await contactListPage.addContactButton.click();
  await addContactPage.expectPageToBeVisible();
  await addContactPage.addContact(testData.validUser.firstName, testData.validUser.lastName, testData.validUser.birthdate, testData.validUser.email, testData.validUser.phone, testData.validUser.streetAddress1, testData.validUser.streetAddress2, testData.validUser.city, testData.validUser.stateOfProvince, testData.validUser.postalCode, testData.validUser.country);
  await contactListPage.expectAddedContactToBeVisible(testData.validUser.firstName, testData.validUser.lastName, testData.validUser.birthdate, testData.validUser.email, testData.validUser.phone, testData.validUser.streetAddress1, testData.validUser.streetAddress2, testData.validUser.city, testData.validUser.stateOfProvince, testData.validUser.postalCode, testData.validUser.country);
  await contactListPage.logoutButton.click();
  await loginPage.login(testData.validUser.email, testData.validUser.password);
  await contactListPage.expectPageToBeVisible();
  await contactListPage.expectAddedContactToBeVisible(testData.validUser.firstName, testData.validUser.lastName, testData.validUser.birthdate, testData.validUser.email, testData.validUser.phone, testData.validUser.streetAddress1, testData.validUser.streetAddress2, testData.validUser.city, testData.validUser.stateOfProvince, testData.validUser.postalCode, testData.validUser.country);

});
import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SignupPage } from '../pages/SignupPage';
import { generateRandomUser } from '../utils/helperFunctions';
import { ContactListPage } from '../pages/ContactListPage';
import { AddContactPage } from '../pages/AddContactPage';
import testData from '../test-data/testData.json';

test('Assignment full flow: signup, add contact, logout/login.', async ({ page }) => {
    const user = generateRandomUser();
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);
    const contactListPage = new ContactListPage(page);
    const addContactPage = new AddContactPage(page);

    await test.step('Create an account for a user, verify that the account has been created and logged in.', async () => {
        await page.goto('');
        await loginPage.signupButton.click();
        await signupPage.expectPageToBeVisible();
        await signupPage.signup(user.firstName, user.lastName, user.email, user.password);
        await signupPage.submitButton.click();
        await contactListPage.expectPageToBeVisible();
    });

    await test.step('Add a new contact and verify that the contact is displayed.', async () => {
        await contactListPage.addContactButton.click();
        await addContactPage.expectPageToBeVisible();
        await addContactPage.addContact(testData.contact.firstName, testData.contact.lastName, testData.contact.birthdate, testData.contact.email, testData.contact.phone, testData.contact.street1, testData.contact.street2, testData.contact.city, testData.contact.stateProvince, testData.contact.postalCode, testData.contact.country);
        await contactListPage.expectAddedContactToBeVisible(testData.contact.firstName, testData.contact.lastName, testData.contact.birthdate, testData.contact.email, testData.contact.phone, testData.contact.street1, testData.contact.street2, testData.contact.city, testData.contact.stateProvince, testData.contact.postalCode, testData.contact.country);
    });

    await test.step('User is able to logout, login again. The previously added contact is displayed.', async () => {
        await contactListPage.logoutButton.click();
        await loginPage.login(user.email, user.password);
        await contactListPage.expectPageToBeVisible();
        await contactListPage.expectAddedContactToBeVisible(testData.contact.firstName, testData.contact.lastName, testData.contact.birthdate, testData.contact.email, testData.contact.phone, testData.contact.street1, testData.contact.street2, testData.contact.city, testData.contact.stateProvince, testData.contact.postalCode, testData.contact.country);
    });

});
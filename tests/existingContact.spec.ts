import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import testData from '../test-data/testData.json';
import { ContactListPage } from '../pages/ContactListPage';
import { AddContactPage } from '../pages/AddContactPage';
import { createUserViaAPI } from '../utils/apiHelpers';
import { generateRandomUser } from '../utils/helperFunctions';

test.describe('Existing Contact flow.', () => {
    let user: ReturnType<typeof generateRandomUser>;

    test.beforeEach('Test data setup via API.', async ({ request }) => {
        user = generateRandomUser();
        await createUserViaAPI(request, user);
    });

    test('Login, add a contact, logout, login again and verify that the previously added contact is displayed.', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const contactListPage = new ContactListPage(page);
        const addContactPage = new AddContactPage(page);

        await page.goto('');
        await loginPage.login(user.email, user.password);
        await contactListPage.expectPageToBeVisible();
        await contactListPage.addContactButton.click();
        await addContactPage.expectPageToBeVisible();
        await addContactPage.addContact(user.firstName, user.lastName, testData.contactDetails.birthdate, user.email, testData.contactDetails.phone, testData.contactDetails.streetAddress1, testData.contactDetails.streetAddress2, testData.contactDetails.city, testData.contactDetails.stateOfProvince, testData.contactDetails.postalCode, testData.contactDetails.country);
        await contactListPage.expectAddedContactToBeVisible(user.firstName, user.lastName, testData.contactDetails.birthdate, user.email, testData.contactDetails.phone, testData.contactDetails.streetAddress1, testData.contactDetails.streetAddress2, testData.contactDetails.city, testData.contactDetails.stateOfProvince, testData.contactDetails.postalCode, testData.contactDetails.country);
        await contactListPage.logoutButton.click();
        await loginPage.login(user.email, user.password);
        await contactListPage.expectPageToBeVisible();
        await contactListPage.expectAddedContactToBeVisible(user.firstName, user.lastName, testData.contactDetails.birthdate, user.email, testData.contactDetails.phone, testData.contactDetails.streetAddress1, testData.contactDetails.streetAddress2, testData.contactDetails.city, testData.contactDetails.stateOfProvince, testData.contactDetails.postalCode, testData.contactDetails.country);
    });

});
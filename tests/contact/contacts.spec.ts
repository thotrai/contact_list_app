import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import testData from '@test-data/testData.json';
import { ContactListPage } from '@pages/ContactListPage';
import { AddContactPage } from '@pages/AddContactPage';
import { createUserViaAPI } from '@utils/apiHelpers';
import { generateRandomUser } from '@utils/helperFunctions';

test.describe('Contact List flows.', () => {
    let user: ReturnType<typeof generateRandomUser>;

    test.beforeEach('Test data setup via API.', async ({ request }) => {
        user = generateRandomUser();
        await createUserViaAPI(request, user);
    });

    test('Add a new contact and verify that the contact is displayed.', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const contactListPage = new ContactListPage(page);
        const addContactPage = new AddContactPage(page);

        await page.goto('');
        await loginPage.login(user.email, user.password);
        await contactListPage.expectPageToBeVisible();
        await contactListPage.addContactButton.click();
        await addContactPage.expectPageToBeVisible();
        await addContactPage.addContact(user.firstName, user.lastName, testData.contact.birthdate, user.email, testData.contact.phone, testData.contact.street1, testData.contact.street2, testData.contact.city, testData.contact.stateProvince, testData.contact.postalCode, testData.contact.country);
        await contactListPage.expectAddedContactToBeVisible(user.firstName, user.lastName, testData.contact.birthdate, user.email, testData.contact.phone, testData.contact.street1, testData.contact.street2, testData.contact.city, testData.contact.stateProvince, testData.contact.postalCode, testData.contact.country);
    });

    test('Verify error message for missing requierd fields.', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const contactListPage = new ContactListPage(page);
        const addContactPage = new AddContactPage(page);

        await page.goto('');
        await loginPage.login(user.email, user.password);
        await contactListPage.expectPageToBeVisible();
        await contactListPage.addContactButton.click();
        await addContactPage.expectPageToBeVisible();
        await addContactPage.submitButton.click();
        await expect(addContactPage.errorMessage).toBeVisible();
    });

});
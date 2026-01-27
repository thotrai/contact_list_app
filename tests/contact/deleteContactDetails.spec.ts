import { expect, test } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import testData from '@test-data/testData.json';
import { ContactListPage } from '@pages/ContactListPage';
import { addContactViaAPI, createUserViaAPI } from '@utils/apiHelpers';
import { generateRandomUser } from '@utils/helperFunctions';
import { ContactDetailsPage } from '@pages/ContactDetailsPage';

test.describe('Delete an existing Contact flow.', () => {
    let user: ReturnType<typeof generateRandomUser>;

    test.beforeEach('Test data setup via API.', async ({ request }) => {
        user = generateRandomUser();
        const apiData = await createUserViaAPI(request, user);
        const token = apiData.token;
        await addContactViaAPI(request, token, testData.contact);
    });

    test('User is able to login and delete a contact.', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const contactListPage = new ContactListPage(page);
        const contactDetailsPage = new ContactDetailsPage(page);

        await page.goto('');
        await loginPage.login(user.email, user.password);
        await contactListPage.expectPageToBeVisible(); 
        await contactListPage.expectAddedContactToBeVisible(testData.contact.firstName, testData.contact.lastName, testData.contact.birthdate, testData.contact.email, testData.contact.phone, testData.contact.street1, testData.contact.street2, testData.contact.city, testData.contact.stateProvince, testData.contact.postalCode, testData.contact.country);
        await contactListPage.contactDetailsRow.click();
        await contactDetailsPage.expectPageToBeVisible();
        await contactDetailsPage.clickDeleteContanctButton();
        await expect(contactListPage.contactDetailsRow).not.toContainText(testData.contact.firstName);
    });

});
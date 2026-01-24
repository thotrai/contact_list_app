import { Page, Locator, expect } from '@playwright/test';

export class ContactListPage {
    readonly page: Page;
    readonly addContactButton: Locator;
    readonly logoutButton: Locator;
    readonly contactsTable: Locator;
    readonly titleText: Locator;
    readonly contactDetailsRow: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addContactButton = this.page.locator("#add-contact");
        this.logoutButton = this.page.locator("#logout");
        this.contactsTable = this.page.locator("myTable");
        this.titleText = this.page.locator('h1:has-text("Contact List")');
        this.contactDetailsRow = this.page.locator(`//tr[@class='contactTableBodyRow']`).first();

    }

    async expectPageToBeVisible() {
        await expect(this.page).toHaveURL('/contactList');
        await expect(this.titleText).toBeVisible();
    }

    async expectAddedContactToBeVisible(firstName: string, lastName: string, birthdate: string, email: string, phone: string, streetAddress1: string, streetAddress2: string, city: string, stateOfProvince: string, postalCode: string, country: string) {
        await expect(this.contactDetailsRow).toContainText(firstName);
        await expect(this.contactDetailsRow).toContainText(lastName);
        await expect(this.contactDetailsRow).toContainText(birthdate);
        await expect(this.contactDetailsRow).toContainText(email);
        await expect(this.contactDetailsRow).toContainText(phone);
        await expect(this.contactDetailsRow).toContainText(streetAddress1);
        await expect(this.contactDetailsRow).toContainText(streetAddress2);
        await expect(this.contactDetailsRow).toContainText(city);
        await expect(this.contactDetailsRow).toContainText(stateOfProvince);
        await expect(this.contactDetailsRow).toContainText(postalCode);
        await expect(this.contactDetailsRow).toContainText(country);
    }

}
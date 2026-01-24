import { Page, Locator, expect } from '@playwright/test';

export class ContactListPage {
    readonly page: Page;
    readonly addContactButton: Locator;
    readonly logoutButton: Locator;
    readonly contactsTable: Locator;
    readonly titleText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addContactButton = this.page.locator("#add-contact");
        this.logoutButton = this.page.locator("logout");
        this.contactsTable = this.page.locator("myTable");
        this.titleText = this.page.locator('h1:has-text("Contact List")');
    }

    async expectPageToBeVisible() {
        await expect(this.page).toHaveURL('/contactList');
        await expect(this.titleText).toBeVisible();
    }

}
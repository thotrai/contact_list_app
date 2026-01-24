import { Page, Locator } from '@playwright/test';

export class ContactListPage {
    readonly page: Page;
    readonly addContactButton: Locator;
    readonly logoutButton: Locator;
    readonly contactsTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addContactButton = this.page.locator("#add-contact");
        this.logoutButton = this.page.locator("logout");
        this.contactsTable = this.page.locator("myTable");
    }
}
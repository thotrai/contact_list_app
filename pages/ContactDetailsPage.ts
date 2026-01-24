import { Page, Locator } from '@playwright/test';

export class ContactDetailsPage {
    readonly page: Page;
    readonly contactDetails: Locator;
    readonly editContactButton: Locator;
    readonly deleteContactButton: Locator;
    readonly returnToContactListButton: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.contactDetails = this.page.locator("#contactDetails");
        this.editContactButton = this.page.locator("#edit-contact");
        this.deleteContactButton = this.page.locator("#delete");
        this.returnToContactListButton = this.page.locator("#return");
        this.logoutButton = this.page.locator("#logout");
    }
    
}
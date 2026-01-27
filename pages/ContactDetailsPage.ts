import { Page, Locator, expect } from '@playwright/test';

export class ContactDetailsPage {
    readonly page: Page;
    readonly contactDetails: Locator;
    readonly editContactButton: Locator;
    readonly deleteContactButton: Locator;
    readonly returnToContactListButton: Locator;
    readonly logoutButton: Locator;
    readonly titleText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.contactDetails = this.page.locator("#contactDetails");
        this.editContactButton = this.page.locator("#edit-contact");
        this.deleteContactButton = this.page.locator("#delete");
        this.returnToContactListButton = this.page.locator("#return");
        this.logoutButton = this.page.locator("#logout");
        this.titleText = this.page.locator('h1:has-text("Contact Details")');
    }
    
    async expectPageToBeVisible() {
        await expect(this.page).toHaveURL('/contactDetails');
        await expect(this.titleText).toBeVisible();
    }

    async clickDeleteContanctButton() {
        /* Dialog handler */
        this.page.once('dialog', dialog => {
            dialog.accept();
        });

        await this.deleteContactButton.click();
    }
}
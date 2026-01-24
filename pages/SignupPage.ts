import { Page, Locator, expect } from '@playwright/test';

export class SignupPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly cancelButton: Locator;
    readonly errorMessage: Locator;
    readonly titleText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = this.page.locator("#firstName");
        this.lastNameInput = this.page.locator("#lastName");
        this.emailInput = this.page.locator("#email");
        this.passwordInput = this.page.locator("#password");
        this.submitButton = this.page.locator("#submit");
        this.cancelButton = this.page.locator("#cancel");
        this.errorMessage = this.page.locator("#error");
        this.titleText = this.page.locator('h1:has-text("Add User")');
    }

    async expectPageToBeVisible() {
        await expect(this.page).toHaveURL('/addUser');
        await expect(this.titleText).toBeVisible();
    }

    async signup(firstName: string, lastName: string, email: string, password: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }

}
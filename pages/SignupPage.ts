import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly cancelButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = this.page.locator("#firstName");
        this.lastNameInput = this.page.locator("#lastName");
        this.emailInput = this.page.locator("#email");
        this.passwordInput = this.page.locator("#password");
        this.submitButton = this.page.locator("#submit");
        this.cancelButton = this.page.locator("#cancel");
        this. errorMessage = this.page.locator("#error");
    }
    
}
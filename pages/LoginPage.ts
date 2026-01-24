import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly signupButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = this.page.locator("#email");
        this.passwordInput = this.page.locator("#password");
        this.submitButton = this.page.locator("#submit");
        this.signupButton = this.page.locator("#signup");
        this.errorMessage = this.page.locator("#error");
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }

}
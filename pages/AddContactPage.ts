import { Page, Locator, expect } from '@playwright/test';

export class AddContactPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly birthdateInput: Locator;
    readonly emailInput: Locator;
    readonly phoneInput: Locator;
    readonly streetAddress1Input: Locator;
    readonly streetAddress2Input: Locator;
    readonly cityInput: Locator;
    readonly stateOfProvinceInput: Locator;
    readonly postalCodeInput: Locator;
    readonly countryInput: Locator;
    readonly submitButton: Locator;
    readonly cancelButton: Locator;
    readonly logoutButton: Locator;
    readonly errorMessage: Locator;
    readonly titleText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = this.page.locator("#firstName");
        this.lastNameInput = this.page.locator("#lastName");
        this.birthdateInput = this.page.locator("#birthdate");
        this.emailInput = this.page.locator("#email");
        this.phoneInput = this.page.locator("#phone");
        this.streetAddress1Input = this.page.locator("#street1");
        this.streetAddress2Input = this.page.locator("#street2");
        this.cityInput = this.page.locator("#city");
        this.stateOfProvinceInput = this.page.locator("#stateProvince");
        this.postalCodeInput = this.page.locator("#postalCode");
        this.countryInput = this.page.locator("#country");
        this.submitButton = this.page.locator("#submit");
        this.cancelButton = this.page.locator("#cancel");
        this.logoutButton = this.page.locator("#logout");
        this.errorMessage = this.page.locator("#error");
        this.titleText = this.page.locator('h1:has-text("Add Contact")');
    }

    async expectPageToBeVisible() {
        await expect(this.page).toHaveURL('/addContact');
        await expect(this.titleText).toBeVisible();
    }

    async addContact(firstName: string, lastName: string, birthdate: string, email: string, phone: string, streetAddress1: string, streetAddress2: string, city: string, stateOfProvince: string, postalCode: string, country: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.birthdateInput.fill(birthdate);
        await this.emailInput.fill(email);
        await this.phoneInput.fill(phone);
        await this.streetAddress1Input.fill(streetAddress1);
        await this.streetAddress2Input.fill(streetAddress2);
        await this.cityInput.fill(city);
        await this.stateOfProvinceInput.fill(stateOfProvince);
        await this.postalCodeInput.fill(postalCode);
        await this.countryInput.fill(country);
        await this.submitButton.click();
    }

}
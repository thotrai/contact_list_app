import { Page, Locator } from '@playwright/test';

export class EditContactPage {
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
    
    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = this.page.locator("#firstName");
        this.lastNameInput = this.page.locator("#lastName");
        this.birthdateInput = this.page.locator("#birtdate");
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

    }
}
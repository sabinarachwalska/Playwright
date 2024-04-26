import { Locator, Page, Response, expect } from "@playwright/test";
import { BasePage } from "../../core/base-page";
import exp = require("constants");
import { Fake } from "../../core/data-generation";
import { waitForResponse } from "../../../utilities/wait-for-response";

export class RegisterPage extends BasePage {
  public readonly name: string = "Register";
  public readonly signUpInformationText: Locator = this.page.getByText(
    "Enter Account Information",
  );
  public readonly userTitle: Locator = this.page.getByText("Title");
  public readonly userTitleMr: Locator = this.page.getByLabel("Mr.");
  public readonly userTitleMrs: Locator = this.page.getByText("Mrs.");
  public readonly userName: Locator = this.page.getByText("Name *", {
    exact: true,
  });
  public readonly emailInputLabel: Locator = this.page.getByText("Email *", {
    exact: true,
  });
  public readonly password: Locator = this.page.getByText("Password *", {
    exact: true,
  });
  public readonly userNameInput: Locator = this.page.locator("#name");
  public readonly emailInput: Locator = this.page.locator("#email");
  public readonly passwordInput: Locator = this.page.locator("#password");
  public readonly dateOfBirthLabel: Locator =
    this.page.getByText("Date of Birth");
  public readonly dateOfBirthDays: Locator = this.page.locator("#days");
  public readonly dateOfBirthMonths: Locator = this.page.locator("#months");
  public readonly newsletterButton: Locator = this.page.getByText(
    "Sign up for our newsletter!",
  );
  public readonly dateOfBirthYears: Locator = this.page.locator("#years");
  public readonly specialButton: Locator = this.page.getByText(
    "Receive special offers from",
  );
  public readonly addressInformationLabel: Locator = this.page.getByText(
    "Address Information",
  );
  public readonly addressFirstNameButtonLabel: Locator =
    this.page.getByText("First name *");
  public readonly addressFirstNameButton: Locator =
    this.page.getByLabel("First name *");
  public readonly addressLastNameButtonLabel: Locator =
    this.page.getByText("Last name *");
  public readonly addressLastNameButton: Locator =
    this.page.getByLabel("Last name *");
  public readonly addressCompanyButtonLabel: Locator = this.page.getByText(
    "Company",
    { exact: true },
  );
  public readonly addressCompanyButton: Locator = this.page.getByLabel(
    "Company",
    { exact: true },
  );
  public readonly addressFirstLineButtonLabel: Locator = this.page.getByText(
    "Address * (Street address, P.",
  );
  public readonly addressFirstLineButton: Locator = this.page.getByLabel(
    "Address * (Street address, P.",
  );
  public readonly addressSecondButtonLabel: Locator =
    this.page.getByText("Address 2");
  public readonly addressSecondButton: Locator =
    this.page.getByLabel("Address 2");
  public readonly addressCountryButtonLabel: Locator =
    this.page.getByText("Country *");
  public readonly addressCountryButton: Locator =
    this.page.getByLabel("Country *");
  public readonly addressStateButtonLabel: Locator =
    this.page.getByText("State *");
  public readonly addressStateButton: Locator = this.page.getByLabel("State *");
  public readonly addressCityButtonLabel: Locator =
    this.page.getByText("City *");
  public readonly addressCityButton: Locator = this.page.getByLabel("City *");
  public readonly addressPostalCodeButtonLabel: Locator =
    this.page.getByText("Zipcode *");
  public readonly addressPostalCodeButton: Locator =
    this.page.locator("#zipcode");
  public readonly addressMobilePhoneButtonLabel: Locator =
    this.page.getByText("Mobile Number *");
  public readonly addressMobilePhoneButton: Locator =
    this.page.getByLabel("Mobile Number *");
  public readonly createAccountButton: Locator = this.page.getByRole("button", {
    name: "Create Account",
  });
  public readonly highlightedAddresInfo: Locator = this.page.getByText(
    "(Street address, P.O. Box,",
  );

  public constructor(page: Page) {
    super(page);
  }

  public async verifyIfNameAndaddressAreFilled(name: string, email: string) {
    await expect(this.userNameInput).toHaveValue(name);
    await expect(this.emailInput).toHaveValue(email);
  }

  public async verifyregisterPage() {
    await expect(this.userTitle).toBeVisible();
    await expect(this.userTitleMrs).toBeVisible();
    await expect(this.userTitle).toBeVisible();
    await expect(this.userName).toBeVisible();
    await expect(this.emailInputLabel).toBeVisible();
    await expect(this.password).toBeVisible();
    await expect(this.dateOfBirthLabel).toBeVisible();
    await expect(this.addressInformationLabel).toBeVisible();
    await expect(this.addressFirstNameButtonLabel).toBeVisible();
    await expect(this.addressLastNameButtonLabel).toBeVisible();
    await expect(this.addressCompanyButtonLabel).toBeVisible();
    await expect(this.addressFirstLineButtonLabel).toBeVisible();
    await expect(this.addressSecondButtonLabel).toBeVisible();
    await expect(this.addressCountryButtonLabel).toBeVisible();
    await expect(this.addressStateButtonLabel).toBeVisible();
    await expect(this.addressCityButtonLabel).toBeVisible();
    await expect(this.addressPostalCodeButtonLabel).toBeVisible();
    await expect(this.addressMobilePhoneButtonLabel).toBeVisible();
    await expect(this.highlightedAddresInfo).toHaveCSS(
      "color",
      "rgb(241, 51, 64)",
    );
  }

  public async fillAccountInformation(
    password: string,
    company: string,
    days: string,
    months: string,
    years: string,
  ) {
    await this.userTitleMrs.click();
    await this.passwordInput.fill(password);
    await this.addressCompanyButton.fill(company);
    await this.dateOfBirthDays.selectOption(days);
    await this.dateOfBirthMonths.selectOption(months);
    await this.dateOfBirthYears.selectOption(years);
    await this.newsletterButton.check();
    await this.specialButton.check();
  }

  public async fillAddressInformation(
    name: string,
    lastname: string,
    street: string,
    city: string,
    state: string,
    postalCode: string,
    phone: string,
    country: string,
  ) {
    await this.addressFirstNameButton.fill(name);
    await this.addressLastNameButton.fill(lastname);
    await this.addressFirstLineButton.fill(street + Fake.NumberOfBuilding());
    await this.addressCityButton.fill(city);
    await this.addressStateButton.fill(state);
    await this.addressPostalCodeButton.fill(postalCode);
    await this.addressMobilePhoneButton.fill(phone);
    await this.addressCountryButton.selectOption(country);
  }

  public async clickCreateAccountButton() {
    return waitForResponse(this.page.waitForRequest("/account_created"), () =>
      this.createAccountButton.click(),
    );
  }
}

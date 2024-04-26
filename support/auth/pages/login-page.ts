import { Locator, Page, Response, expect } from "@playwright/test";
import { BasePage } from "../../core/base-page";
import { waitForResponse } from "../../../utilities/wait-for-response";

export class LoginPage extends BasePage {
  public readonly name: string = "https://automationexercise.com/";
  public readonly signUpLoginButton: Locator =
    this.page.locator('a[href="/login"]');
  public readonly loginHeading: Locator = this.page.getByRole("heading", {
    name: "Login to your account",
  });
  public readonly loginInput: Locator = this.page
    .locator("form")
    .filter({ hasText: "Login" })
    .getByPlaceholder("Email Address");
  public readonly passwordInput: Locator =
    this.page.getByPlaceholder("Password");
  public readonly loginButton: Locator = this.page.getByRole("button", {
    name: "Login",
  });
  public readonly signUpButton: Locator = this.page.getByRole("button", {
    name: "Signup",
  });
  public readonly signUpTitle: Locator = this.page.getByRole("heading", {
    name: "New User Signup!",
  });
  public readonly signUpNameInput: Locator = this.page.getByPlaceholder("Name");
  public readonly signUpEmailInput: Locator = this.page
    .locator("form")
    .filter({ hasText: "Signup" })
    .getByPlaceholder("Email Address");
  public readonly loggedUserText: Locator =
    this.page.getByText(" Logged in as ");
  public readonly deleteAccountButton: Locator = this.page.locator(
    'a[href="/delete_account"]',
  );
  public constructor(page: Page) {
    super(page);
  }

  public async loadMainPage() {
    await this.load();
  }

  public async clickLoginSignUpButton() {
    return waitForResponse(this.page.waitForRequest("/login"), () =>
      this.signUpLoginButton.click(),
    );
  }

  public async fillRegisterNameandEmail(name: string, email: string) {
    await expect(this.signUpTitle).toBeVisible();
    await this.signUpNameInput.fill(name);
    await this.signUpEmailInput.fill(email);
  }

  public async clickSignUpButton() {
    return waitForResponse(this.page.waitForRequest("/signup"), () =>
      this.signUpButton.click(),
    );
  }

  public async verifyloggedUserText(name: string) {
    await expect(this.loggedUserText).toContainText(name);
  }

  public async clickDeleteAccount() {
    this.deleteAccountButton.click();
  }
}

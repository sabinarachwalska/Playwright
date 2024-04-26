import { Locator, Page, Response, expect } from "@playwright/test";
import { BasePage } from "../../core/base-page";
import { waitForResponse } from "../../../utilities/wait-for-response";

export class SuccessfulRegister extends BasePage {
  public readonly name: string = "Successful Register";
  public readonly accountCreatedTitle: Locator =
    this.page.getByText("Account Created!");
  public readonly accountCreatedInformation: Locator = this.page.getByText(
    "Congratulations! Your new",
  );
  public readonly continueButton: Locator = this.page.getByRole("link", {
    name: "Continue",
  });
  public constructor(page: Page) {
    super(page);
  }

  public async verifyAccountCreatedPage() {
    await expect(this.accountCreatedTitle).toBeVisible();
    await expect(this.accountCreatedInformation).toBeVisible();
  }

  public async clickContinueButton() {
    return waitForResponse(
      this.page.waitForRequest("https://automationexercise.com/"),
      () => this.continueButton.click(),
    );
  }
}

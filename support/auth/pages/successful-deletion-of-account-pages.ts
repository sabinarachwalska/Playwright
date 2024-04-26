import { Locator, Page, Response, expect } from "@playwright/test";
import { BasePage } from "../../core/base-page";
import { waitForResponse } from "../../../utilities/wait-for-response";

export class SuccessfulAccountDelation extends BasePage {
  public readonly name: string = "Successful Account Delation";
  public readonly accountDeletedTitle: Locator =
    this.page.getByText("Account Deleted!");
  public readonly accountDeletedInformation: Locator = this.page.getByText(
    "Your account has been",
  );
  public readonly continueButton: Locator = this.page.getByRole("link", {
    name: "Continue",
  });
  public constructor(page: Page) {
    super(page);
  }

  public async verifyAccountRemovingPage() {
    await expect(this.accountDeletedTitle).toBeVisible();
    await expect(this.accountDeletedInformation).toBeVisible();
  }

  public async clickContinueButton() {
    return waitForResponse(
      this.page.waitForRequest("https://automationexercise.com/"),
      () => this.continueButton.click(),
    );
  }
}

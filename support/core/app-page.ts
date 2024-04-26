import { Page } from "@playwright/test";

import { BasePage } from "./base-page";
/**
 * Represents a Masters application page.
 */
export abstract class AppPage extends BasePage {
  /**
   * App's sidebar component.
   */
  /**
   * Creates a page instance.
   * @param page Playwright page instance.
   */
  protected constructor(page: Page) {
    super(page);
  }

  /**
   * Logs the current user out and navigates to the login page asynchronously.
   * @returns Promise, that returns `LoginPage` instance.
   */
}

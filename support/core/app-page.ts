import { Page } from '@playwright/test';

import { BasePage } from './base-page';
import { Sidebar } from './components/sidebar';

/**
 * Represents a Masters application page.
 */
export abstract class AppPage extends BasePage {
  /**
   * App's sidebar component.
   */
  public readonly sidebar: Sidebar = new Sidebar(this);
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

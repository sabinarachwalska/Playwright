import { expect, Page } from '@playwright/test';

import { PageLoadOptions } from '../../utilities/page-load-options';

/**
 * Represents a Masters page.
 */
export abstract class BasePage {
  /**
   * Page's name. This should be a valid URL postfix.
   */
  public abstract get name(): string;

  /**
   * Page's relative URL.
   */
  public get url(): string {
    return `${this.name}`;
  }

  /**
   * Creates a page instance.
   * @param page Playwright page instance.
   */
  protected constructor(public readonly page: Page) {}

  /**
   * Navigates to this page asynchronously.
   * @param options Optional playwright page load options.
   * @returns Promise, that returns `this`.
   */
  public async load(options?: PageLoadOptions): Promise<this> {
    const response = await this.page.goto(this.url, options);
    expect(response, `'${this.name}' page load response`).toBeDefined();
    return this;
  }

  /**
   * Waits for this page to be navigated to.
   * @param options Optional playwright page load options.
   * @returns Promise, that returns `this`.
   */
  public async waitForLoad(options?: PageLoadOptions): Promise<this> {
    await this.page.waitForURL(this.url, options);
    return this;
  }

  /**
   * Creates a playwright expectation of this page being active.
   * @param timeout Optional page load timeout.
   * @returns Playwright expectation.
   */
  public expectToBeLoaded(timeout?: number): Promise<void> {
    return expect(this.page).toHaveURL(this.url, { timeout });
  }
}

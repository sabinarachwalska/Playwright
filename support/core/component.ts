import { Locator } from '@playwright/test';

/**
 * Represents an HTML component.
 */
export abstract class Component {
  /**
   * Creates an HTML component instance.
   * @param element Component's root element locator.
   */
  protected constructor(public readonly element: Locator) {}
}

import { test } from "@playwright/test";

import { BaseTestType } from "./base-test-type";
import { DecoratedTestType } from "./decorated-test-type";
import { EmptyFixture } from "./empty-fixture";

/**
 * Represents a lazily extendable instance of a playwright test type.
 */
export abstract class TestTypeBuilder<TTestType extends BaseTestType> {
  protected constructor() {}

  /**
   * Extends this playwright test type.
   * @param decorator Extension function.
   * @returns New instance of a lazily extended playwright test type.
   */
  public extend<
    TTestArgs extends EmptyFixture,
    TWorkerArgs extends EmptyFixture = {},
  >(
    decorator: (
      base: TTestType,
    ) => DecoratedTestType<TTestType, TTestArgs, TWorkerArgs>,
  ): TestTypeBuilder<DecoratedTestType<TTestType, TTestArgs, TWorkerArgs>> {
    return new DecoratedTestTypeBuilder<TTestType, TTestArgs, TWorkerArgs>(
      this,
      decorator,
    );
  }

  /**
   * Materializes a playwright test type instance.
   * @returns Playwright test type instance.
   */
  public abstract build(): TTestType;
}

class BaseTestTypeBuilder extends TestTypeBuilder<BaseTestType> {
  public constructor() {
    super();
  }

  public build(): BaseTestType {
    return test;
  }
}

class DecoratedTestTypeBuilder<
  TBaseTestType extends BaseTestType,
  TTestArgs extends EmptyFixture,
  TWorkerArgs extends EmptyFixture,
> extends TestTypeBuilder<
  DecoratedTestType<TBaseTestType, TTestArgs, TWorkerArgs>
> {
  public constructor(
    private readonly _base: TestTypeBuilder<TBaseTestType>,
    private readonly _decorator: (
      base: TBaseTestType,
    ) => DecoratedTestType<TBaseTestType, TTestArgs, TWorkerArgs>,
  ) {
    super();
  }

  public build(): DecoratedTestType<TBaseTestType, TTestArgs, TWorkerArgs> {
    const base = this._base.build();
    const result = this._decorator(base);
    return result;
  }
}

/**
 * Base playwright test type instance builder.
 */
export const testBuilder: TestTypeBuilder<BaseTestType> =
  new BaseTestTypeBuilder();

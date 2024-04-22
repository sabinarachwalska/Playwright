import { TestType } from '@playwright/test';

import { BaseTestType } from './base-test-type';
import { EmptyFixture } from './empty-fixture';

type ExtractTestArgs<T> = T extends TestType<infer TArgs, any> ? TArgs : never;
type ExtractWorkerArgs<T> = T extends TestType<any, infer TArgs> ? TArgs : never;

/**
 * Represents an extended playwright test type.
 */
export type DecoratedTestType<
  TBaseTestType extends BaseTestType,
  TTestArgs extends Record<string, any>,
  TWorkerArgs extends Record<string, any> = EmptyFixture
> = TestType<ExtractTestArgs<TBaseTestType> & TTestArgs, ExtractWorkerArgs<TBaseTestType> & TWorkerArgs>;

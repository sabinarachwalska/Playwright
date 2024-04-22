import { EnviromentKey } from "../enviroments/enviroments";
/** Base type for all test data. */
export type EnvironmentTestData = {
  readonly environmentKey: EnviromentKey;
};

/**
 * Returns a test data object of type `T` (which must extend the base type `EnvironmentTestData`),
 * whose `environmentKey` value is equal to the currently active playwright project's name.
 * @param data - Collection of test data to scan.,
 * @param key - An environment key from playwright project,
 * @param defaultKey - An optional default environment key,
 * that will be used in case when no test data related to the currently active playwright project exists in the `data` collection.
 * Will be equal to `EnvironmentKey.Kotrak`, if not explicitly defined.
 * @returns An object from the `data` collection,
 * whose `environmentKey` is equal to the name of the currently active playwright project.
 * If no such object exists, then returns an object whose `environmentKey` is equal to the `defaultKey`.
 * @throws When no object exists in the `data` collection,
 * whose `environmentKey` is equal to either the name of the currently active playwright project or the `defaultKey`.
 */

export function getTestData<T extends EnvironmentTestData>(data: T[], key: string, defaultKey?: EnviromentKey): T {
  const result = data.find(d => d.environmentKey === key);
  if (result) {
    return result;
  }
  if (!defaultKey) {
    defaultKey = EnviromentKey.AutomationPractise;
  }
  const defaultResult = data.find(d => d.environmentKey === defaultKey);
  if (defaultResult) {
    return defaultResult;
  }
  throw new Error(`failed to find test data by key '${key}' (default key: '${defaultKey}')`);
}

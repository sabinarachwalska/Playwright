/**
 * Reinterprets provided parameter as an object of the provided type. _USE WITH CAUTION!_
 * @param obj Object to reinterpret.
 * @returns `obj`.
 */
export function cast<T>(obj: any): T {
  return obj as T;
}

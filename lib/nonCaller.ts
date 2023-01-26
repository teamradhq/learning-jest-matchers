/**
 * A function that should not call the helper function.
 * @param args
 */
export function nonCaller<T>(...args: T[]) {
  return args;
}

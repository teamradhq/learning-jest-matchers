import { helper } from '@lib/helper';

/**
 * A function that should call the helper function.
 */
export function caller() {
  return helper(1, 2, 3);
}

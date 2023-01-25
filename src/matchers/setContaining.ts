/**
 * Asserts that `actual` contains the `expected` sub-set.
 *
 * This is an example of an asymmetric matcher that performs
 * a looser comparison than a symmetric matcher.
 *
 * @param actual
 * @param expected
 */
export function setContaining(actual, expected) {
  if (!(actual instanceof Set)) {
    throw new TypeError('actual must be a Set');
  }

  const pass = expected.every(item => actual.has(item));

  return {
    pass,
    message: pass
      ? () => `expected ${actual} not to contain ${expected}`
      : () => `expected ${actual} to contain ${expected}`,
  };
}

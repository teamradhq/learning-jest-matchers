/**
 * An example of an asymmetric matcher that matches a sub-set of a set.
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

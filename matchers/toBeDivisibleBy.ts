/**
 * Asserts `actual` is divisible by `divisor`.
 *
 * This is an example of a symmetric matcher that performs a
 * stricter comparison than an asymmetric matcher.
 *
 * @param actual
 * @param divisor
 */
export function toBeDivisibleBy(actual: number, divisor: number) {
  if (divisor === 0) {
    throw new TypeError('Divisor must not be zero');
  }

  const pass = actual % divisor === 0;
  if (pass) {
    return {
      message: () => (`expected ${actual} not to be divisible by ${divisor}`),
      pass: true,
    };
  } else {
    return {
      message: () => (`expected ${actual} to be divisible by ${divisor}`),
      pass: false,
    };
  }
}

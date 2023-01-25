import dayjs from 'dayjs';

/**
 * Asserts that the `actual` is a valid ISO date string.
 *
 * This is achieved by parsing `actual` with `dayjs` then
 * comparing `actual` to the resulting ISO date string.
 *
 * @param actual
 */
export function toBeISODate(actual) {
  const pass = typeof actual === 'string'
    && dayjs(actual).toDate().toISOString() === actual;

  return {
    pass,
    message: pass
      ? () => `expected ${actual} not to be an ISO date`
      : () => `expected ${actual} to be an ISO date`,
  };
}

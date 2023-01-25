import dayjs from 'dayjs';

export function toBeISODate(actual) {
  const fail = () => `expected ${actual} to be an ISO date`;
  const inverse = () => `expected ${actual} not to be an ISO date`;

  const pass = typeof actual === 'string'
    && dayjs(actual).toDate().toISOString() === actual;

  return {
    pass,
    message: pass ? inverse : fail,
  };
}

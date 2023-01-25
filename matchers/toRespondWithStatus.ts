import request from 'supertest';

/**
 * An asynchronous matcher that asserts a response from the received url
 * has an expected status code.
 *
 * @param received
 * @param expected
 */
export async function toRespondWithStatus(received, expected) {
  const { status } = await request(received).get('/');

  const pass = status === expected;

  return {
    pass,
    message: pass
      ? () => `expected ${received} not to respond with ${expected}`
      : () => `expected ${received} to respond with ${expected}, got ${status}`,
  };
}

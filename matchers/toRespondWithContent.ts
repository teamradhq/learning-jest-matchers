import request from 'supertest';

/**
 * This custom matcher makes a request to the `received` url and asserts that its
 * response body contains the `expected` content.
 *
 * @param received
 * @param expected
 */
export async function toRespondWithContent(received, expected) {
  const { body } = await request(received).get('/');
  const label = {
    body: JSON.stringify(body),
    expected: JSON.stringify(expected),
    received: received,
  };

  try {
    expect(body).toStrictEqual(expected);

    return {
      pass: true,
      message: () => `expected ${label.received} not to have content ${label.expected}`,
    };
  } catch {
    return {
      pass: false,
      message: () => `expected ${label.received} to have content ${label.expected}`,
    };
  }
}

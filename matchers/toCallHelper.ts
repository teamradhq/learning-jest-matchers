import * as dep from '@lib/helper';

jest.mock('@lib/helper');

const mock = jest.mocked(dep.helper);

/**
 * A custom matcher that asserts the received `caller` function, when
 * called, will call the `helper` function with the expected `args`.
 *
 * This is an example of a custom matcher that uses other matchers
 * to perform its assertions.
 *
 * This specific type of matcher might be useful for verify that a
 * particular guard function is used by api routes.
 *
 * @param caller
 * @param args
 */
export function toCallHelper(caller, ...args) {
  const name = `[Function ${caller.name}]`;

  try {
    caller.call();

    expect(mock).toHaveBeenCalledWith(...args);

    return {
      pass: true,
      message: () => `expected ${name} not to call helper function`,
    };
  } catch {
    return {
      pass: false,
      message: () => `expected ${name} to call helper function`,
    };
  }
}

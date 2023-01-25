# Learning Jest Matchers

This collection contains a number of custom Jest matchers. It can be used as a guide to learn how to write
and implement custom matchers.

Setting up and running tests:

```bash
nvm use 18
npm install
npm run test
```

## Information

### Symmetric Matcher

A symmetric matcher asserts something in its entirety.

This can be considered a strict equality matcher:

```typescript
expect(actual).toStrictEqual(expected);
expect(actual).toBeTruthy();
expect(actual).toBeCalledTimes(n);
```

### Asymmetric Matcher

An asymmetric matcher asserts something partially.

This can be considered a loose equality matcher:

```typescript
expect(actual).toEqual(expect.any(String));
expect(actual).toEqual(expect.arrayContaining([1, 2, 3]));
```

Instead of being called directly, asymmetric matchers are passed as arguments to a symmetric matcher:

```typescript
expect(actual).toSymmetricMatch(
  expect.toAsymmetricMatch(expected)
);
```

### Type Declarations

Depending on the type of matcher, we will need to extend a combination of the following types:

- `jest.Expect`
- `jest.Matchers`
- `jest.ExpectExtendMap`

### Matchers

A matcher accepts the actual value as its first argument, and any number of additional arguments for comparison.
It should return an object containing the following properties:

- `message`: A function that returns a string to be displayed when the matcher fails.
- `pass`: A boolean indicating whether the matcher passed or failed.

```typescript
function toMatch(actual: unknown, expected: unknown): jest.CustomMatcherResult {
  const pass = actual === expected;
  const message = () => `expected ${actual} to match ${expected}`;

  return {message, pass};
}
```

We should still return a `message` when a test passes so that inverse matchers can display a useful message:

```typescript
function toMatch(actual: unknown, expected: unknown): jest.CustomMatcherResult {
  const pass = actual === expected;
  const message = () => `expected ${actual} to match ${expected}`;

  return {
    pass,
    message: pass
      ? () => `expected ${actual} to match ${expected}`
      : () => `expected ${actual} not to match ${expected}`
  };
}
```

In order to use a custom matcher, we should add it to the `expect` object using `expect.extend`:

```typescript
// jest.setup.ts
import {
  toMatch,
  toResolve,
  toReject,
} from './matchers';

expect.extend({
  toMatch,
  toResolve,
  toReject,
});
```

---

## References

- [Jest Matchers](https://jestjs.io/docs/expect#expectextendmatchers)
- [Practical Guide to Custom Jest Matchers](https://redd.one/blog/practical-guide-to-custom-jest-matchers)
- [Create Custom Jest Matchers to Test Like a Pro](https://everyday.codes/javascript/create-custom-jest-matchers-to-test-like-a-pro/)

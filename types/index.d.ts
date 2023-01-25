declare namespace Environment {
  type Configuration = {
    DEBUG: boolean;
    MODE: 'production' | 'develop' | 'test';
  }
}

declare namespace NodeJS {
  interface ProcessEnv {
    MODE?: Environment.Configuration['MODE'];
    DEBUG?: 'true' | 'false' | '0' | '1';
  }
}


type OwnMatcher<Params extends unknown[]> = (
  this: jest.MatcherContext,
  actual: unknown,
  ...params: Params,
) => jest.CustomMatcherResult;

declare namespace jest {
  /**
   * These define the public call signature which describe how
   * asymmetric matchers are used in tests.
   */
  interface Expect {
    /**
     * Used to test that a value contains a sub-set.
     *
     * @param expected The expected sub-set.
     */
    setContaining<T>(expected: T[]): Set<T>,
  }

  /**
   * These define the public call signature which describe how
   * symmetric matchers are used in tests.
   */
  interface Matchers<R, T> {
    /**
     * Used to test that a value is divisible by a `divisor`.
     *
     * @param divisor A non-zero number that `actual` should be divisible by.
     */
    toBeDivisibleBy(divisor: number): T;

    /**
     * Used to test that a value is a valid ISO date string.
     */
    toBeISODate(): T;
  }

  /**
   * These define the call signature of our matchers for the
   * `expect.extend()` call.
   */
  interface ExpectExtendMap {
    setContaining: OwnMatcher<[expected: unknown[]]>;
    toBeDivisibleBy: OwnMatcher<[divisor: number]>;
    toBeISODate: OwnMatcher<[]>;
  }
}

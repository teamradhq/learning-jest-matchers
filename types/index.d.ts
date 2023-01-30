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

type AsyncMatcher<Params extends unknown[]> = (
  this: jest.MatcherContext,
  actual: unknown,
  ...params: Params,
) => Promise<jest.CustomMatcherResult>;

declare namespace jest {
  /**
   * These define the public call signature which describe how
   * asymmetric matchers are used in tests.
   *
   * Providing docBlocks for defined properties will provide
   * documentation within the test suites.
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
   *
   * Providing docBlocks for defined properties will provide
   * documentation within the test suites.
   */
  interface Matchers<R, T> {
    /**
     * Used to test that a value is a valid ISO date string.
     */
    toBeISODate(): T;

    /**
     * Used to test that a value is divisible by a `divisor`.
     *
     * @param divisor A non-zero number that `actual` should be divisible by.
     */
    toBeDivisibleBy(divisor: number): T;

    /**
     * Used to test that the helper function was called by a function.
     */
    toCallHelper(...args: unknown[]): T;

    /**
     * Used to test that making a request to url returns the expected status.
     *
     * @param content
     */
    toRespondWithContent(content: unknown): Promise<T>;

    /**
     * Used to test that the response body contains the expected content.
     *
     * @param status
     */
    toRespondWithStatus(status: number): Promise<T>;
  }

  /**
   * These define the call signature of our matchers for the
   * `expect.extend()` call.
   */
  interface ExpectExtendMap {
    setContaining: OwnMatcher<[expected: unknown[]]>;
    toBeISODate: OwnMatcher<[]>;
    toBeDivisibleBy: OwnMatcher<[divisor: number]>;
    toCallHelper: OwnMatcher<[expected: unknown]>;
    toRespondWithContent: AsyncMatcher<[expected: unknown]>;
    toRespondWithStatus: AsyncMatcher<[expected: number]>;
  }
}

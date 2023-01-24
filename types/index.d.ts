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
   * the matchers are used in tests.
   */
  interface Matchers<R, T> {
    toBeDivisibleBy(divisor: number): T;
  }

  /**
   * These define the call signature of our matchers for the
   * `expect.extend()` call.
   */
  interface ExpectExtendMap {
    toBeDivisibleBy: OwnMatcher<[divisor: number]>;
  }
}

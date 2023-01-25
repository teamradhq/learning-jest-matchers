type TestCase<T = number> = [Set<T>, T[]];

describe('expect.setContaining', () => {
  const matches: TestCase[] = [
    [new Set([1, 2, 3, 4, 5, 6]), [2, 3, 4]],
    [new Set([8, 7, 6, 3, 4, 5, 2]), [6, 7, 5]],
  ];

  it.each(matches)('should match a sub-set of a set', (actual, expected) => {
    expect.assertions(1);

    expect(actual).toStrictEqual(expect.setContaining(expected));
  });


  const nonMatches: TestCase[] = [
    [new Set([1, 2, 3, 4, 5, 6]), [80, 90, 100]],
    [new Set([8, 7, 6, 3, 4, 5, 2]), [6, 7, 5, 10]],
  ];
  it.each(nonMatches)('should not match a sub-set of a set', (actual, expected) => {
    expect.assertions(1);

    expect(actual).not.toStrictEqual(expect.setContaining(expected));
  });
});

type MessageTestCase = [string, number, number];

describe('expect.toBeDivisibleBy', () => {
  it('should be divisible by 2', () => {
    expect.assertions(1);

    expect(8).toBeDivisibleBy(2);
  });

  it('should not be divisible by 2', () => {
    expect.assertions(1);

    expect(9).not.toBeDivisibleBy(2);
  });

  it('should raise TypeError if the divisor is zero', () => {
    expect.assertions(1);

    const shouldThrow = () => {
      expect(9).toBeDivisibleBy(0);
    };

    expect(shouldThrow).toThrow(TypeError);
  });

  const messageTestCases: MessageTestCase[] = [
    ['expected 6 to be divisible by 5', 6, 5],
    ['expected 8 to be divisible by 3', 8, 3],
    ['expected 10 to be divisible by 100', 10, 100],
  ];

  it.each(messageTestCases)(
    'should display: "%s" upon failure',
    (message, actual, divisor) => {
      expect.assertions(2);

      const shouldThrow = () => {
        expect(actual).toBeDivisibleBy(divisor);
      };

      expect(shouldThrow).toThrow(message);
    },
  );

  const inverseMessageTestCases: MessageTestCase[] = [
    ['expected 6 not to be divisible by 3', 6, 3],
    ['expected 8 not to be divisible by 4', 8, 4],
    ['expected 10 not to be divisible by 5', 10, 5],
  ];

  it.each(inverseMessageTestCases)(
    'should display: "%s" upon inverse failure',
    (message, actual, divisor) => {
      expect.assertions(2);

      const shouldThrow = () => {
        expect(actual).not.toBeDivisibleBy(divisor);
      };

      expect(shouldThrow).toThrow(message);
    },
  );
});

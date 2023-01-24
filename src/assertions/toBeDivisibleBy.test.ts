describe('expect.toBeDivisibleBy', () => {
  it('should be divisible by 2', () => {
    expect.assertions(1);

    expect(8).toBeDivisibleBy(2);
  });

  it('should not be divisible by 2', () => {
    expect.assertions(1);

    expect(9).not.toBeDivisibleBy(2);
  });

  it('should fail if the divisor is zero', () => {
    expect.assertions(1);

    expect(9).toBeDivisibleBy(0);
  });
});

type IsoDateTestCase = [string | Date];
type IsoDateMessageTestCase = [string, string | Date];


describe('expect.toBeISODate', () => {
  const cases: IsoDateTestCase[] = [
    ['2020-01-01T10:00:00.000Z'],
    [new Date().toISOString()],
  ];

  it.each(cases)('should be an ISO date', (actual) => {
    expect.assertions(1);

    expect(actual).toBeISODate();
  });

  const inverseCases: IsoDateTestCase[] = [
    [new Date()],
    ['2020-01-01'],
    ['2020-000.000'],
  ];

  it.each(inverseCases)('should not be an ISO date', (actual) => {
    expect.assertions(1);

    expect(actual).not.toBeISODate();
  });

  const messageTestCases: IsoDateMessageTestCase[] = [
    ['expected 2020-01-01 to be an ISO date', '2020-01-01'],
    [`expected ${new Date().toString()} to be an ISO date`, new Date()],
  ];

  it.each(messageTestCases)('should display: "%s" upon failure', (message, actual) => {
    expect.assertions(2);

    const shouldThrow = () => {
      expect(actual).toBeISODate();
    };

    expect(shouldThrow).toThrow(message);
  });

  const inverseMessageTestCases: IsoDateMessageTestCase[] = [
    ['expected 2020-01-01T10:00:00.000Z not to be an ISO date', '2020-01-01T10:00:00.000Z'],
    [`expected ${new Date().toISOString()} not to be an ISO date`, new Date().toISOString()],
  ];

  it.each(inverseMessageTestCases)('should display: "%s" upon inverse failure', (message, actual) => {
    expect.assertions(2);

    const shouldThrow = () => {
      expect(actual).not.toBeISODate();
    };

    expect(shouldThrow).toThrow(message);
  });
});


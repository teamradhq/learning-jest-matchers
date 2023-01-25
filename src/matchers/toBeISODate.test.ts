type IsoDateTestCase = [string | Date];


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
});


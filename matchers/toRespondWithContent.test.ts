const TEST_URL = 'https://pokeapi.co/api/v2/type/3';

const EXPECTED = expect.objectContaining({
  damage_relations: expect.any(Object),
});

const UNEXPECTED = {
  foo: 'bar',
};

describe('matchers.toRespondWithContent', () => {
  it('should make the request and return the expected status', async () => {
    expect.hasAssertions();

    await expect(TEST_URL).toRespondWithContent(EXPECTED);
  });

  it('should make the request and not return the expected status', async () => {
    expect.hasAssertions();

    await expect(TEST_URL).not.toRespondWithContent(UNEXPECTED);
  });

  it('should provide an accurate message', async () => {
    expect.hasAssertions();

    const shouldThrow = async () => {
      await expect(TEST_URL).toRespondWithContent(UNEXPECTED);
    };

    await expect(shouldThrow).rejects.toThrow(`expected ${TEST_URL} to have content ${JSON.stringify(UNEXPECTED)}`);
  });

  it('should provide an accurate inverse message', async () => {
    expect.hasAssertions();

    const shouldThrow = async () => {
      await expect(TEST_URL).not.toRespondWithContent(EXPECTED);
    };

    await expect(shouldThrow).rejects.toThrow(`expected ${TEST_URL} not to have content ${JSON.stringify(EXPECTED)}`);
  });
});

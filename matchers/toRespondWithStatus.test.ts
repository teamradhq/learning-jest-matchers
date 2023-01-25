describe('matchers.toRespondWithStatus', () => {
  it('should make the request and return the expected status', async () => {
    expect.assertions(1);

    await expect('https://google.com').toRespondWithStatus(301);
  });

  it('should make the request and not return the expected status', async () => {
    expect.assertions(1);

    await expect('https://google.com').not.toRespondWithStatus(200);
  });

  it('should provide an accurate message', async () => {
    expect.assertions(2);

    const shouldThrow = async () => {
      await expect('https://google.com').toRespondWithStatus(200);
    };

    await expect(shouldThrow).rejects.toThrow('expected https://google.com to respond with 200, got 301');
  });

  it('should provide an accurate inverse message', async () => {
    expect.assertions(2);

    const shouldThrow = async () => {
      await expect('https://google.com').not.toRespondWithStatus(301);
    };

    await expect(shouldThrow).rejects.toThrow('expected https://google.com not to respond with 301');
  });
});

import { caller } from '@lib/caller';
import { nonCaller } from '@lib/nonCaller';

describe('matchers.toCallHelper', () => {
  it('should call the helper function', () => {
    expect.hasAssertions();

    expect(caller).toCallHelper(1, 2, 3);
  });

  it('should not call the helper function', () => {
    expect.hasAssertions();

    expect(nonCaller).not.toCallHelper();
  });

  it('should show failure message', () => {
    expect.hasAssertions();

    const shouldThrow = () => {
      expect(nonCaller).toCallHelper();
    };

    expect(shouldThrow).toThrow('expected [Function nonCaller] to call helper function');
  });

  it('should show inverse failure message', () => {
    expect.hasAssertions();

    const shouldThrow = () => {
      expect(caller).not.toCallHelper(1, 2, 3);
    };

    expect(shouldThrow).toThrow('expected [Function caller] not to call helper function');
  });

});

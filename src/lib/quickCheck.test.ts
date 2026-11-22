import { getQuickCheckResult } from './quickCheck';

describe('getQuickCheckResult', () => {
  it.each([
    [0, 'empty'],
    [1, 'mild'],
    [2, 'problem'],
    [3, 'problem'],
    [4, 'urgent'],
    [5, 'urgent'],
  ] as const)('%i ticked gives %s', (count, tone) => {
    expect(getQuickCheckResult(count).tone).toBe(tone);
  });

  it('gives each count its own face level', () => {
    expect([0, 1, 2, 3, 4, 5].map((n) => getQuickCheckResult(n).level)).toEqual([0, 1, 2, 3, 4, 5]);
  });
});

import { lengthDistinctSubstring } from '../../algorithms/06-07-2025/kCharacters-substring';

describe('lengthOfLongestSubstringKDistinct', () => {
  /* базовые примеры из условия */
  it('handles "eceba", k=2 → 3', () => {
    expect(lengthDistinctSubstring('eceba', 2)).toBe(3); // "ece"
  });

  it('handles "aa", k=1 → 2', () => {
    expect(lengthDistinctSubstring('aa', 1)).toBe(2); // "aa"
  });

  it('handles "abc", k=3 → 3', () => {
    expect(lengthDistinctSubstring('abc', 3)).toBe(3); // "abc"
  });

  it('handles "abc", k=2 → 2', () => {
    expect(lengthDistinctSubstring('abc', 2)).toBe(2); // "ab" или "bc"
  });

  /* краевые случаи */
  it('returns 0 when k is 0', () => {
    expect(lengthDistinctSubstring('anything', 0)).toBe(0);
  });

  it('returns full length when distinct letters < k', () => {
    expect(lengthDistinctSubstring('abc', 5)).toBe(3);
  });

  it('handles empty string', () => {
    expect(lengthDistinctSubstring('', 2)).toBe(0);
  });

  /* производительность на длинной строке */
  it('works on long input with small k', () => {
    const long = 'x'.repeat(20_000) + 'yz';
    expect(lengthDistinctSubstring(long, 3)).toBe(20_002); // "xyz"
  });
});

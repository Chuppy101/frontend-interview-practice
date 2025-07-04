import { isAnagram } from '../../algorithms/05-07-2025/valid-anagram';

describe('isAnagram', () => {
  it('returns true for a basic anagram', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
  });

  it('returns false when lengths differ', () => {
    expect(isAnagram('a', 'ab')).toBe(false);
  });

  it('returns false when letter frequencies differ', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
  });

  it('is case-sensitive', () => {
    expect(isAnagram('aA', 'aa')).toBe(false);
  });

  // доп-проверка: повторяющиеся символы
  it('handles repeated letters', () => {
    expect(isAnagram('aa', 'aa')).toBe(true);
  });
});

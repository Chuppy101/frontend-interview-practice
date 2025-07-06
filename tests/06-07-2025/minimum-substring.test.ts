import { minimumSubstring } from '../../algorithms/06-07-2025/minimum-substring';

describe('minimumSubstring', () => {
  test.each([
    // [s, t, expected]
    ['ADOBECODEBANC', 'ABC', 'BANC'], // базовый пример
    ['a', 'a', 'a'], // полное совпадение строк
    ['a', 'aa', ''], // решения нет
    ['aaabbb', 'ab', 'ab'], // повторяющиеся символы в t
    ['ab', 'b', 'b'], // t короче, в конце s
  ])('"%s" & "%s" → "%s"', (s, t, expected) => {
    expect(minimumSubstring(s, t)).toBe(expected);
  });

  it('handles long s and short t efficiently', () => {
    const longS = 'x'.repeat(10_000) + 'yz';
    expect(minimumSubstring(longS, 'yz')).toBe('yz');
  });
});

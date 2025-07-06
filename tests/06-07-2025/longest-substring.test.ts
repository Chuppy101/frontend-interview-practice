import { lengthOfLongestSubstring } from '../../algorithms/06-07-2025/longest-substring';

describe('lengthOfLongestSubstring', () => {
  test.each([
    ['', 0], // пустая
    ['abcdefg', 7], // все уникальны
    ['ababababab', 2], // повтор через один
    ['abcabcbb', 3], // базовый пример из условия
    ['bbbbb', 1], // все одинаковые
    ['pwwkew', 3], // повторы в середине
    ['abba', 2], // «залипание» левой границы
  ])('"%s" → %i', (input, expected) => {
    expect(lengthOfLongestSubstring(input)).toBe(expected);
  });
});

import { isPalindrome } from '../../algorithms/25-07-2025/palindrome-check';

describe('isPalindrome', () => {
  it('should return true for classic palindrome with punctuation and spaces', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  it('should return false for non-palindromic string', () => {
    expect(isPalindrome('race a car')).toBe(false);
  });

  it('should return true for empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  it('should return true for string with only spaces', () => {
    expect(isPalindrome('     ')).toBe(true);
  });

  it('should return true for simple palindrome with even number of characters', () => {
    expect(isPalindrome('abba')).toBe(true);
  });

  it('should return true for palindrome with odd number of characters', () => {
    expect(isPalindrome('madam')).toBe(true);
  });

  it('should return false for string with different characters', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  it('should return true for mixed-case palindrome', () => {
    expect(isPalindrome('Noon')).toBe(true);
  });

  it('should ignore non-alphanumeric characters', () => {
    expect(isPalindrome('0P')).toBe(false);
  });
});

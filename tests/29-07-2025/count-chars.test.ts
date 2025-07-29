import { countSubstringChars } from '../../algorithms/29-07-2025/count-chars';

describe('countSubstringChars', () => {
  it('should count letters and substrings correctly for "banana" with k=2', () => {
    const result = countSubstringChars('banana', 2);

    expect(result.letters).toEqual({
      b: 1,
      a: 3,
      n: 2,
    });

    expect(result.subStrings).toEqual({
      ba: 1,
      an: 2,
      na: 2,
    });
  });

  it('should return empty substring counts when k=0', () => {
    const result = countSubstringChars('test', 0);
    expect(result.letters).toEqual({
      t: 2,
      e: 1,
      s: 1,
    });
    expect(result.subStrings).toEqual({});
  });

  it('should return empty substring counts when k >= string length', () => {
    const result = countSubstringChars('hi', 2);
    expect(result.subStrings).toEqual({});

    const result2 = countSubstringChars('hi', 3);
    expect(result2.subStrings).toEqual({});
  });

  it('should handle empty string', () => {
    const result = countSubstringChars('', 2);
    expect(result.letters).toEqual({});
    expect(result.subStrings).toEqual({});
  });

  it('should work with k=1 (each character becomes a substring)', () => {
    const result = countSubstringChars('abcab', 1);
    expect(result.letters).toEqual({
      a: 2,
      b: 2,
      c: 1,
    });
    expect(result.subStrings).toEqual({
      a: 2,
      b: 2,
      c: 1,
    });
  });

  it('should treat overlapping substrings correctly', () => {
    const result = countSubstringChars('aaaaa', 2);
    expect(result.subStrings).toEqual({
      aa: 4,
    });
  });
});

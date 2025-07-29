import { formatPhone } from '../../algorithms/29-07-2025/clean-phone';

describe('formatPhone', () => {
  test('formats number starting with 8', () => {
    expect(formatPhone('8 (927) 000-00-00')).toBe('+7 (927) 000-00-00');
  });

  test('formats number starting with +7', () => {
    expect(formatPhone('+7 9270000000')).toBe('+7 (927) 000-00-00');
  });

  test('formats number starting with 8927', () => {
    expect(formatPhone('89270000000')).toBe('+7 (927) 000-00-00');
  });

  test('formats number with exactly 10 digits', () => {
    expect(formatPhone('9270000000')).toBe('+7 (927) 000-00-00');
  });

  test('returns null for fewer than 10 digits', () => {
    expect(formatPhone('12345')).toBeNull();
  });

  test('returns null for more than 11 digits', () => {
    expect(formatPhone('123456789012')).toBeNull();
  });

  test('returns null for 11 digits not starting with 8 or 7', () => {
    expect(formatPhone('19270000000')).toBeNull();
  });

  test('handles mixed symbols (spaces, dashes, parentheses)', () => {
    expect(formatPhone('8 927-000 00 00')).toBe('+7 (927) 000-00-00');
  });

  test('handles compact input without spaces', () => {
    expect(formatPhone('89270000000')).toBe('+7 (927) 000-00-00');
  });

  test('returns null for empty input', () => {
    expect(formatPhone('')).toBeNull();
  });
});

import { isLucky } from '../../algorithms/29-07-2025/lucky-number';

describe('isLucky', () => {
  it('returns true for a known happy number', () => {
    expect(isLucky(19)).toBe(true);
    // 1² + 9² = 82 → 8² + 2² = 68 → 6² + 8² = 100 → 1² + 0² + 0² = 1 ✅
  });

  it('returns false for a known unhappy number', () => {
    expect(isLucky(2)).toBe(false);
    // Цикл: 2 → 4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4 → ...
  });

  it('returns true for 1 (already happy)', () => {
    expect(isLucky(1)).toBe(true);
  });

  it('returns true for a small happy number', () => {
    expect(isLucky(10)).toBe(true);
    // 1² + 0² = 1 ✅
  });

  it('returns false for a large unhappy number', () => {
    expect(isLucky(116)).toBe(false);
  });

  it('returns true for another known happy number', () => {
    expect(isLucky(7)).toBe(true);
    // 7² = 49 → 4² + 9² = 97 → 9² + 7² = 130 → ... → 1
  });
});

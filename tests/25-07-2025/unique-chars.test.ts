import { firstUniqueChar } from '../../algorithms/25-07-2025/unique-chars';

describe('firstUniqueChar (case-insensitive)', () => {
  it('возвращает индекс первого уникального символа (leetcode)', () => {
    expect(firstUniqueChar('leetcode')).toBe(0); // 'l'
  });

  it('возвращает индекс первого уникального символа (loveleetcode)', () => {
    expect(firstUniqueChar('loveleetcode')).toBe(2); // 'v'
  });

  it('возвращает -1, если нет уникальных символов (aabb)', () => {
    expect(firstUniqueChar('aabb')).toBe(-1);
  });

  it('возвращает индекс при наличии пробелов', () => {
    expect(firstUniqueChar('  aab  ')).toBe(4); // пробелы считаются
  });

  it('возвращает -1 при пустой строке', () => {
    expect(firstUniqueChar('')).toBe(-1);
  });

  it('игнорирует регистр символов (AaBbCcD)', () => {
    expect(firstUniqueChar('AaBbCcD')).toBe(6); // 'D' — уникален
  });

  it('находит уникальный символ в середине строки', () => {
    expect(firstUniqueChar('aabbc')).toBe(4); // 'c'
  });

  it('возвращает правильный индекс при символах разного регистра', () => {
    expect(firstUniqueChar('aAb')).toBe(2); // 'b', а 'a' и 'A' считаются одинаковыми
  });

  it('работает с длинной строкой', () => {
    const str = 'a'.repeat(1000) + 'b' + 'a'.repeat(1000);
    expect(firstUniqueChar(str)).toBe(1000); // 'b'
  });
});

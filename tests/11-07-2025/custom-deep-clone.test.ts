import { deepClone } from '../../algorithms/11-07-2025/custom-deep-clone';

describe('deepClone', () => {
  it('clones flat object with primitives', () => {
    const original = { a: 1, b: 'hello', c: true };
    const copy = deepClone(original);

    expect(copy).toEqual(original);
    expect(copy).not.toBe(original); // разные ссылки
  });

  it('clones nested objects', () => {
    const original = { a: { b: { c: 42 } } };
    const copy = deepClone(original);

    expect(copy).toEqual(original);
    expect(copy.a).not.toBe(original.a);
    expect(copy.a.b).not.toBe(original.a.b);
  });

  it('clones arrays', () => {
    const original = [1, 2, [3, 4]];
    const copy = deepClone(original);

    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);
    expect(copy[2]).not.toBe(original[2]);
  });

  it('skips functions', () => {
    const original = {
      a: 1,
      b: () => 'hello',
    };
    const copy = deepClone(original);

    expect(typeof copy.b).toBe('function');
    expect(copy.b).toBe(original.b); // функция не клонируется
  });

  it('returns primitives as-is', () => {
    expect(deepClone(123)).toBe(123);
    expect(deepClone('abc')).toBe('abc');
    expect(deepClone(null)).toBe(null);
    expect(deepClone(undefined)).toBe(undefined);
  });

  it('returns empty object for {}', () => {
    const original = {};
    const copy = deepClone(original);

    expect(copy).toEqual({});
    expect(copy).not.toBe(original);
  });

  it('returns empty array for []', () => {
    const original: any[] = [];
    const copy = deepClone(original);

    expect(copy).toEqual([]);
    expect(copy).not.toBe(original);
  });

  it('handles mixed structures (object + array)', () => {
    const original = { a: [1, { b: 2 }], c: 3 };
    const copy = deepClone(original);

    expect(copy).toEqual(original);
    expect(copy.a).not.toBe(original.a);
    expect(copy.a[1]).not.toBe(original.a[1]);
  });
});

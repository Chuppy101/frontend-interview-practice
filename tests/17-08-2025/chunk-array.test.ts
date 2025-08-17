import { chunk } from '../../algorithms/17-08-2025/chunk-array';

describe('chunk function tests', () => {
  test('splits array into chunks of given size', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
  });

  test('returns empty array if size is <= 0', () => {
    expect(chunk([1, 2, 3], 0)).toEqual([]);
    expect(chunk([1, 2, 3], -1)).toEqual([]);
  });

  test('works with empty array', () => {
    expect(chunk([], 3)).toEqual([]);
  });

  test('works when size > array length', () => {
    expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
  });
});

import { flatten } from '../../algorithms/17-08-2025/flatten-array';

describe('flatten', () => {
  it('should flatten a flat array (no nesting)', () => {
    const arr = [1, 2, 3, 4];
    expect(flatten(arr)).toEqual([1, 2, 3, 4]);
  });

  it('should flatten one level of nesting', () => {
    const arr = [1, [2, 3], 4];
    expect(flatten(arr)).toEqual([1, 2, 3, 4]);
  });

  it('should flatten multiple levels of nesting', () => {
    const arr = [1, [2, [3, [4]]], 5];
    expect(flatten(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle empty arrays inside', () => {
    const arr = [1, [], [2, [3, []]], 4];
    expect(flatten(arr)).toEqual([1, 2, 3, 4]);
  });

  it('should return empty array if input is empty', () => {
    expect(flatten([])).toEqual([]);
  });

  it('should work with strings too', () => {
    const arr = ['a', ['b', ['c']]];
    expect(flatten(arr)).toEqual(['a', 'b', 'c']);
  });
});

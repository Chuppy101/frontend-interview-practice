import { twoSum } from '../../algorithms/30-06-2025/two-sum';

describe('twoSum', () => {
  it('returns indices for classic example', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('works with duplicate numbers', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it('handles negative numbers', () => {
    expect(twoSum([-1, 4, 5, -3], 1)).toEqual([1, 3]);
  });
});

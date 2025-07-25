import { removeDuplicates } from '../../algorithms/25-07-2025/remove-duplicates';

test('removeDuplicates basic case', () => {
  const nums = [0, 0, 1, 1, 1, 2, 2, 3];
  const len = removeDuplicates(nums);
  expect(len).toBe(4);
  expect(nums.slice(0, len)).toEqual([0, 1, 2, 3]);
});

test('all duplicates', () => {
  const nums = [5, 5, 5, 5];
  const len = removeDuplicates(nums);
  expect(len).toBe(1);
  expect(nums.slice(0, len)).toEqual([5]);
});

test('no duplicates', () => {
  const nums = [1, 2, 3, 4, 5];
  const len = removeDuplicates(nums);
  expect(len).toBe(5);
  expect(nums.slice(0, len)).toEqual([1, 2, 3, 4, 5]);
});

test('empty array', () => {
  const nums: number[] = [];
  const len = removeDuplicates(nums);
  expect(len).toBe(0);
  expect(nums.slice(0, len)).toEqual([]);
});

import { removeDuplicates } from '../../algorithms/25-07-2025/remove-duplicates';

test('removeDuplicates basic case', () => {
  const nums = [0, 0, 1, 1, 1, 2, 2, 3];
  const result = removeDuplicates(nums);
  expect(result).toEqual([0, 1, 2, 3]);
  expect(nums.slice(0, result.length)).toEqual([0, 1, 2, 3]); // проверка мутации
});

test('all duplicates', () => {
  const nums = [5, 5, 5, 5];
  const result = removeDuplicates(nums);
  expect(result).toEqual([5]);
  expect(nums.slice(0, result.length)).toEqual([5]);
});

test('no duplicates', () => {
  const nums = [1, 2, 3, 4, 5];
  const result = removeDuplicates(nums);
  expect(result).toEqual([1, 2, 3, 4, 5]);
  expect(nums.slice(0, result.length)).toEqual([1, 2, 3, 4, 5]);
});

test('empty array', () => {
  const nums: number[] = [];
  const result = removeDuplicates(nums);
  expect(result).toEqual([]);
  expect(nums).toEqual([]);
});

test('two unique elements at start', () => {
  const nums = [1, 2, 2, 2, 3, 3];
  const result = removeDuplicates(nums);
  expect(result).toEqual([1, 2, 3]);
  expect(nums.slice(0, result.length)).toEqual([1, 2, 3]);
});

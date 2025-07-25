export function removeDuplicates(array: number[]): number[] {
  if (array.length === 0) return [];

  let i = 0;

  for (let j = 1; j < array.length; j++) {
    if (array[j] !== array[i]) {
      i++;
      array[i] = array[j];
    }
  }

  array.length = i + 1;

  return array;
}

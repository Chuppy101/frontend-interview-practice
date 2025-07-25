export function removeDuplicates(array: number[]): number {
  if (array.length === 0) return 0;

  let i = 0;

  for (let j = 0; j < array.length; j++) {
    if (array[j] !== array[i]) {
      i++;
      array[i] = array[j];
    }
  }

  return i + 1;
}

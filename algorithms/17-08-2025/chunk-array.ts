export function chunk<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  if (size <= 0) return [];

  for (let i = 0; i < arr.length; i += size) {
    const chunkPart = arr.slice(i, i + size);
    result.push(chunkPart);
  }

  return result;
}

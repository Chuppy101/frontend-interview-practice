export function isLucky(num: number): boolean {
  function sumOfSquares(n: number): number {
    return n
      .toString()
      .split('')
      .map(Number)
      .reduce((acc, digit) => acc + digit * digit, 0);
  }

  const seen = new Set<number>();
  let squaredValue = sumOfSquares(num);

  while (!seen.has(squaredValue)) {
    if (squaredValue === 1) return true;
    seen.add(squaredValue);
    squaredValue = sumOfSquares(squaredValue);
  }
  return false;
}

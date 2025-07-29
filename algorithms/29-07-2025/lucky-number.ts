export function isLucky(num: number): boolean {
  function sumOfSquares(n: number): number {
    return n
      .toString()
      .split('')
      .map(Number)
      .reduce((acc, digit) => acc + digit * digit, 0);
  }

  const seen = new Set<number>();
  let current = num;

  while (!seen.has(current)) {
    if (current === 1) return true;
    seen.add(current);
    current = sumOfSquares(current);
  }
  return false;
}

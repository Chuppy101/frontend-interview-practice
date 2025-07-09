export function mergeIntervals(intervals: [number, number][]): [number, number][] {
  if (intervals.length === 0) return [];

  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);
  let result: [number, number][] = [];

  for (const curr of sorted) {
    // если это первый отрезок, просто push
    if (result.length === 0) {
      result.push(curr);
      continue;
    }
    //берем последний записанный отрезок для сравнения с нынешним
    const last = result[result.length - 1];

    if (curr[0] <= last[1]) {
      // модифицируем последний отрезок в result
      last[1] = Math.max(last[1], curr[1]);
    } else {
      result.push(curr);
    }
  }
  return result;
}

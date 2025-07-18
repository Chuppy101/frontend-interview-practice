export function insertInterval(
  intervals: [number, number][],
  newInterval: [number, number],
): [number, number][] {
  if (intervals.length === 0) return [newInterval];

  let result: [number, number][] = [];
  let [start, end] = newInterval;
  let inserted = false;

  for (const curr of intervals) {
    // Интервал левее и не пересекается
    if (curr[1] < start) {
      result.push(curr);
    }
    // Интервал правее и не пересекается
    else if (curr[0] > end) {
      if (!inserted) {
        result.push([start, end]);
        inserted = true;
      }
      result.push(curr);
    }
    // Если пересекается
    else {
      start = Math.min(start, curr[0]);
      end = Math.max(end, curr[1]);
    }
  }

  if (!inserted) {
    result.push([start, end]);
  }

  return result;
}

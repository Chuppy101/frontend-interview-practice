// Объединяет пересекающиеся интервалы в массиве
export function mergeIntervals(intervals: [number, number][]): [number, number][] {
  if (intervals.length === 0) return [];

  // Сортируем интервалы по началу
  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);
  let result: [number, number][] = [];

  for (const curr of sorted) {
    // Если это первый интервал — просто добавляем
    if (result.length === 0) {
      result.push(curr);
      continue;
    }

    const last = result[result.length - 1];

    if (curr[0] <= last[1]) {
      // Если интервалы пересекаются, расширяем последний интервал
      last[1] = Math.max(last[1], curr[1]);
    } else {
      // Если нет — добавляем новый интервал
      result.push(curr);
    }
  }

  return result;
}

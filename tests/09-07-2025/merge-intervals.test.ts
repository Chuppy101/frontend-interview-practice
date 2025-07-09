import { mergeIntervals } from '../../algorithms/09-07-2025/merge-intervals';

type Interval = [number, number];

describe('mergeIntervals', () => {
  /* 1 — базовый пример из условия */
  it('merges overlapping groups', () => {
    const input: Interval[] = [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ];
    const output = [
      [1, 6],
      [8, 10],
      [15, 18],
    ];
    expect(mergeIntervals(input)).toEqual(output);
  });

  /* 2 — касание границ */
  it('merges touching borders [1,4] + [4,5]', () => {
    expect(
      mergeIntervals([
        [1, 4],
        [4, 5],
      ]),
    ).toEqual([[1, 5]]);
  });

  /* 3 — нет перекрытий */
  it('keeps non-overlapping intervals separate', () => {
    const input: Interval[] = [
      [1, 2],
      [3, 4],
    ];
    const output = [
      [1, 2],
      [3, 4],
    ];
    expect(mergeIntervals(input)).toEqual(output);
  });

  /* 4 — полное вложение */
  it('handles one interval fully inside another', () => {
    expect(
      mergeIntervals([
        [1, 10],
        [2, 3],
      ]),
    ).toEqual([[1, 10]]);
  });

  /* 5 — один интервал */
  it('returns the same array for a single interval', () => {
    expect(mergeIntervals([[5, 7]])).toEqual([[5, 7]]);
  });

  /* 6 — пустой массив */
  it('returns empty array for empty input', () => {
    expect(mergeIntervals([])).toEqual([]);
  });

  /* 7 — уже отсортированы и слиты (доп. стресс) */
  it('handles large pre-merged input', () => {
    const many = Array.from({ length: 10000 }, (_, i) => [i * 2, i * 2 + 1] as [number, number]);
    expect(mergeIntervals(many)).toEqual(many);
  });
});

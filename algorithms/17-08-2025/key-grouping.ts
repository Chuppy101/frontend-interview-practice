type AnyObject = Record<string, any>;

export function groupBy<T extends AnyObject>(arr: T[], key: string): Record<string, T[]> {
  const result: Record<string, T[]> = {};

  for (const item of arr) {
    const groupKey = item[key] ?? 'undefined';

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(item);
  }

  return result;
}

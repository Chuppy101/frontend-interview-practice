export function firstUniqueChar(str: string): number {
  const map = new Map<string, number>();
  const cleanStr = str.toLowerCase();

  for (const ch of cleanStr) {
    const count = map.get(ch) ?? 0;
    map.set(ch, count + 1);
  }
  for (let i = 0; i < cleanStr.length; i++) {
    if (map.get(cleanStr[i]) === 1) {
      return i;
    }
  }

  return -1;
}

export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const map = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const count = map.get(char) ?? 0;
    map.set(char, count + 1);
  }

  for (let j = 0; j < t.length; j++) {
    const char = t[j];
    const prev = map.get(char);
    if (prev === undefined || prev - 1 < 0) return false;
    if (prev - 1 === 0) map.delete(char);
    else map.set(char, prev - 1);
  }

  return map.size === 0;
}

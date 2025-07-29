export function countSubstringChars(
  s: string,
  k: number,
): {
  letters: Record<string, number>;
  subStrings: Record<string, number>;
} {
  const letters: Record<string, number> = {};
  const subStrings: Record<string, number> = {};

  for (const ch of s) {
    if (letters[ch] === undefined) {
      letters[ch] = 1;
    } else {
      letters[ch] += 1;
    }
  }

  if (k > 0 && k < s.length) {
    for (let i = 0; i <= s.length - k; i++) {
      const sub = s.substring(i, i + k);
      subStrings[sub] = (subStrings[sub] ?? 0) + 1;
    }
  }

  return { letters, subStrings };
}

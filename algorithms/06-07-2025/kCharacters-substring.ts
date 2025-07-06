export function lengthDistinctSubstring(s: string, k: number): number {
  if (k <= 0) return 0;

  const counter = new Map<string, number>();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    counter.set(char, (counter.get(char) ?? 0) + 1);

    while (counter.size > k) {
      const leftChar = s[left];
      const newCount = (counter.get(leftChar) ?? 0) - 1;

      if (newCount === 0) counter.delete(leftChar);
      else counter.set(leftChar, newCount);

      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

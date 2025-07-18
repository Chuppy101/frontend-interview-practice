// Находит длину самой длинной подстроки без повторяющихся символов
export function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let maxLen = 0;
  const lastIndex = new Map<string, number>(); // хранит последний индекс каждого символа

  if (!s) return 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    const prev = lastIndex.get(char);

    // Если символ повторяется внутри текущего окна, сдвигаем левую границу
    if (prev !== undefined && prev >= left) {
      left = prev + 1;
    }

    lastIndex.set(char, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

export function groupAnagrams(words: string[]): string[][] {
  const groups = new Map<string, string[]>();

  for (const word of words) {
    const key = word.split('').sort().join('');

    if (groups.has(key)) {
      groups.get(key)!.push(word);
    } else {
      groups.set(key, [word]);
    }
  }

  return Array.from(groups.values());
}

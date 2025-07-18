export function groupAnagrams(words: string[]): string[][] {
  // Создаем Map, где ключ — отсортированное слово, а значение — массив слов-анаграмм
  const groups = new Map<string, string[]>();

  for (const word of words) {
    // Превращаем слово в массив букв, сортируем, склеиваем обратно — получаем ключ
    const key = word.split('').sort().join('');

    // Если такой ключ уже есть — добавляем слово в соответствующую группу
    if (groups.has(key)) {
      groups.get(key)!.push(word);
    }
    // Иначе создаем новую группу с текущим словом
    else {
      groups.set(key, [word]);
    }
  }

  // Возвращаем массив всех групп (только значения из Map)
  return Array.from(groups.values());
}

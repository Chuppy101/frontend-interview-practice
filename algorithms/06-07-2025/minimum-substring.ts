export function minimumSubstring(s: string, t: string): string {
  if (t.length === 0 || s.length < t.length) return '';

  //частотный словарь для t
  const need = new Map<string, number>();
  for (const ch of t) need.set(ch, (need.get(ch) ?? 0) + 1);

  const required = need.size; // сколько разных символов надо «закрыть»
  let formed = 0; // сколько уже «закрыто» в текущем окне

  // Окно [left … right] + бегущий словарь have
  const have = new Map<string, number>();
  let left = 0;
  let bestLen = Infinity; // текущий минимальный размер
  let bestStart = 0; // где начинается лучший отрезок

  for (let right = 0; right < s.length; right++) {
    //Расширяем окно вправо, добавляя символ s[right]
    const rightChar = s[right];
    have.set(rightChar, (have.get(rightChar) ?? 0) + 1);

    // если этим символом мы набрали требуемое количество, делаем formed++
    if (need.has(rightChar) && have.get(rightChar) === need.get(rightChar)) formed++;

    //Пока окно валидно, пытаемся его сузить слева
    while (formed === required && left <= right) {
      const windowLen = right - left + 1;
      if (windowLen < bestLen) {
        bestLen = windowLen;
        bestStart = left;
      }

      //Убираем символ s[left] из окна
      const leftChar = s[left];
      have.set(leftChar, have.get(leftChar)! - 1);

      //Если после уменьшения стало меньше нужного и окно перестало быть валидным
      if (need.has(leftChar) && have.get(leftChar)! < need.get(leftChar)!) formed--;

      left++; // сдвигаем левую границу
    }
  }
  return bestLen === Infinity ? '' : s.slice(bestStart, bestStart + bestLen);
}

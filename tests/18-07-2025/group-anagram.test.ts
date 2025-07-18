import { groupAnagrams } from '../../algorithms/18-07-2025/group-anagram';

describe('groupAnagrams', () => {
  it('группирует анаграммы в массивы', () => {
    const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    const output = groupAnagrams(input);

    // Упрощённая проверка: каждая группа отсортирована, как и её содержимое
    const normalize = (arr: string[][]) =>
      arr.map((group) => group.sort()).sort((a, b) => a[0].localeCompare(b[0]));

    expect(normalize(output)).toEqual(normalize([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]));
  });

  it('обрабатывает пустой массив', () => {
    expect(groupAnagrams([])).toEqual([]);
  });

  it('обрабатывает массив с одним словом', () => {
    expect(groupAnagrams(['abc'])).toEqual([['abc']]);
  });

  it('обрабатывает повторяющиеся слова', () => {
    const result = groupAnagrams(['abc', 'bca', 'cab', 'abc']);
    expect(result.length).toBe(1);
    expect(result[0].sort()).toEqual(['abc', 'bca', 'cab', 'abc'].sort());
  });

  it('учитывает регистр букв', () => {
    const result = groupAnagrams(['abc', 'Abc']);
    expect(result.length).toBe(2);
  });
});

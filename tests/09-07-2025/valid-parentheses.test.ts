import { isValidParentheses } from '../../algorithms/09-07-2025/valid-parentheses';

describe('isValidParentheses', () => {
  test.each([
    // [строка, ожидаемо]
    ['', true], // пустая
    ['()', true], // простая пара
    ['()[]{}', true], // несколько независимых пар
    ['({[]})', true], // корректная вложенность
    ['([)]', false], // нарушен порядок
    ['(]', false], // несоответствие типов
    ['({[})', false], // «почти» корректно
    ['(', false], // одна открывающая
    [')', false], // одна закрывающая
    [')(', false], // начинается с закрывающей
  ])('"%s" → %s', (s, expected) => {
    expect(isValidParentheses(s)).toBe(expected);
  });

  it('handles long balanced input', () => {
    const long = '('.repeat(10_000) + ')'.repeat(10_000); // 20 000 символов
    expect(isValidParentheses(long)).toBe(true);
  });
});

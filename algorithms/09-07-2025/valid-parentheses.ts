// Проверяет, правильно ли расставлены скобки в строке
export function isValidParentheses(s: string): boolean {
  const stack: string[] = [];

  for (const ch of s) {
    switch (ch) {
      // Для открывающих скобок кладём соответствующую закрывающую в стек
      case '(':
        stack.push(')');
        break;
      case '[':
        stack.push(']');
        break;
      case '{':
        stack.push('}');
        break;

      // Для закрывающих проверяем, совпадает ли с верхом стека
      default:
        if (stack.pop() !== ch) return false;
    }
  }

  // Если стек пуст — все скобки правильно закрыты
  return stack.length === 0;
}

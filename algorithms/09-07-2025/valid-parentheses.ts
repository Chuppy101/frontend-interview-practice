export function isValidParentheses(s: string): boolean {
  const stack: string[] = [];

  for (const ch of s) {
    switch (ch) {
      case '(':
        stack.push(')');
        break;
      case '[':
        stack.push(']');
        break;
      case '{':
        stack.push('}');
        break;

      default:
        if (stack.pop() !== ch) return false;
    }
  }

  return stack.length === 0;
}

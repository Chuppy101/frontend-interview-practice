export function formatPhone(phoneNum: string): string | null {
  const digits = phoneNum.replace(/\D/g, '');

  let clean = digits;

  if (digits.length === 11) {
    if (digits[0] === '8' || digits[0] === '7') {
      clean = digits.slice(1);
    } else {
      return null;
    }
  } else if (digits.length === 10) {
  } else {
    return null;
  }

  const areaCode = clean.slice(0, 3);
  const part1 = clean.slice(3, 6);
  const part2 = clean.slice(6, 8);
  const part3 = clean.slice(8, 10);
  return `+7 (${areaCode}) ${part1}-${part2}-${part3}`;
}

export function isPalindrome(str: string): boolean {
  const cleanStr = str
    .toLowerCase()
    .split('')
    .filter((char) => {
      const lettersAndDigits = (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9');
      return lettersAndDigits;
    });

  let right = cleanStr.length - 1;

  for (let left = 0; left < cleanStr.length / 2; left++) {
    if (cleanStr[left] !== cleanStr[right]) return false;
    right--;
  }

  return true;
}

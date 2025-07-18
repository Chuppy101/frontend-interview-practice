// Находит индексы двух чисел в массиве, сумма которых равна target
export function twoSum(nums: number[], target: number): [number, number] {
  const map = new Map<number, number>(); // число → индекс

  for (let i = 0; i < nums.length; i++) {
    // Вычисляем дополняющее число для текущего элемента
    const complement = target - nums[i];

    if (map.has(complement)) {
      // Если дополняющее число уже встречалось, возвращаем пару индексов
      return [map.get(complement)!, i];
    }

    // Запоминаем индекс текущего числа
    map.set(nums[i], i);
  }

  throw new Error('No valid pair');
}

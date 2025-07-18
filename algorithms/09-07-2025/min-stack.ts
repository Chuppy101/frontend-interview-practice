// Стек с возможностью за O(1) получать минимальный элемент
export class MinStack {
  private main: number[] = []; // основной стек
  private mins: number[] = []; // стек минимальных значений

  push(val: number): void {
    this.main.push(val);
    // Вычисляем текущий минимум и кладем в стек mins
    const minSoFar = this.mins.length === 0 ? val : Math.min(val, this.mins[this.mins.length - 1]);
    this.mins.push(minSoFar);
  }

  pop(): number | undefined {
    if (this.main.length === 0) return undefined;
    this.mins.pop(); // убираем минимум для текущего уровня
    return this.main.pop(); // возвращаем последний элемент основного стека
  }

  top(): number | undefined {
    return this.main[this.main.length - 1]; // возвращает верхний элемент стека
  }

  getMin(): number | undefined {
    return this.mins[this.mins.length - 1]; // возвращает текущий минимум
  }
}

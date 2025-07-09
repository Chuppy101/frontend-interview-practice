export class MinStack {
  private main: number[] = [];
  private mins: number[] = [];

  push(val: number): void {
    this.main.push(val);
    const minSoFar = this.mins.length === 0 ? val : Math.min(val, this.mins[this.mins.length - 1]);
    this.mins.push(minSoFar);
  }

  pop(): number | undefined {
    if (this.main.length === 0) return undefined;
    this.mins.pop();
    return this.main.pop();
  }

  top(): number | undefined {
    return this.main[this.main.length - 1];
  }

  getMin(): number | undefined {
    return this.mins[this.mins.length - 1];
  }
}

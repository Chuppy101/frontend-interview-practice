import { MinStack } from '../../algorithms/09-07-2025/min-stack';

describe('MinStack', () => {
  it('push / getMin / top work on single element', () => {
    const st = new MinStack();
    st.push(5);
    expect(st.top()).toBe(5);
    expect(st.getMin()).toBe(5);
  });

  it('maintains running minimum', () => {
    const st = new MinStack();
    st.push(5); // [5]  min = 5
    st.push(3); // [5,3] min = 3
    st.push(7); // [5,3,7] min = 3
    expect(st.getMin()).toBe(3);
    st.pop(); // убрали 7
    expect(st.getMin()).toBe(3);
    st.pop(); // убрали 3
    expect(st.getMin()).toBe(5);
  });

  it('returns undefined on pop/top/getMin when empty', () => {
    const st = new MinStack();
    expect(st.pop()).toBeUndefined();
    expect(st.top()).toBeUndefined();
    expect(st.getMin()).toBeUndefined();
  });

  it('handles interleaved operations', () => {
    const st = new MinStack();
    st.push(2); // stack: [2]      min = 2
    st.push(0); // stack: [2,0]    min = 0
    st.push(3); // stack: [2,0,3]  min = 0
    st.push(0); // stack: [2,0,3,0]    min = 0
    expect(st.getMin()).toBe(0);
    st.pop(); // убрали 0
    expect(st.getMin()).toBe(0);
    st.pop(); // убрали 3
    expect(st.getMin()).toBe(0);
    st.pop(); // убрали 0
    expect(st.getMin()).toBe(2);
  });

  it('works on large input (stress test)', () => {
    const st = new MinStack();
    const N = 10000;
    for (let i = N; i >= 1; i--) st.push(i); // push 10000..1  → min всегда i
    expect(st.getMin()).toBe(1);
    for (let i = 1; i <= N; i++) st.pop(); // pop всё        → стек пуст
    expect(st.getMin()).toBeUndefined();
  });
});

import { renderHook, act } from '@testing-library/react-hooks';
import { useState, useEffect } from 'react';
import { usePrevious } from '../../algorithms/11-07-2025/custom-hook-use-previous';

describe('usePrevious', () => {
  it('returns undefined on first render', () => {
    const { result } = renderHook(() => usePrevious(42));
    expect(result.current).toBeUndefined();
  });

  it('returns previous value after update', () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: 1 },
    });

    rerender({ value: 2 });
    expect(result.current).toBe(1);

    rerender({ value: 3 });
    expect(result.current).toBe(2);
  });

  it('works with strings', () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: 'hello' },
    });

    rerender({ value: 'world' });
    expect(result.current).toBe('hello');
  });

  it('works with objects (by reference)', () => {
    const obj1 = { x: 1 };
    const obj2 = { x: 2 };

    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: obj1 },
    });

    rerender({ value: obj2 });
    expect(result.current).toBe(obj1);
  });
});

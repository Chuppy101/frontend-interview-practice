// Кастомный хук React для сохранения предыдущего значения value
import { useEffect, useRef } from 'react';

export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    // Обновляем ref текущим значением после рендера
    ref.current = value;
  }, [value]);

  // Возвращаем предыдущее значение (до последнего обновления)
  return ref.current;
}

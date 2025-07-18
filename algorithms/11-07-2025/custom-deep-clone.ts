// Рекурсивно создает глубокую копию объекта или массива
export function deepClone<T>(obj: T): T {
  const clone: any = Array.isArray(obj) ? [] : {};

  // Функции возвращаем как есть, копировать не нужно
  if (typeof obj === 'function') {
    return obj;
  }
  // Примитивы и null возвращаем без изменений
  if (typeof obj !== 'object' || obj == null) {
    return obj;
  }

  // Копируем каждое собственное свойство рекурсивно
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = (obj as any)[key];
      clone[key] = deepClone(value);
    }
  }

  return clone;
}

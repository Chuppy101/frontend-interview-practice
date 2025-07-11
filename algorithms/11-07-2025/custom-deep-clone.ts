export function deepClone<T>(obj: T): T {
  const clone: any = Array.isArray(obj) ? [] : {};

  if (typeof obj === 'function') {
    return obj;
  }
  if (typeof obj !== 'object' || obj == null) {
    return obj;
  }

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = (obj as any)[key];
      clone[key] = deepClone(value);
    }
  }

  return clone;
}

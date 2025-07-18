// Создает функцию, которая вызывает fn не чаще, чем раз за delay миллисекунд
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timerId: ReturnType<typeof setTimeout> | undefined;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const context = this;

    // Если таймер уже запущен — сбрасываем его
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    // Запускаем новый таймер на вызов fn с нужным контекстом и аргументами
    timerId = setTimeout(() => {
      fn.apply(context, args);
      timerId = undefined; // очищаем ссылку после выполнения
    }, delay);
  };
}

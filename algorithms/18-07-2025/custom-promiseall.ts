function customPromiseAll<T extends readonly unknown[]>(
  values: T,
): Promise<{ [K in keyof T]: Awaited<T[K]> }> {
  // Результирующий массив с зарезолвленными значениями
  const results: unknown[] = [];

  // Счетчик успешных промисов
  let resolvedCount = 0;

  // Возвращаем промис который зарезолвится когда все промисы будут готовы
  return new Promise((resolve, reject) => {
    // Резолвим пустой результат, если изначальный массив пуст
    if (values.length === 0) {
      resolve([] as { [K in keyof T]: Awaited<T[K]> });
    }

    values.forEach((val, index) => {
      // Оборачиваем каждое значение в промис, чтобы обрабатывать их одинаково
      Promise.resolve(val)
        .then((result) => {
          results[index] = result;
          resolvedCount++;

          // Когда все значения обработаны - резолвим итоговый промис
          if (resolvedCount === values.length) {
            resolve(results as { [K in keyof T]: Awaited<T[K]> });
          }
        })
        .catch(reject); // Проверка на ошибку в любом из промисов
    });
  });
}

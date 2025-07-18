export async function fetchAll(urls: string[]): Promise<any[]> {
  // Создаем массив промисов, для каждого делаем fetch, через .then получаем результат -> пакуем его в res.json(), все это возвращаем через Promise.all когда выполнятся все промисы
  const requests = urls.map((url) => fetch(url).then((res) => res.json()));

  return Promise.all(requests);
}

export function parseQueryParams(url: string): Record<string, string> {
  const result: Record<string, string> = {};

  const queryStart = url.indexOf('?');
  if (queryStart === -1) return result;

  const queryString = url.slice(queryStart + 1);
  const pairs = queryString.split('&');

  for (const pair of pairs) {
    const [key, value = ''] = pair.split('=');
    if (key) result[key] = value;
  }

  return result;
}

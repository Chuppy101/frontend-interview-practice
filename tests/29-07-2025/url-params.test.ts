import { parseQueryParams } from '../../algorithms/29-07-2025/url-params';

describe('parseQueryParams', () => {
  it('should parse single query parameter', () => {
    expect(parseQueryParams('https://example.com?page=2')).toEqual({ page: '2' });
  });

  it('should parse multiple query parameters', () => {
    expect(parseQueryParams('https://example.com?search=cat&sort=asc')).toEqual({
      search: 'cat',
      sort: 'asc',
    });
  });

  it('should return an empty object if there is no query string', () => {
    expect(parseQueryParams('https://example.com')).toEqual({});
  });

  it('should return only the last value for duplicated keys', () => {
    expect(parseQueryParams('https://example.com?key=123&key=456')).toEqual({ key: '456' });
  });

  it('should handle empty values correctly', () => {
    expect(parseQueryParams('https://example.com?q=')).toEqual({ q: '' });
  });

  it('should ignore invalid parameters with no key', () => {
    expect(parseQueryParams('https://example.com?=value&key=value2')).toEqual({ key: 'value2' });
  });

  it('should handle URLs with fragment/hash', () => {
    expect(parseQueryParams('https://example.com?page=3#section')).toEqual({ page: '3' });
  });
});

import { groupBy } from '../../algorithms/17-08-2025/key-grouping';

describe('groupBy', () => {
  const users = [
    { name: 'Alice', role: 'admin' },
    { name: 'Bob', role: 'user' },
    { name: 'Charlie', role: 'admin' },
    { name: 'David', role: 'user' },
    { name: 'Mystery' },
  ];

  it('should group by role', () => {
    const result = groupBy(users, 'role');
    expect(result).toEqual({
      admin: [
        { name: 'Alice', role: 'admin' },
        { name: 'Charlie', role: 'admin' },
      ],
      user: [
        { name: 'Bob', role: 'user' },
        { name: 'David', role: 'user' },
      ],
      undefined: [{ name: 'Mystery' }],
    });
  });

  it('should group by name', () => {
    const result = groupBy(users, 'name');
    expect(result).toEqual({
      Alice: [{ name: 'Alice', role: 'admin' }],
      Bob: [{ name: 'Bob', role: 'user' }],
      Charlie: [{ name: 'Charlie', role: 'admin' }],
      David: [{ name: 'David', role: 'user' }],
      Mystery: [{ name: 'Mystery' }],
    });
  });

  it('should return empty object for empty array', () => {
    const result = groupBy([], 'role');
    expect(result).toEqual({});
  });
});

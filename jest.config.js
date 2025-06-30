module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts'],
  roots: ['<rootDir>/algorithms', '<rootDir>/tests'],
  modulePathIgnorePatterns: ['<rootDir>/dist'],
  moduleNameMapper: { '^@algorithms/(.*)$': '<rootDir>/algorithms/$1' },
};

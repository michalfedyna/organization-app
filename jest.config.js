/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  preset: 'react-native',
  rootDir: '.',
  resetMocks: true,
  testMatch: ['<rootDir>/tests/**/*.ts?(x)', '<rootDir>/src/**/*.test.ts?(x)'],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './jestSetup.js',
  ],
  testTimeout: 60000,
};

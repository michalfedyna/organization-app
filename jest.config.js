module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './jestSetup.js',
  ],
  testTimeout: 30000,
};

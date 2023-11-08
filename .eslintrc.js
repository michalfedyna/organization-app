module.exports = {
  ignorePatterns: ['*.js', '*.json'],
  root: true,
  extends: '@react-native',
  rules: {
    curly: 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
  },
};

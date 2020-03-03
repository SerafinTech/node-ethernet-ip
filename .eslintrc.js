module.exports = {
  env: {
    'jest/globals': true,
    es6: true,
    node: true
  },

  extends: ['eslint:recommended'],

  parserOptions: {
    ecmaVersion: 2019,
  },

  rules: {
    // Delegate actual formatting to prettier so it's *consistent*
    'prettier/prettier': 'error',


    'no-async-promise-executor': 'warn',
    'no-console': 0,

    // Jest-rules
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
  },
  plugins: ['jest', 'prettier']
};

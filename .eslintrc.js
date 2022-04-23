module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['standard'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    'comma-dangle': [
      'error',
      {
        functions: 'never',
        arrays: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'prefer-const': 'off',
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', { named: 'never' }],
  },
};

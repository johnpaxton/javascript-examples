module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};

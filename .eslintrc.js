/* ----------------------------------------------------------- */
/*                      ESLINT BASE RULES                      */
/* ----------------------------------------------------------- */

const rules = {
  '@typescript-eslint/camelcase': 'off',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/member-delimiter-style': [
    'error',
    {
      multiline: {
        delimiter: 'none',
        requireLast: false,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
    },
  ],
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/no-unused-vars': [
    'warn',
    {
      args: 'after-used',
      ignoreRestSiblings: true,
      vars: 'all',
    },
  ],
  '@typescript-eslint/no-use-before-define': [
    'error',
    {
      classes: true,
      functions: false,
    },
  ],
  '@typescript-eslint/no-var-requires': 'off',
  '@typescript-eslint/unbound-method': 'off',
}

/* ----------------------------------------------------------- */
/*                          OVERRIDES                          */
/* ----------------------------------------------------------- */

const react = {
  files: ['**/*.tsx'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  rules: {
    ...rules,
    'no-restricted-globals': [1, 'jest', 'it', 'test', 'expect', 'describe'],
  },
  plugins: ['react'],
}

const jest = {
  files: [
    '**/*.test.ts',
    '**/*.test.tsx',
    'tests/**/*.ts',
    '**/__mocks__/**/*.ts',
  ],
  env: { 'jest/globals': true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // 'plugin:jest/recommended', // requires no use of power-assert
    // 'plugin:jest/all', // adds style rules
    'plugin:react/recommended',
  ],
  rules: {
    ...rules,
    'no-restricted-globals': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
  plugins: ['jest', 'react'],
}

const ts = {
  files: ['**/*.ts', '**/*.tsx'],
  env: {
    es6: true,
    node: true,
    webextensions: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    ...rules,
    'no-restricted-globals': [1, 'jest', 'it', 'test', 'expect', 'describe'],
  },
  // This order is important: react, then jest
  // File matching patterns should go from general to specific
  overrides: [react, jest],
}

/* ----------------------------------------------------------- */
/*                     FINAL ESLINT CONFIG                     */
/* ----------------------------------------------------------- */

module.exports = {
  env: {
    es6: true,
    node: true,
    webextensions: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
  overrides: [ts],
}

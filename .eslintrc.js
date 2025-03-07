module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'no-unused-vars': 'off',
    'no-console': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/display-name': 'off',
    'react/no-unknown-property': ['error', { ignore: ['jsx'] }],
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'never', children: 'never' },
    ],
    '@typescript-eslint/no-var-requires': 'off',

    //#region  //*=========== Unused Import ===========
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    //#endregion  //*======== Unused Import ===========
  },
  globals: {
    React: true,
    JSX: true,
  },
};
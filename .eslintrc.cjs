module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['xo', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      extends: ['xo-typescript', 'prettier'],
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/consistent-type-definitions': 'off',
      },
    },
    {
      files: ['*.factory.ts'],
      rules: {
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/naming-convention': 'off',
        'new-cap': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
};

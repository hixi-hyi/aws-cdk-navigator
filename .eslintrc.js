module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:jest/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'jest'],
  ignorePatterns: ['node_modules/', 'dist/'],
  rules: {
    // https://github.com/aws/aws-cdk/blob/main/docs/DESIGN_GUIDELINES.md
    'max-len': ['warn', { code: 150 }],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    semi: ['error', 'always'],
    '@typescript-eslint/padding-line-between-statements': ['error', { blankLine: 'always', prev: 'function', next: '*' }],
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/naming-convention': [
      // In the aws-cdk, property is set to PascalCase, so do not set camelCase.
      'error',
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: 'method',
        format: ['camelCase'],
      },
      {
        selector: 'function',
        format: ['camelCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
    ],
  },
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
  ],
};

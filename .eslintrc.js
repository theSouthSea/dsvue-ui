module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'eslint-config-async',
    'plugin:prettier/recommended',
  ],
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
      files: ['*.vue'],
      rules: { 'no-undef': 'off' },
    },
    {
      // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching testing files!
      // files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      files: ['**/?(*.)+(test).ts?(x)'],
      extends: ['plugin:testing-library/vue'],
      rules: {
        'testing-library/await-async-queries': 'error',
        'testing-library/no-await-sync-queries': 'error',
        'testing-library/no-debugging-utils': 'warn',
        'testing-library/no-dom-import': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: ['./tsconfig.json'], // 指向你的tsconfig文件，以便获取类型信息
    tsconfigRootDir: '.', // tsconfig.json所在的根目录，默认是当前工作区
    extraFileExtensions: ['.vue'], // 如果需要处理Vue单文件组件中的TS代码
  },
  plugins: [
    '@typescript-eslint',
    'vue',
    'simple-import-sort',
    'eslint-plugin-node',
    // 'testing-library',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    'vue/multi-word-component-names': 0,
    'simple-import-sort/imports': 'error',
    'node/handle-callback-err': ['error', '^(e|err|error)$'],
  },
};

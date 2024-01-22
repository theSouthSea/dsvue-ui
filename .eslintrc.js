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
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: ['./tsconfig.json'], // 指向你的tsconfig文件，以便获取类型信息
    tsconfigRootDir: '.', // tsconfig.json所在的根目录，默认是当前工作区
    extraFileExtensions: ['.vue'], // 如果需要处理Vue单文件组件中的TS代码
  },
  plugins: ['@typescript-eslint', 'vue', 'simple-import-sort', 'eslint-plugin-node'],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    'vue/multi-word-component-names': 0,
    'simple-import-sort/imports': 'error',
    'node/handle-callback-err': ['error', '^(e|err|error)$'],
  },
};

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'prettier',
    '@vue/airbnb',
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ['prettier', 'vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: ['error', 'never'],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'vuejs-accessibility/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['off', { devDependencies: false }],
    'vue/require-v-for-key': 'off',
    'no-prototype-builtins': 'off',
    'vuejs-accessibility/form-control-has-label': 'off',
    'no-param-reassign': 'off',
    'vue/no-multiple-template-root': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}

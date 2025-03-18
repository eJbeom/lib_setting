import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'
import tseslint from 'typescript-eslint'
import jseslint from '@eslint/js'

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': ['error'],
    },
  },
  {
    ignores: ['node_modules', '**/dist/**', 'coverage'],
  },
  jseslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
]

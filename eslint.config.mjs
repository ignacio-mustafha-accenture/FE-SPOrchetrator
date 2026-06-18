import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import prettierConfig from 'eslint-config-prettier';
import unusedImports from 'eslint-plugin-unused-imports';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  prettierConfig,
  {
    plugins: {
      'unused-imports': unusedImports,
      import: importPlugin
    },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    },
    rules: {
      'no-console': ['error', { allow: ['error', 'warn'] }],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': ['warn', { vars: 'all', varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
      'import/order': ['error', { groups: ['builtin', 'external', 'internal'], 'newlines-between': 'always' }]
    }
  }
];

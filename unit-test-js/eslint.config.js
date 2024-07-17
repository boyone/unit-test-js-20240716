import globals from 'globals';
import js from '@eslint/js';

export default [
  {
    languageOptions: { globals: globals.node },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      semi: 'error',
    },
  },
  js.configs.recommended,
];

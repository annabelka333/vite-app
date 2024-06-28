module.exports = {
  root: true,
  env: { 
    browser: true, 
    es2020: true 
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime'
  ],
  plugins: [
    'react',
    'react-hooks',
    'react-refresh'
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/prop-types": 0,
    "indent": ["error", 2],
    "linebreak-style": 1,
    "quotes": ["error", "single"],
    "camelcase": "error",
    "eqeqeq": "error",
    "no-alert": "error",
    "no-delete-var": "error",
    "no-empty": "error",
    "no-empty-function": "error",
    "no-eq-null": "error",
    "no-lone-blocks": "error",
    "no-var": "error",
    "prefer-const": "error",
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    "no-duplicate-imports": "error",
    "no-magic-numbers": "off",
    "no-new-func": "error",
    "no-redeclare": "error",
    "no-sparse-arrays": "error",
    "no-shadow": 0,
    "prefer-object-spread": "error",
    "space-in-parens": ["error", "never"],
    "semi": ["error", "always"],
    "no-useless-escape": "off"
  },
};

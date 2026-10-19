import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  // Ignore compiled/generated output
  {
    ignores: ["dist/**", "node_modules/**", "public/**"]
  },

  // Base JS rules
  js.configs.recommended,

  // Node.js config files at the project root
  // (vite.config.js, tailwind.config.js, postcss.config.js, eslint.config.js)
  {
    files: ["*.config.js", "*.config.mjs", "*.config.cjs"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es2021
      }
    }
  },

  // React source files
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021
      },
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh
    },
    settings: {
      react: { version: "detect" }
    },
    rules: {
      // React recommended rules
      ...reactPlugin.configs.recommended.rules,

      // React Hooks rules
      ...reactHooks.configs.recommended.rules,

      // Vite HMR: warn if components are not safely exportable
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ],

      // React 17+ JSX transform — no need to import React
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // General quality rules
      "no-unused-vars": [
        "warn",
        { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }
      ],
      "no-console": "warn"
    }
  }
];

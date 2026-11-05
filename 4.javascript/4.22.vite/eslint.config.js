import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import checkFile from 'eslint-plugin-check-file';
export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js, 'check-file': checkFile, },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      "prefer-const": "error",
      "no-empty-function": "error",
      "check-file/filename-naming-convention": [
        "error",
        {
          "**/*.{js,ts,json}": "CAMEL_CASE"
        }
      ],
      "camelcase": "error",
      "eqeqeq": "error"
    }
  },
]);

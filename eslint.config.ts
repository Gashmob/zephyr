/**
 * MIT License
 *
 * Copyright (c) 2025-Present Kevin Traini
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import eslint from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";
import plugin_import from "eslint-plugin-import";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig(
    globalIgnores(["dist/**", "storybook-static/**", ".idea"]),
    {
        files: ["*.{ts,vue}"],
        plugins: {
            "@stylistic": stylistic,
        },
        extends: [
            eslint.configs.recommended,
            tseslint.configs.strict,
            tseslint.configs.stylistic,
            plugin_import.flatConfigs.typescript,
        ],
        rules: {
            "no-template-curly-in-string": "error",
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": ["error", { caughtErrorsIgnorePattern: "^_" }],
            "array-callback-return": "warn",
            "consistent-return": "warn",
            "curly": "error",
            "default-case": "warn",
            "dot-notation": "warn",
            "eqeqeq": "warn",
            "no-alert": "error",
            "no-console": "error",
            "no-caller": "error",
            "no-div-regex": "error",
            "no-else-return": "warn",
            "no-eval": "error",
            "no-extend-native": "error",
            "no-extra-bind": "error",
            "no-implicit-coercion": "error",
            "no-implied-eval": "error",
            "no-iterator": "error",
            "no-labels": "error",
            "no-lone-blocks": "error",
            "no-loop-func": "warn",
            "no-multi-str": "error",
            "no-new": "warn",
            "no-new-func": "warn",
            "no-new-wrappers": "error",
            "no-param-reassign": "warn",
            "no-proto": "error",
            "no-return-assign": "error",
            "no-return-await": "error",
            "no-self-compare": "error",
            "no-sequences": "error",
            "no-throw-literal": "error",
            "no-unmodified-loop-condition": "error",
            "no-useless-call": "error",
            "no-useless-concat": "error",
            "no-useless-return": "warn",
            "no-void": "error",
            "no-with": "error",
            "radix": "error",
            "require-await": "error",
            // Stylistic
            "@stylistic/array-bracket-spacing": ["error", "never"],
            "@stylistic/comma-dangle": ["error", "always-multiline"],
            "@stylistic/eol-last": ["error", "always"],
            "@stylistic/indent": ["error", 4],
            "@stylistic/linebreak-style": ["error", "unix"],
            "@stylistic/max-len": ["error", {
                code: 100,
                tabWidth: 4,
                ignoreComments: true,
            }],
            "@stylistic/object-curly-spacing": ["error", "always"],
            "@stylistic/quote-props": ["error", "consistent-as-needed"],
            "@stylistic/quotes": ["error", "double", {
                avoidEscape: true,
                allowTemplateLiterals: "avoidEscape",
            }],
            "@stylistic/semi": ["error", "always"],
            "@stylistic/spaced-comment": ["error", "always"],
            // Typescript
            "@typescript-eslint/camelcase": "off",
            "@typescript-eslint/naming-convention": [
                "error",
                { selector: "typeLike", format: ["PascalCase"] },
            ],
            "@typescript-eslint/class-literal-property-style": "error",
            "@typescript-eslint/consistent-type-assertions": ["error", { assertionStyle: "never" }],
            "@typescript-eslint/consistent-type-imports": "error",
            "@typescript-eslint/explicit-function-return-type": "error",
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/no-non-null-assertion": "error",
            "@typescript-eslint/no-use-before-define": [
                "error",
                { functions: false, typedefs: false, classes: false },
            ],
            // import
            "import/no-duplicates": "error",
            "import/no-extraneous-dependencies": "error",
        },
    },
);

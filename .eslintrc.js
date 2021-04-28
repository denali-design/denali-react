/* eslint-disable @typescript-eslint/no-var-requires */
const eslintPluginJest = require('eslint-plugin-jest');
const eslintPluginJestFormatting = require('eslint-plugin-jest-formatting');

const disabledRules = {};
const turnOffRules = (rulesObj) => {
    Object.keys(rulesObj).forEach((key) => {
        disabledRules[key] = 'off';
    });
};

// Turn off Jest rules
turnOffRules(eslintPluginJest.configs.all.rules);
// Turn off Jest formatting rules
turnOffRules(eslintPluginJestFormatting.configs.recommended.overrides[0].rules);
turnOffRules(eslintPluginJestFormatting.configs.strict.overrides[0].rules);

const esLintConfig = {
    plugins: ['react', '@typescript-eslint', 'prettier', 'jest', 'jest-formatting'],
    extends: [
        'airbnb',
        'prettier',
        'prettier/react',
        'plugin:jest/all',
        'plugin:jest-formatting/strict',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    env: {
        es2020: true,
        browser: true,
        jest: false,
    },
    rules: {
        'react/jsx-fragments': 'off',
        'react/static-property-placement': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/prefer-stateless-function': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'newline-before-return': 'error',
        'space-before-blocks': 'error',
        'jsx-a11y/interactive-supports-focus': 'off',
        'import/extensions': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
        ...disabledRules,
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
        },
    },
    overrides: [
        {
            files: ['**/*.spec.js', '**/*.spec.jsx', '**/*.spec.ts', '**/*.spec.tsx'],
            env: {
                jest: true,
                'jest/globals': true,
            },
            rules: {
                // Load Jest rules
                ...eslintPluginJest.configs.all.rules,
                // Load Jest formatting rules
                ...eslintPluginJestFormatting.configs.strict.overrides[0].rules,
                // Override Jest rules
                'jest/no-hooks': 'off',
                'jest/no-truthy-falsy': 'off',
                'jest/lowercase-name': 'off',
                'jest/no-test-return-statement': 'off',
                'jest/no-large-snapshots': 'off',
                'jest/prefer-inline-snapshots': 'off',
                'jest/require-to-throw-message': 'off',
                // Override Jest formatting rules
                'jest-formatting/padding-around-all': 'error',
            },
        },
        {
            files: ['docs/**/*.js', 'docs/**/*.jsx', '**/*.stories.js', '**/*.stories.jsx'],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 'off',
            },
        },
    ],
};

module.exports = esLintConfig;

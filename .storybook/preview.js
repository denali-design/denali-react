/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import { addDecorator } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import 'denali-css/css/denali.css';
import '@denali-design/icons/dist/font/denali-icons-font.css';

// themes
import './css/denali-dark-theme.css';

addDecorator(jsxDecorator);

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    html: {
        prettier: {
            tabWidth: 4,
            useTabs: false,
            htmlWhitespaceSensitivity: 'strict',
        },
    },
    options: {
        storySort: {
            method: 'alphabetical',
            order: ['Get Started', ['Installation', 'Theming'], 'Components'],
        },
    },
};

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'light',
        toolbar: {
            icon: 'circlehollow',
            // array of plain string values or MenuItem shape (see below)
            items: ['light', 'dark'],
        },
    },
};

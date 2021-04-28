/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import { select } from '@storybook/addon-knobs';

const themeOptions = {
    Denali: ''
    DenaliDark: 'denali-dark-theme',
};

export const getThemeClassName = () => select('Theme', themeOptions, themeOptions.Denali);

// knobs tabs
export const propsGroupId = 'Props';
export const demoGroupId = 'Demo';

// eslint-disable-next-line no-console
export const storyLog = (...args) => console.log(...args);

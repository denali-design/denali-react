/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import { select } from '@storybook/addon-knobs';

const themeOptions = {
    Denali: '',
    DenaliDark: 'denali-dark-theme',
};

const removeThemes = () => {
    Object.keys(themeOptions).forEach((key) => {
        const value = themeOptions[key];
        if (value) {
            document.body.classList.remove(value);
        }
    });
};

let currentTheme = themeOptions.Denali;

export const getThemeClassName = () => {
    const themeValue = select('Theme', themeOptions, currentTheme);
    if (themeValue !== currentTheme) {
        if (!document.body.classList.contains(themeValue)) {
            removeThemes();
            if (themeValue) {
                document.body.classList.add(themeValue);
            }
        }
    }

    currentTheme = themeValue;

    return currentTheme;
};

// knobs tabs
export const propsGroupId = 'Props';
export const demoGroupId = 'Demo';

// eslint-disable-next-line no-console
export const storyLog = (...args) => console.log(...args);

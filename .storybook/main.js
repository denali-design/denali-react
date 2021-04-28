/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

module.exports = {
    stories: [
        '../documentation/*.stories.@(jsx|mdx)',
        '../documentation/**/*.stories.@(jsx|mdx)',
        '../src/*.stories.@(jsx|mdx)',
        '../src/**/*.stories.@(jsx|mdx)',
    ],
    addons: [
        '@storybook/addon-knobs/register',
        'storybook-addon-jsx',
        '@storybook/addon-links',
        '@storybook/addon-viewport/register',
        '@storybook/addon-docs',
        // TODO: add @storybook/addon-backgrounds
    ],
};

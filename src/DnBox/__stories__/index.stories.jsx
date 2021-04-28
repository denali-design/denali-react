/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { getThemeClassName, propsGroupId } from '../../../.storybook/storybook-utils';
import { DnBox } from '../../index'; // src/index.tsx

const getChildren = (value = 'Some Text') => text('children', value, propsGroupId);

export default {
    title: 'Components/DnBox',
    decorators: [withKnobs],
};

export const Default = () => {
    return (
        <DnBox>
            <h1>Title</h1>
        </DnBox>
    );
};

export const footer = () => {
    return (
        <DnBox className="additional--class" style={{ width: '320px' }}>
            <h2>Title</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.{' '}
            </p>
            <footer>
                <p>This is a footer.</p>
            </footer>
        </DnBox>
    );
};

export const playground = () => {
    return (
        <div className={getThemeClassName()}>
            <DnBox>{getChildren()}</DnBox>
        </div>
    );
};

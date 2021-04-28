/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { getThemeClassName, propsGroupId, demoGroupId } from '../../../.storybook/storybook-utils';
import { DnMenu, DnMenuAlignment } from '../../index'; // src/index.tsx

const getAlignment = (value) => select('alignment', DnMenuAlignment, value, propsGroupId);

const getClassName = (value) => text('className', value, propsGroupId);

const getMenuTriggerText = (value = 'Hover for default menu') => text('Menu item text', value, demoGroupId);

const getIsEllipses = (value) => boolean('isEllipses', value, propsGroupId);

export default {
    title: 'Components/DnMenu',
    decorators: [withKnobs],
};

export const Default = () => {
    return (
        <DnMenu>
            <DnMenu.Trigger>{getMenuTriggerText()}</DnMenu.Trigger>
            <DnMenu.Content>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#help">Help</a>
                <hr />
                <a href="#support">Support</a>
            </DnMenu.Content>
        </DnMenu>
    );
};

export const Playground = () => {
    return (
        <div className={getThemeClassName()}>
            <DnMenu className={getClassName('Foo')} alignment={getAlignment(DnMenuAlignment.left)}>
                <DnMenu.Trigger isEllipses={getIsEllipses()}>{getMenuTriggerText()}</DnMenu.Trigger>
                <DnMenu.Content>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    <a href="#help">Help</a>
                    <hr />
                    <a href="#support">Support</a>
                </DnMenu.Content>
            </DnMenu>
        </div>
    );
};

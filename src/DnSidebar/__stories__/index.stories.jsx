/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { getThemeClassName, propsGroupId } from '../../../.storybook/storybook-utils';
import { DnSidebar } from '../../index'; // src/index.tsx

const getIsActive = (value) => boolean('isActive', value, propsGroupId);
const getIsDisabled = (value) => boolean('isDisabled', value, propsGroupId);
const getIsTabletDownHideLeft = (value) => boolean('isTabletDownHideLeft', value, propsGroupId);

export default {
    title: 'Components/DnSidebar',
    decorators: [withKnobs],
};

export const Default = () => {
    return (
        <DnSidebar>
            <DnSidebar.SectionHeader>SECTION HEADER</DnSidebar.SectionHeader>
            <DnSidebar.Item className="additional-tab-item-class">Item 1</DnSidebar.Item>
            <DnSidebar.Item isActive>Item 2</DnSidebar.Item>
            <DnSidebar.Item isDisabled>Item 3</DnSidebar.Item>
            <DnSidebar.Item>Item 4</DnSidebar.Item>
        </DnSidebar>
    );
};

export const playground = () => {
    return (
        <div className={getThemeClassName()}>
            <DnSidebar isTabletDownHideLeft={getIsTabletDownHideLeft(false)} className="additional-tabs-class">
                <DnSidebar.SectionHeader>SECTION HEADER</DnSidebar.SectionHeader>
                <DnSidebar.Item className="additional-tab-item-class">Item 1</DnSidebar.Item>
                <DnSidebar.Item isActive={getIsActive(true)}>Item 2</DnSidebar.Item>
                <DnSidebar.Item isDisabled={getIsDisabled(true)}>Item 3</DnSidebar.Item>
                <DnSidebar.Item>Item 4</DnSidebar.Item>
            </DnSidebar>
        </div>
    );
};

/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { getThemeClassName, propsGroupId } from '../../../.storybook/storybook-utils';
import { DnTabs, DnTabsStyles } from '../../index'; // src/index.tsx

const getStyle = (value) => select('style', DnTabsStyles, value, propsGroupId);
const getIsVertical = (value) => boolean('isVertical', value, propsGroupId);
const getIsActive = (value) => boolean('isActive', value, propsGroupId);
const getIsDisabled = (value) => boolean('isDisabled', value, propsGroupId);
const getIsTabletDownHideLeft = (value) => boolean('isTabletDownHideLeft', value, propsGroupId);

export default {
    title: 'Components/DnTabs',
    decorators: [withKnobs],
};

export const Default = () => {
    return (
        <DnTabs>
            <DnTabs.Tab className="additional-tab-item-class">Tab 1</DnTabs.Tab>
            <DnTabs.Tab isActive>Tab 2</DnTabs.Tab>
            <DnTabs.Tab isDisabled>Tab 3</DnTabs.Tab>
            <DnTabs.Tab>Tab 4</DnTabs.Tab>
        </DnTabs>
    );
};

export const playground = () => {
    return (
        <div className={getThemeClassName()}>
            <DnTabs
                style={getStyle(DnTabsStyles.secondary)}
                isVertical={getIsVertical(true)}
                isTabletDownHideLeft={getIsTabletDownHideLeft(false)}
                className="additional-tabs-class"
            >
                <DnTabs.Tab className="additional-tab-item-class">Tab 1</DnTabs.Tab>
                <DnTabs.Tab isActive={getIsActive(true)}>Tab 2</DnTabs.Tab>
                <DnTabs.Tab isDisabled={getIsDisabled(true)}>Tab 3</DnTabs.Tab>
                <DnTabs.Tab>Tab 4</DnTabs.Tab>
            </DnTabs>
        </div>
    );
};

export const SectionHeader = () => {
    return (
        <div className={getThemeClassName()}>
            <DnTabs
                style={getStyle(DnTabsStyles.secondary)}
                isVertical={getIsVertical(true)}
                isTabletDownHideLeft={getIsTabletDownHideLeft(false)}
                className="additional-tabs-class"
            >
                <DnTabs.SectionHeader className="additional-sction-header-item-class">
                    SECTION HEADER
                </DnTabs.SectionHeader>
                <DnTabs.Tab isActive={getIsActive(true)}>Tab 1</DnTabs.Tab>
                <DnTabs.Tab isDisabled={getIsDisabled(true)}>Tab 2</DnTabs.Tab>
                <DnTabs.Tab>Tab 3</DnTabs.Tab>
            </DnTabs>
        </div>
    );
};

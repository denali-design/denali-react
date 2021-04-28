/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { demoGroupId, getThemeClassName, propsGroupId } from '../../../.storybook/storybook-utils';
import { DnList } from '../../index'; // src/index.tsx

export default {
    title: 'Components/DnLists',
    decorators: [withKnobs],
};

const getIsOrderedList = () => boolean('isOrderedList', false, propsGroupId);

const getListItemOneText = (value = 'List item 1') => text('Item 1 text', value, demoGroupId);

const getListItemTwoText = (value = 'List item 2') => text('Item 2 text', value, demoGroupId);

const getListItemThreeText = (value = 'List item 3') => text('Item 3 text', value, demoGroupId);

const getListItemFourText = (value = 'List item 4') => text('Item 4 text', value, demoGroupId);

const getClassName = () => text('className', 'dummy-list-item-classname', propsGroupId);

export const Default = () => {
    return (
        <DnList>
            <DnList.Item>{getListItemOneText()}</DnList.Item>
            <DnList.Item>{getListItemTwoText()}</DnList.Item>
            <DnList.Item>{getListItemThreeText()}</DnList.Item>
            <DnList.Item>{getListItemFourText()}</DnList.Item>
        </DnList>
    );
};

export const Playground = () => {
    return (
        <div className={getThemeClassName()}>
            <DnList isOrderedList={getIsOrderedList()} className={getClassName()}>
                <DnList.Item className={getClassName()}>{getListItemOneText()}</DnList.Item>
                <DnList.Item>{getListItemTwoText()}</DnList.Item>
                <DnList.Item>{getListItemThreeText()}</DnList.Item>
                <DnList.Item>{getListItemFourText()}</DnList.Item>
            </DnList>
        </div>
    );
};

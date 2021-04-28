/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { getThemeClassName, propsGroupId, storyLog } from '../../../.storybook/storybook-utils';
import { DnToggle } from '../../index';

const getName = (value) => text('name', value, propsGroupId);

const getIsDisabled = (value) => boolean('isDisabled', value, propsGroupId);

const getIsActive = (value) => boolean('isActive', value, propsGroupId);

const getIsSmall = (value) => boolean('isSmall', value, propsGroupId);

const getIsInverse = (value) => boolean('isInverse', value, propsGroupId);

const getClassName = (value) => text('className', value, propsGroupId);

export default {
    title: 'Components/DnToggle',
    decorators: [withKnobs],
};

export const Default = () => {
    return (
        <DnToggle>
            <DnToggle.Item isActive>Toggle1</DnToggle.Item>
            <DnToggle.Item>Toggle2</DnToggle.Item>
        </DnToggle>
    );
};

export const playground = () => {
    return (
        <div className={getThemeClassName()}>
            <DnToggle isSmall={getIsSmall()} isInverse={getIsInverse()} className={getClassName('additional--class')}>
                <DnToggle.Item isActive={getIsActive()}>Toggle1</DnToggle.Item>
                <DnToggle.Item isActive={false} isDisabled={getIsDisabled()}>
                    Toggle2
                </DnToggle.Item>
                <DnToggle.Item isActive={false}>Toggle3</DnToggle.Item>
            </DnToggle>
        </div>
    );
};

export const RadioToggle = () => {
    const name = getName('sample');

    return (
        <DnToggle isSmall={getIsSmall()} isInverse={getIsInverse()} isRadioToggle>
            <DnToggle.RadioItem
                id="Radio1"
                name={name}
                radioValue="Radio1"
                defaultChecked
                isDisabled={false}
                onChange={storyLog}
                radioLabel="Radio 1"
            />
            <DnToggle.RadioItem
                id="Radio2"
                name={name}
                radioValue="Radio2"
                defaultChecked={false}
                isDisabled={false}
                onChange={storyLog}
                radioLabel="Radio 2"
            />
            <DnToggle.RadioItem
                id="Radio3"
                name={name}
                radioValue="Radio3"
                defaultChecked={false}
                isDisabled={false}
                onChange={storyLog}
                radioLabel="Radio 3"
            />
        </DnToggle>
    );
};

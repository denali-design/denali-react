/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { getThemeClassName, propsGroupId, storyLog } from '../../../.storybook/storybook-utils';
import { DnSelect, DnSelectSizes } from '../../index'; // src/index.tsx

const getSize = () => select('size', DnSelectSizes, DnSelectSizes.default, propsGroupId);

const getIsInverse = () => boolean('isInverse', false, propsGroupId);

const getIsDisabled = () => boolean('isDisabled', false, propsGroupId);

const getIsFull = () => boolean('isFull', false, propsGroupId);

const getOnChange = () => storyLog('changed');

const getChildren = (options) =>
    options.map(({ title, value, selected, disabled }) => (
        <option value={value} selected={selected} disabled={disabled}>
            {title}
        </option>
    ));

const options = [
    {
        title: 'Select your option',
        value: '',
        disabled: true,
    },
    {
        title: 'Value 1',
        value: 'v1',
        selected: true,
    },
    {
        title: 'Value 2',
        value: 'v2',
    },
    {
        title: 'Value 3',
        value: 'v3',
    },
];

export default {
    title: 'Components/DnSelect',
    decorators: [withKnobs],
};

export const Default = () => {
    return (
        <DnSelect onChange={getOnChange()} className="foo">
            {getChildren(options)}
        </DnSelect>
    );
};

export const playground = () => {
    return (
        <div className={getThemeClassName()}>
            <DnSelect
                onChange={getOnChange()}
                size={getSize()}
                isInverse={getIsInverse()}
                isDisabled={getIsDisabled()}
                isFull={getIsFull()}
            >
                {getChildren(options)}
            </DnSelect>
        </div>
    );
};

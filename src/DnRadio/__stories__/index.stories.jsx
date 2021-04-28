/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { getThemeClassName, propsGroupId, storyLog } from '../../../.storybook/storybook-utils';
import { DnRadio } from '../../index'; // src/index.tsx

const getId = (value) => text('id', value, propsGroupId);

const getName = (value) => text('name', value, propsGroupId);

const getRadioLabel = (value) => text('radioLabel', value, propsGroupId);

const getRadioValue = (value) => text('radioValue', value, propsGroupId);

const getDefaultChecked = (value) => boolean('defaultChecked', value, propsGroupId);

const getIsDisabled = (value) => boolean('isDisabled', value, propsGroupId);

const getClassName = (value) => text('className', value, propsGroupId);

export default {
    title: 'Components/DnRadio',
    decorators: [withKnobs],
};

export const Default = () => {
    return <DnRadio id={getId('Radio')} />;
};

export const playground = () => {
    const name = getName('sample');

    return (
        <div className={getThemeClassName()}>
            <DnRadio
                id={getId('Radio1')}
                name={name}
                radioValue={getRadioValue('Radio1')}
                defaultChecked={getDefaultChecked(true)}
                isDisabled={getIsDisabled()}
                className={getClassName('additional--class')}
                onChange={storyLog}
                radioLabel={getRadioLabel('Radio 1')}
            />
            <DnRadio
                id="Radio2"
                name={name}
                radioValue="Radio2"
                defaultChecked={false}
                isDisabled={false}
                onChange={storyLog}
                radioLabel="Radio 2"
            />
            <DnRadio
                id="Radio3"
                name={name}
                radioValue="Radio3"
                defaultChecked={false}
                isDisabled
                onChange={storyLog}
                radioLabel="Radio 3"
            />
        </div>
    );
};

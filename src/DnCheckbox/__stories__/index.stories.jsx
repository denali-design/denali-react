/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { getThemeClassName, propsGroupId, storyLog } from '../../../.storybook/storybook-utils';
import { DnCheckbox } from '../../index'; // src/index.tsx

const getId = (value) => text('id', value, propsGroupId);

const getName = (value) => text('name', value, propsGroupId);

const getCheckboxLabel = (value) => text('checkboxLabel', value, propsGroupId);

const getCheckboxValue = (value) => text('checkboxValue', value, propsGroupId);

const getDefaultChecked = (value) => boolean('defaultChecked', value, propsGroupId);

const getIsDisabled = (value) => boolean('isDisabled', value, propsGroupId);

const getIsDataPartial = (value) => boolean('isPartial', value, propsGroupId);

const getClassName = (value) => text('className', value, propsGroupId);

const getOnChange = () => storyLog('changed');

export default {
    title: 'Components/DnCheckbox',
    decorators: [withKnobs],
};

export const Default = () => {
    return <DnCheckbox id={getId('checkbox1')} />;
};

export const playground = () => {
    return (
        <div className={getThemeClassName()}>
            <DnCheckbox
                id={getId('checkbox1')}
                name={getName('checkbox')}
                defaultChecked={getDefaultChecked(false)}
                checkboxLabel={getCheckboxLabel('Checkbox')}
                value={getCheckboxValue('value1')}
                isPartial={getIsDataPartial(false)}
                isDisabled={getIsDisabled(false)}
                className={getClassName('additional--class')}
                onChange={getOnChange()}
            />
        </div>
    );
};

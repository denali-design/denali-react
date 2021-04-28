/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { getThemeClassName, propsGroupId, storyLog } from '../../../.storybook/storybook-utils';
import { DnSwitch } from '../../index'; // src/index.tsx

const getId = (value) => text('id', value, propsGroupId);

const getName = (value) => text('name', value, propsGroupId);

const getOffLabel = (value) => text('offLabel', value, propsGroupId);

const getOnLabel = (value) => text('onLabel', value, propsGroupId);

const getChecked = (value) => boolean('checked', value, propsGroupId);

const getIsDisabled = (value) => boolean('isDisabled', value, propsGroupId);

const getClassName = (value) => text('className', value, propsGroupId);

export default {
    title: 'Components/DnSwitch',
    decorators: [withKnobs],
};

export const Default = () => {
    return <DnSwitch />;
};

export const playground = () => {
    return (
        <div className={getThemeClassName()}>
            <DnSwitch
                id={getId('switch1')}
                name={getName('canView')}
                offLabel={getOffLabel('Off')}
                onLabel={getOnLabel('On')}
                checked={getChecked(true)}
                isDisabled={getIsDisabled(false)}
                className={getClassName('additional--class')}
                onChange={storyLog}
            />
        </div>
    );
};

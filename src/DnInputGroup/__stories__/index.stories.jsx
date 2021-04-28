/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { getThemeClassName, propsGroupId } from '../../../.storybook/storybook-utils';
import { DnInputGroup, DnInput } from '../../index';

const getIsStacked = () => boolean('isStacked', false, propsGroupId);

const getIsResponsive = () => boolean('isResponsive', false, propsGroupId);

const getIsAuto = () => boolean('isAuto', false, propsGroupId);

const getLabelText = (value) => text('labelText', value, propsGroupId);

const getLabelId = (value) => text('labelId', value, propsGroupId);

export default {
    title: 'Components/DnInputGroup',
    decorators: [withKnobs],
};

export const Default = () => {
    return (
        <DnInputGroup>
            <DnInput />
        </DnInputGroup>
    );
};
export const playground = () => {
    const id = getLabelId('someId');

    return (
        <div className={getThemeClassName()}>
            <DnInputGroup
                isStacked={getIsStacked()}
                isResponsive={getIsResponsive()}
                isAuto={getIsAuto()}
                labelText={getLabelText('Label')}
                labelId={id}
            >
                <DnInput id={id} />
            </DnInputGroup>
        </div>
    );
};

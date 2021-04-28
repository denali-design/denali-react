/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { getThemeClassName, propsGroupId, storyLog } from '../../../.storybook/storybook-utils';
import { DnButton, DnButtonTypes, DnButtonStyles, DnButtonSizes } from '../../index'; // src/index.tsx

const getIsActive = () => boolean('isActive', false, propsGroupId);

const getType = () => select('type', DnButtonTypes, DnButtonTypes.button, propsGroupId);

const getStyle = (value = DnButtonStyles.solid) => select('style', DnButtonStyles, value, propsGroupId);

const getSize = () => select('size', DnButtonSizes, DnButtonSizes.default, propsGroupId);

const getIsInverse = () => boolean('isInverse', false, propsGroupId);

const getIsDisabled = () => boolean('isDisabled', false, propsGroupId);

const getIsFull = () => boolean('isFull', false, propsGroupId);

const getIsLoading = () => boolean('isLoading', false, propsGroupId);

const getOnClick = () => storyLog('clicked');

const getChildren = (value = 'Button') => text('children', value, propsGroupId);

export default {
    title: 'Components/DnButton',
    decorators: [withKnobs],
};

export const Default = () => {
    return (
        <DnButton onClick={getOnClick()} className="foo">
            {getChildren()}
        </DnButton>
    );
};

export const playground = () => {
    return (
        <div className={getThemeClassName()}>
            <DnButton
                isActive={getIsActive()}
                type={getType()}
                style={getStyle(DnButtonStyles.outline)}
                size={getSize()}
                isInverse={getIsInverse()}
                isDisabled={getIsDisabled()}
                isFull={getIsFull()}
                isLoading={getIsLoading()}
            >
                {getChildren()}
            </DnButton>
        </div>
    );
};

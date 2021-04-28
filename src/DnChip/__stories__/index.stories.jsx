/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { getThemeClassName, propsGroupId, storyLog } from '../../../.storybook/storybook-utils';
import { DnChip, DnChipSizes, DnChipColors, DnChipShades } from '../../index'; // src/index.tsx

const getSize = (value) => select('size', DnChipSizes, value, propsGroupId);

const getBgColor = (value) => select('bgColor', DnChipColors, value, propsGroupId);

const getBgShade = (value) => select('bgShade', DnChipShades, value, propsGroupId);

const getColor = (value) => select('color', DnChipColors, value, propsGroupId);

const getShade = (value) => select('shade', DnChipShades, value, propsGroupId);

const getClassName = (value) => text('className', value, propsGroupId);

const getOnClick = () => storyLog('clicked');

const getChildren = (value = 'Chip') => text('children', value, propsGroupId);

export default {
    title: 'Components/DnChip',
    decorators: [withKnobs],
};

export const Default = () => {
    return <DnChip>{getChildren()}</DnChip>;
};

export const playground = () => {
    return (
        <div className={getThemeClassName()}>
            <DnChip
                size={getSize(DnChipSizes.large)}
                bgColor={getBgColor(DnChipColors.red)}
                bgShade={getBgShade(DnChipShades.shade800)}
                color={getColor(DnChipColors.yellow)}
                shade={getShade(DnChipShades.shade600)}
                onClick={getOnClick()}
                className={getClassName('foo')}
            >
                {getChildren()}
            </DnChip>
        </div>
    );
};

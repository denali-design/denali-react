/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { getThemeClassName, propsGroupId } from '../../../.storybook/storybook-utils';
import { DnIcon, DnIconSizes, DnIconColors, DnIconShades } from '../../index'; // src/index.tsx

const getSize = (value) => select('size', DnIconSizes, value, propsGroupId);

const getIcon = (value) => text('icon', value, propsGroupId);

const getColor = (value) => select('color', DnIconColors, value, propsGroupId);

const getShade = (value) => select('shade', DnIconShades, value, propsGroupId);

const getClassName = (value) => text('className', value, propsGroupId);

export default {
    title: 'Components/DnIcon',
    decorators: [withKnobs],
};

export const Default = () => {
    return <DnIcon icon={getIcon('denali')} />;
};

export const playground = () => {
    return (
        <div className={getThemeClassName()}>
            <DnIcon
                icon={getIcon('react')}
                size={getSize(DnIconSizes.large)}
                color={getColor(DnIconColors.orange)}
                shade={getShade(DnIconShades.shade600)}
                className={getClassName('p-18')}
            />
        </div>
    );
};

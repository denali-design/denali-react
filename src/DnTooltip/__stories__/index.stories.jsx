/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { getThemeClassName, propsGroupId } from '../../../.storybook/storybook-utils';
import { DnTooltip, DnLink, DnTooltipPositions, DnIcon } from '../../index'; // src/index.tsx

const getTooltipText = (value) => text('tooltipText', value, propsGroupId);

const getPosition = (value) => select('position', DnTooltipPositions, value, propsGroupId);

const getIsSmall = (value) => boolean('isSmall', value, propsGroupId);

const getClassName = (value) => text('className', value, propsGroupId);

export default {
    title: 'Components/DnTooltip',
    decorators: [withKnobs],
};

export const Default = () => {
    return (
        <DnTooltip tooltipText={getTooltipText('the tooltip text')}>
            <DnLink>Tooltip</DnLink>
        </DnTooltip>
    );
};

export const playground = () => {
    return (
        <div className={getThemeClassName()}>
            <div className="flex justify-content-center m-t-40">
                <DnTooltip
                    className={getClassName('additional--class')}
                    position={getPosition(DnTooltipPositions.right)}
                    isSmall={getIsSmall()}
                    tooltipText={getTooltipText('the tooltip text')}
                >
                    <DnIcon icon="user-profile-circle" />
                </DnTooltip>
            </div>
        </div>
    );
};

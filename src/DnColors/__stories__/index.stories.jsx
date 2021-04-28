/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { getThemeClassName, propsGroupId } from '../../../.storybook/storybook-utils';
import { getColorClassName, getBgColorClassName, DnColors, DnShades, DnIcon, DnIconSizes, DnBox } from '../../index'; // src/index.tsx

const getColor = () => select('color', DnColors, DnColors.brand, propsGroupId);

const getShade = () => select('shade', DnShades, DnShades.shade500, propsGroupId);

export default {
    title: 'Components/DnColors',
    decorators: [withKnobs],
};

export const Default = () => {
    const color = getColor();
    const shade = getShade();

    return (
        <DnIcon icon="user-profile-circle" size={DnIconSizes.large} className={getColorClassName({ color, shade })} />
    );
};

export const BackgroundColor = () => {
    const color = getColor();
    const shade = getShade();

    return (
        <div className={getThemeClassName()}>
            <DnBox className={getBgColorClassName({ color, shade })}>
                <h4 className={getColorClassName({ color: DnColors.grey, shade: DnShades.shade100 })}>
                    This is a box with a modifed background color.
                </h4>
            </DnBox>
        </div>
    );
};

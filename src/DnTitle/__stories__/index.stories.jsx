/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { getThemeClassName, propsGroupId } from '../../../.storybook/storybook-utils';
import { DnTitle, DnTitleColors, DnTitleShades } from '../../index'; // src/index.tsx

const getIsWide = () => boolean('isWide', true, propsGroupId);

const getColor = (value) => select('color', DnTitleColors, value, propsGroupId);

const getShade = (value) => select('shade', DnTitleShades, value, propsGroupId);

export default {
    title: 'Components/DnTitle',
    decorators: [withKnobs],
};

export const Default = () => {
    return (
        <DnTitle>
            <h3>Title Element</h3>
            <h6>Caption</h6>
        </DnTitle>
    );
};

export const playground = () => {
    return (
        <div className={getThemeClassName()}>
            <DnTitle
                isWide={getIsWide()}
                color={getColor(DnTitleColors.green)}
                shade={getShade(DnTitleShades.shade500)}
                className="additional--class"
            >
                <h2>Headline Element</h2>
                <h6 className="upper is-grey-600">Caption</h6>
            </DnTitle>
        </div>
    );
};

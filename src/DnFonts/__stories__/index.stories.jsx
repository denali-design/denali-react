/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { getThemeClassName, propsGroupId } from '../../../.storybook/storybook-utils';
import { getFontWeightClassName, getFontFamilyClassName, DnFontFamily, DnFontWeight } from '../../index'; // src/index.tsx

const getFontFamily = () => select('fontFamily', DnFontFamily, DnFontFamily.default, propsGroupId);

const getFontWeight = () => select('fontWeight', DnFontWeight, DnFontWeight.default, propsGroupId);

export default {
    title: 'Components/DnFonts',
    decorators: [withKnobs],
};

export const FontWeight = () => {
    const fontWeight = getFontWeight();

    return <h3 className={getFontWeightClassName({ fontWeight })}>Helvetica - {fontWeight}</h3>;
};

export const FontFamily = () => {
    const fontFamily = getFontFamily();

    return (
        <div className={getThemeClassName()}>
            <h3 className={getFontFamilyClassName({ fontFamily })}>Title Caption</h3>
        </div>
    );
};

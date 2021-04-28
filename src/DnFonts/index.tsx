/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

export enum DnFontFamily {
    default = 'default',
    mono = 'mono',
}

export enum DnFontWeight {
    default = 'default',
    light = 'light',
    bold = 'bold',
    italic = 'italic',
}

export const getFontWeightClassName = ({ fontWeight }: DnFontWeightProps): string => {
    if (fontWeight === DnFontWeight.default) {
        return '';
    }

    return `is-${fontWeight}`;
};

export const getFontFamilyClassName = ({ fontFamily }: DnFontFamilyProps): string => {
    if (fontFamily === DnFontFamily.default) {
        return '';
    }

    return `is-${fontFamily}`;
};
export interface DnFontFamilyProps {
    fontFamily: DnFontFamily;
}

export interface DnFontWeightProps {
    fontWeight: DnFontWeight;
}

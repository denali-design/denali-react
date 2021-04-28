/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

export enum DnColors {
    brand = 'brand',
    grey = 'grey',
    red = 'red',
    orange = 'orange',
    yellow = 'yellow',
    lime = 'lime',
    green = 'green',
    sky = 'sky',
    blue = 'blue',
    purple = 'purple',
    violet = 'violet',
    pink = 'pink',
}

export enum DnShades {
    shade100 = '100',
    shade200 = '200',
    shade300 = '300',
    shade400 = '400',
    shade500 = '500',
    shade600 = '600',
    shade700 = '700',
    shade800 = '800',
    shade900 = '900',
    shader100 = 'r100',
    shader200 = 'r200',
    shader300 = 'r300',
    shader400 = 'r400',
    shader500 = 'r500',
}

export const getColorClassName = ({ color, shade }: DnColorProps): string => {
    return `is-${color}-${shade}`;
};

export const getBgColorClassName = ({ color, shade }: DnColorProps): string => {
    return `has-bg-${color}-${shade}`;
};

export interface DnColorProps {
    color: DnColors;
    shade: DnShades;
}

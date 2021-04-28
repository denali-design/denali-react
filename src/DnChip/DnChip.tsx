/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import classnames from 'classnames';

export const DnChip: React.FC<DnChipProps> = ({
    size,
    bgColor,
    bgShade,
    color,
    shade,
    children,
    className,
    ...rest
}: DnChipProps) => {
    return (
        <span
            className={classnames(
                'chips',
                {
                    [`is-${size}`]: size,
                    [`has-bg-${bgColor}-${bgShade}`]: bgColor && bgShade,
                    [`is-${color}-${shade}`]: color && shade,
                },
                className,
            )}
            {...rest}
        >
            {children}
        </span>
    );
};

export enum DnChipSizes {
    small = 'small',
    medium = 'medium',
    default = 'default',
    large = 'large',
}

export enum DnChipColors {
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

export enum DnChipShades {
    shade100 = '100',
    shade200 = '200',
    shade300 = '300',
    shade400 = '400',
    shade500 = '500',
    shade600 = '600',
    shade700 = '700',
    shade800 = '800',
}

export interface DnChipProps {
    size?: DnChipSizes;
    bgColor?: DnChipColors;
    bgShade?: DnChipShades;
    color?: DnChipColors;
    shade?: DnChipShades;
    children?: React.ReactNode;
    className?: string;
}

DnChip.defaultProps = {
    size: DnChipSizes.default,
    bgColor: undefined,
    bgShade: DnChipShades.shade500,
    color: undefined,
    shade: DnChipShades.shade500,
    className: '',
};

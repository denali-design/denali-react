/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import classnames from 'classnames';

export const DnIcon: React.FC<DnIconProps> = ({ icon, size, color, shade, className, ...rest }: DnIconProps) => {
    return (
        <i
            className={classnames(
                'd-icon',
                `d-${icon}`,
                {
                    [`is-${size}`]: size,
                    [`is-${color}-${shade}`]: color && shade,
                },
                className,
            )}
            {...rest}
        />
    );
};

export enum DnIconColors {
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

export enum DnIconShades {
    shade100 = '100',
    shade200 = '200',
    shade300 = '300',
    shade400 = '400',
    shade500 = '500',
    shade600 = '600',
    shade700 = '700',
    shade800 = '800',
}

export enum DnIconSizes {
    extrasmall = 'extrasmall',
    small = 'small',
    default = 'default',
    medium = 'medium',
    large = 'large',
}

export interface DnIconProps {
    icon: string;
    size?: DnIconSizes;
    color?: DnIconColors;
    shade?: DnIconShades;
    className?: string;
}

DnIcon.defaultProps = {
    size: DnIconSizes.default,
    color: undefined,
    shade: DnIconShades.shade500,
    className: '',
};

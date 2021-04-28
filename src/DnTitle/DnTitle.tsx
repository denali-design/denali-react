/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import classnames from 'classnames';

export const DnTitle: React.FC<DnTitleProps> = ({
    isWide,
    color,
    shade,
    children,
    className,
    ...rest
}: DnTitleProps) => {
    return (
        <div className={classnames('title', className)} {...rest}>
            <span
                className={classnames('bar', {
                    'is-wide': isWide,
                    [`has-bg-${color}-${shade}`]: color && shade,
                })}
            />
            <div className="title-text">{children}</div>
        </div>
    );
};

export enum DnTitleColors {
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

export enum DnTitleShades {
    shade100 = '100',
    shade200 = '200',
    shade300 = '300',
    shade400 = '400',
    shade500 = '500',
    shade600 = '600',
    shade700 = '700',
    shade800 = '800',
}

export interface DnTitleProps {
    isWide?: boolean;
    color?: DnTitleColors;
    shade?: DnTitleShades;
    children?: React.ReactNode;
    className?: string;
}

DnTitle.defaultProps = {
    isWide: false,
    color: undefined,
    shade: DnTitleShades.shade500,
    children: null,
    className: '',
};

/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import classnames from 'classnames';

export const DnSelect: React.FC<DnSelectProps> = ({
    size,
    isInverse,
    isDisabled,
    isFull,
    children,
    className,
    ...rest
}: DnSelectProps) => {
    return (
        <div
            className={classnames(
                'input',
                'has-arrow',
                {
                    [`is-${size}`]: size,
                    'is-inverse': isInverse,
                    'is-full': isFull,
                },
                className,
            )}
        >
            <select disabled={isDisabled} {...rest}>
                {children}
            </select>
        </div>
    );
};

export enum DnSelectSizes {
    small = 'small',
    medium = 'medium',
    default = 'default',
    large = 'large',
}

export interface DnSelectProps {
    size?: DnSelectSizes;
    isInverse?: boolean;
    isDisabled?: boolean;
    isFull?: boolean;
    children?: React.ReactNode;
    className?: string;
}

DnSelect.defaultProps = {
    size: DnSelectSizes.default,
    isInverse: false,
    isDisabled: false,
    isFull: false,
    children: null,
    className: '',
};

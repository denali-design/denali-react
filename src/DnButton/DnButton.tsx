/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import classnames from 'classnames';

export const DnButton: React.FC<DnButtonProps> = ({
    isActive,
    style,
    size,
    isInverse,
    isDisabled,
    isFull,
    type,
    isLoading,
    children,
    className,
    ...rest
}: DnButtonProps) => {
    return (
        <button
            className={classnames(
                'button',
                {
                    'is-active': isActive,
                    [`is-${style}`]: style,
                    [`is-${size}`]: size,
                    'is-inverse': isInverse,
                    'is-disabled': isDisabled,
                    'is-full': isFull,
                },
                className,
            )}
            // eslint-disable-next-line react/button-has-type
            type={type}
            {...rest}
        >
            {isLoading ? <div className="loader loader--button" /> : children}
        </button>
    );
};

export enum DnButtonStyles {
    solid = 'solid',
    outline = 'outline',
    ghost = 'ghost',
    text = 'text',
}

export enum DnButtonSizes {
    small = 'small',
    medium = 'medium',
    default = 'default',
    large = 'large',
}

export enum DnButtonTypes {
    button = 'button',
    submit = 'submit',
    reset = 'reset',
}

export interface DnButtonProps {
    isActive?: boolean;
    style?: DnButtonStyles;
    size?: DnButtonSizes;
    isInverse?: boolean;
    isDisabled?: boolean;
    isFull?: boolean;
    type?: DnButtonTypes;
    isLoading?: boolean;
    children?: React.ReactNode;
    className?: string;
}

DnButton.defaultProps = {
    isActive: false,
    style: DnButtonStyles.solid,
    size: DnButtonSizes.default,
    isInverse: false,
    isDisabled: false,
    isFull: false,
    type: DnButtonTypes.button,
    isLoading: false,
    children: null,
    className: '',
};

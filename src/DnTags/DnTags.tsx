/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import classnames from 'classnames';

export const DnTags = ({ nowrap, children, className, ...rest }: DnTagsProps): JSX.Element => {
    return (
        <div
            className={classnames(
                'tags',
                {
                    nowrap,
                },
                className,
            )}
            {...rest}
        >
            {children}
        </div>
    );
};

export interface DnTagsProps {
    nowrap?: boolean;
    children: React.ReactNode;
    className?: string;
}

DnTags.defaultProps = {
    nowrap: false,
    className: '',
};

export enum DnTagSizes {
    small = 'small',
    default = 'default',
}

const DnTagItem = ({
    isActive,
    isDisabled,
    isOutlined,
    size,
    frontIconComponent,
    backIconComponent,
    children,
    className,
    ...rest
}: DnTagItemProps): JSX.Element => {
    const sizeValue = size === DnTagSizes.default ? undefined : size;

    return (
        <span
            className={classnames(
                'tag',
                {
                    'is-active': isActive,
                    'is-disabled': isDisabled,
                    outlined: isOutlined,
                    [`is-${size}`]: sizeValue,
                    'has-icon-front': !!frontIconComponent,
                    'has-icon-back': !!backIconComponent,
                },
                className,
            )}
            {...rest}
        >
            {frontIconComponent}
            {children}
            {backIconComponent}
        </span>
    );
};

DnTags.Tag = DnTagItem;

export interface DnTagItemProps {
    isActive?: boolean;
    isDisabled?: boolean;
    isOutlined?: boolean;
    size?: DnTagSizes;
    children: React.ReactNode;
    className?: string;
    frontIconComponent?: React.ReactNode;
    backIconComponent?: React.ReactNode;
}

DnTagItem.defaultProps = {
    isActive: false,
    isDisabled: false,
    isOutlined: false,
    size: DnTagSizes.default,
    className: '',
    frontIconComponent: null,
    backIconComponent: null,
};

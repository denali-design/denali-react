/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import classnames from 'classnames';

export const DnInputGroup = ({
    children,
    className,
    isStacked,
    isResponsive,
    hasButton,
    labelText,
    isAuto,
    labelId,
    ...rest
}: DnInputGroupProps): JSX.Element => {
    const hasLabel = !!labelText;

    return (
        <div
            className={classnames(
                'input-group',
                { 'has-button': hasButton, 'is-stacked': isStacked, 'is-responsive': isResponsive, [`auto`]: isAuto },
                className,
            )}
            {...rest}
        >
            {hasLabel && <label htmlFor={labelId}>{labelText}</label>}
            {React.Children.map(children, (child) => {
                return <span>{child}</span>;
            })}
        </div>
    );
};

export interface DnInputGroupProps {
    className?: string;
    children?: React.ReactNode;
    isStacked?: boolean;
    isResponsive?: boolean;
    hasButton?: boolean;
    isAuto?: boolean;
    labelText?: string;
    labelId?: string;
}

DnInputGroup.defaultProps = {
    className: '',
    isStacked: false,
    isResponsive: false,
    hasButton: false,
    isAuto: false,
    labelText: '',
    labelId: undefined,
};

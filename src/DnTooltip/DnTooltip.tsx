/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import classnames from 'classnames';

export const DnTooltip: React.FC<DnTooltipProps> = ({
    position,
    isSmall,
    tooltipText,
    className,
    children,
}: DnTooltipProps) => {
    return (
        <span
            className={classnames(`d-tooltip${position && `-${position}`}${isSmall ? `-small` : ''}`, className)}
            data-tooltip={tooltipText}
        >
            {children}
        </span>
    );
};

export enum DnTooltipPositions {
    default = 'default',
    top = 'top',
    right = 'right',
    left = 'left',
}

export interface DnTooltipProps {
    position?: DnTooltipPositions;
    isSmall?: boolean;
    tooltipText: string;
    className?: string;
    children?: React.ReactNode;
}

DnTooltip.defaultProps = {
    position: DnTooltipPositions.default,
    isSmall: false,
    tooltipText: undefined,
    className: undefined,
    children: null,
};

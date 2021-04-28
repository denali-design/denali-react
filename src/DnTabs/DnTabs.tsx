/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import classnames from 'classnames';

export enum DnTabsStyles {
    primary = 'primary',
    secondary = 'secondary',
}

export const DnTabs = ({
    style,
    isVertical,
    isTabletDownHideLeft,
    children,
    className,
    ...rest
}: DnTabsProps): JSX.Element => {
    return (
        <div
            className={classnames(
                'tabs',
                {
                    [`is-${style}`]: style,
                    'is-vertical': isVertical,
                    'tablet-down-hide-left': isTabletDownHideLeft,
                },
                className,
            )}
            {...rest}
        >
            <ul>{children}</ul>
        </div>
    );
};

export interface DnTabsProps {
    style?: DnTabsStyles;
    isVertical?: boolean;
    isTabletDownHideLeft?: boolean;
    children: React.ReactNode;
    className?: string;
}

DnTabs.defaultProps = {
    style: DnTabsStyles.primary,
    isVertical: false,
    isTabletDownHideLeft: false,
    className: '',
};

const DnTabItem = ({ isActive, isDisabled, children, className, ...rest }: DnTabItemProps): JSX.Element => {
    return (
        <li className={classnames({ 'is-active': isActive, 'is-disabled': isDisabled }, className)} {...rest}>
            <span>{children}</span>
        </li>
    );
};

DnTabs.Tab = DnTabItem;

export interface DnTabItemProps {
    isActive?: boolean;
    isDisabled?: boolean;
    children: React.ReactNode;
    className?: string;
}

DnTabItem.defaultProps = {
    isActive: false,
    isDisabled: false,
    className: '',
};

const DnTabSectionHeader = ({ children, className, ...rest }: DnTabSectionHeaderProps): JSX.Element => {
    return (
        <li className={classnames('tabs__section-header', className)} {...rest}>
            <span>{children}</span>
        </li>
    );
};

DnTabs.SectionHeader = DnTabSectionHeader;

export interface DnTabSectionHeaderProps {
    children: React.ReactNode;
    className?: string;
}

DnTabSectionHeader.defaultProps = {
    className: '',
};

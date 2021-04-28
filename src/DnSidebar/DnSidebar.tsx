/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { DnTabs, DnTabsStyles } from '../DnTabs';

export const DnSidebar = ({ isTabletDownHideLeft, children, className, ...rest }: DnSidebarProps): JSX.Element => {
    return (
        <DnTabs
            isVertical
            style={DnTabsStyles.primary}
            className={className}
            isTabletDownHideLeft={isTabletDownHideLeft}
            {...rest}
        >
            {children}
        </DnTabs>
    );
};

export interface DnSidebarProps {
    isTabletDownHideLeft?: boolean;
    children: React.ReactNode;
    className?: string;
}

DnSidebar.defaultProps = {
    isTabletDownHideLeft: false,
    className: '',
};

const DnSidebarItem = ({ isActive, isDisabled, children, className, ...rest }: DnSidebarItemProps): JSX.Element => {
    return (
        <DnTabs.Tab className={className} isActive={isActive} isDisabled={isDisabled} {...rest}>
            {children}
        </DnTabs.Tab>
    );
};

DnSidebar.Item = DnSidebarItem;

export interface DnSidebarItemProps {
    isActive?: boolean;
    isDisabled?: boolean;
    children: React.ReactNode;
    className?: string;
}

DnSidebarItem.defaultProps = {
    isActive: false,
    isDisabled: false,
    className: '',
};

const DnSidebarSectionHeader = ({ children, className, ...rest }: DnSidebarSectionHeaderProps): JSX.Element => {
    return (
        <DnTabs.SectionHeader className={className} {...rest}>
            {children}
        </DnTabs.SectionHeader>
    );
};

DnSidebar.SectionHeader = DnSidebarSectionHeader;

export interface DnSidebarSectionHeaderProps {
    children: React.ReactNode;
    className?: string;
}

DnSidebarSectionHeader.defaultProps = {
    className: '',
};

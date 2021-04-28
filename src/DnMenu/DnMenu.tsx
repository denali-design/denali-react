/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import classnames from 'classnames';

export const DnMenu = ({ children, className, alignment, menuNav, ...rest }: DnMenuProps): JSX.Element => {
    return (
        <div
            className={classnames(
                'menu',
                {
                    [`is-${alignment}`]: alignment,
                    'menu--nav': menuNav,
                },
                className,
            )}
            {...rest}
        >
            {children}
        </div>
    );
};

export enum DnMenuAlignment {
    default = '',
    left = 'left',
    right = 'right',
}

export interface DnMenuProps {
    className?: string;
    children?: React.ReactNode;
    alignment?: DnMenuAlignment;
    menuNav?: string;
}

const DnMenuTrigger = ({ children, className, href, isEllipses }: DnMenuTriggerProps): JSX.Element => {
    return (
        <a href={href} className={classnames('menu-trigger', className)}>
            {isEllipses ? <i className="d-icon d-more-horizontal is-small link" /> : children}
        </a>
    );
};
DnMenu.Trigger = DnMenuTrigger;

export interface DnMenuTriggerProps {
    className?: string;
    children?: React.ReactNode;
    href?: string;
    isEllipses?: boolean;
}

const DnMenuContent = ({ children, className, ...rest }: DnMenuContentProps) => {
    return (
        <div className={classnames('menu-content', className)} {...rest}>
            {React.Children.map(children, (child) => {
                return <span className={classnames('link', className)}>{child}</span>;
            })}
        </div>
    );
};
DnMenu.Content = DnMenuContent;

export interface DnMenuContentProps {
    className?: string;
    children?: React.ReactNode;
}

DnMenu.defaultProps = {
    className: '',
    alignment: DnMenuAlignment.default,
};

/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import classnames from 'classnames';

export const DnNavbar = ({ children, className, ...rest }: DnNavbarProps): JSX.Element => {
    return (
        <nav className={classnames('nav', className)} {...rest}>
            {children}
        </nav>
    );
};

export interface DnNavbarProps {
    className?: string;
    children?: React.ReactNode;
}

const DnNavbarItem = ({ children, className, isActive = false, href }: DnNavbarItemProps): JSX.Element => {
    const DomElement = href ? 'a' : 'span';

    return (
        <DomElement href={href} className={classnames('nav-item', className, { 'is-active': isActive })}>
            {children}
        </DomElement>
    );
};
DnNavbar.Item = DnNavbarItem;

export interface DnNavbarItemProps {
    className?: string;
    isActive?: boolean;
    children?: React.ReactNode;
    href?: string;
}

const DnNavbarLeft = ({ children, className }: DnNavbarItemProps): JSX.Element => {
    return <div className={classnames('nav-left', className)}>{children}</div>;
};
DnNavbar.Left = DnNavbarLeft;

export interface DnNavbarLeftProps {
    className?: string;
    children?: React.ReactNode;
}

const DnNavbarRight = ({ children, className }: DnNavbarItemProps) => {
    return <div className={classnames('nav-right', className)}>{children}</div>;
};
DnNavbar.Right = DnNavbarRight;

export interface DnNavbarRightProps {
    className?: string;
    children?: React.ReactNode;
}

const DnNavbarCenter = ({ children, className }: DnNavbarItemProps) => {
    return <div className={classnames('nav-center', className)}>{children}</div>;
};
DnNavbar.Center = DnNavbarCenter;

export interface DnNavbarCenterProps {
    className?: string;
    children?: React.ReactNode;
}

const DnNavbarResponsive = ({ children }: DnNavbarResponsiveProps) => {
    return <div className="nav-responsive">{children}</div>;
};
DnNavbar.Responsive = DnNavbarResponsive;

export interface DnNavbarResponsiveProps {
    children?: React.ReactNode;
}

const DnNavbarBrand = ({ src, alt = '' }: DnNavbarBrandProps) => {
    return <img className="nav-brand" src={src} alt={alt} />;
};
DnNavbar.Brand = DnNavbarBrand;

export interface DnNavbarBrandProps {
    src: string;
    alt?: string;
}

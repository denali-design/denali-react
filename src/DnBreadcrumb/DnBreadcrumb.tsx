/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import classnames from 'classnames';

export const DnBreadcrumb: React.FC<DnBreadcrumbProps> = ({ children, className, ...rest }: DnBreadcrumbProps) => {
    return (
        <ul className={classnames('breadcrumb', className)} {...rest}>
            {React.Children.map(children, (child) => {
                return (
                    <li>
                        <span className={classnames('link', className)}>{child}</span>
                    </li>
                );
            })}
        </ul>
    );
};

export interface DnBreadcrumbProps {
    className?: string;
    children: React.ReactNode;
}

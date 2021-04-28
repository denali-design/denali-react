/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import classnames from 'classnames';

export const DnLink = ({
    children,
    className,
    isActive,
    isDisabled,
    isSmall,
    isSecondary,
    isSub,
    frontIconComponent,
    backIconComponent,
    ...rest
}: DnLinkProps): JSX.Element => {
    return (
        <span
            className={classnames(
                'link',
                {
                    'is-active': isActive,
                    'is-disabled': isDisabled,
                    'is-small': isSmall,
                    'is-secondary': isSecondary,
                    'is-sub': isSub,
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

export interface DnLinkProps {
    className?: string;
    children?: React.ReactNode;
    isActive?: boolean;
    isDisabled?: boolean;
    isSmall?: boolean;
    isSecondary?: boolean;
    isSub?: boolean;
    frontIconComponent?: React.ReactNode;
    backIconComponent?: React.ReactNode;
}

DnLink.defaultProps = {
    className: '',
    children: null,
    isActive: false,
    isDisabled: false,
    isSmall: false,
    isSecondary: false,
    isSub: false,
    frontIconComponent: null,
    backIconComponent: null,
};

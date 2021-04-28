/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import classnames from 'classnames';

export const DnBox: React.FC<DnBoxProps> = ({ children, className, ...rest }: DnBoxProps) => {
    return (
        <div className={classnames('box', className)} {...rest}>
            {children}
        </div>
    );
};

export interface DnBoxProps {
    className?: string;
    children?: React.ReactNode;
}

DnBox.defaultProps = {
    className: '',
    children: null,
};

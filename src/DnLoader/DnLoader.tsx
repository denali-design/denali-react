/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import classnames from 'classnames';

export const DnLoader: React.FC<DnLoaderProps> = ({ isInverse, className }: DnLoaderProps) => {
    return (
        <div
            className={classnames(
                'loader',
                {
                    'loader--inverse': isInverse,
                },
                className,
            )}
        />
    );
};

export interface DnLoaderProps {
    isInverse?: boolean;
    className?: string;
}

DnLoader.defaultProps = {
    isInverse: false,
    className: '',
};

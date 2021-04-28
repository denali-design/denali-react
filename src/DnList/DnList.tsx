/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import classnames from 'classnames';

export const DnList = ({ children, className, isOrderedList, ...rest }: DnListProps): JSX.Element => {
    const DynamicComp = isOrderedList ? `ol` : `ul`;

    return (
        <DynamicComp className={classnames('list', className)} {...rest}>
            {children}
        </DynamicComp>
    );
};

export interface DnListProps {
    className?: string;
    children: React.ReactNode;
    isOrderedList: boolean;
}

const DnListItem = (props: DnListItemProps) => {
    return <li {...props} />;
};
DnList.Item = DnListItem;

export interface DnListItemProps {
    className?: string;
    children?: React.ReactNode;
}

DnList.defaultProps = {
    className: '',
    isOrderedList: false,
};

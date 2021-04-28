/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import classnames from 'classnames';

export const DnTable = ({ children, className, isStriped, isCards, isFrozen, ...rest }: DnTableProps): JSX.Element => {
    const table = (
        <table
            className={classnames(
                'table',
                {
                    'is-striped': isStriped,
                    'is-cards': isCards,
                },
                className,
            )}
            {...rest}
        >
            {children}
        </table>
    );

    if (isFrozen) {
        return <div className="table-container table-container__freeze">{table}</div>;
    }

    return table;
};

export interface DnTableProps {
    children: React.ReactNode;
    className?: string;
    isStriped?: boolean;
    isCards?: boolean;
    isFrozen?: boolean;
}

DnTable.defaultProps = {
    children: null,
    className: undefined,
    isStriped: false,
    isCards: false,
    isFrozen: false,
};

const DnTableHeader = ({ children }: DnTableHeaderProps): JSX.Element => {
    return (
        <thead>
            <tr>{children}</tr>
        </thead>
    );
};

DnTable.Header = DnTableHeader;

export interface DnTableHeaderProps {
    children: React.ReactNode;
}

DnTableHeader.defaultProps = {
    children: null,
};

const DnTableBody = ({ children }: DnTableBodyProps): JSX.Element => {
    return (
        <tbody>
            <tr>{children}</tr>
        </tbody>
    );
};

DnTable.Body = DnTableBody;

export interface DnTableBodyProps {
    children: React.ReactNode;
}

DnTableBody.defaultProps = {
    children: null,
};

const DnTableFooter = ({ children }: DnTableFooterProps): JSX.Element => {
    return (
        <tfoot>
            <tr>{children}</tr>
        </tfoot>
    );
};

DnTable.Footer = DnTableFooter;

export interface DnTableFooterProps {
    children: React.ReactNode;
}

DnTableFooter.defaultProps = {
    children: null,
};

const DnTableHeaderCell = ({
    position,
    isMono,
    isSorted,
    sortDirection,
    className,
    children,
    ...rest
}: DnTableHeaderCellProps): JSX.Element => {
    return (
        <th
            className={classnames(
                {
                    [`is-${position}`]: position,
                    'is-mono': isMono,
                    [`is-sorted is-sorted__${sortDirection}`]: isSorted,
                },
                className,
            )}
            {...rest}
        >
            {children}
        </th>
    );
};

DnTable.HeaderCell = DnTableHeaderCell;

export enum DnTableDataPositions {
    default = 'default',
    center = 'center',
    left = 'left',
    right = 'right',
}

export enum DnTableSortDirections {
    default = 'default',
    ascend = 'ascend',
    descend = 'descend',
}

export interface DnTableHeaderCellProps {
    isSorted: boolean;
    sortDirection: DnTableSortDirections;
    children: React.ReactNode;
    className?: string;
    position: DnTableDataPositions;
    isMono: boolean;
}

DnTableHeaderCell.defaultProps = {
    isSorted: false,
    sortDirection: DnTableSortDirections.default,
    children: null,
    className: undefined,
    position: DnTableDataPositions.default,
    isMono: false,
};

const DnTableBodyCell = ({ position, isMono, className, children, ...rest }: DnTableBodyCellProps): JSX.Element => {
    return (
        <td
            className={classnames(
                {
                    [`is-${position}`]: position,
                    'is-mono': isMono,
                },
                className,
            )}
            {...rest}
        >
            {children}
        </td>
    );
};

DnTable.BodyCell = DnTableBodyCell;

export interface DnTableBodyCellProps {
    children: React.ReactNode;
    className?: string;
    position: DnTableDataPositions;
    isMono: boolean;
}

DnTableBodyCell.defaultProps = {
    children: null,
    className: undefined,
    position: DnTableDataPositions.default,
    isMono: false,
};

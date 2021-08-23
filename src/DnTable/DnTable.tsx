/**
 * Copyright 2021, Verizon Media
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

// DnTableHeader

const DnTableHeader = ({ children, ...rest }: DnTableHeaderProps): JSX.Element => {
    return (
        <thead {...rest} >{children}</thead>
    );
};

DnTable.Header = DnTableHeader;

export interface DnTableHeaderProps {
    children: React.ReactNode;
}

DnTableHeader.defaultProps = {
    children: null,
};

// DnTableBody

const DnTableBody = ({ children, ...rest }: DnTableBodyProps): JSX.Element => {
    return (
        <tbody {...rest} >{children}</tbody>
    );
};

DnTable.Body = DnTableBody;

export interface DnTableBodyProps {
    children: React.ReactNode;
}

DnTableBody.defaultProps = {
    children: null,
};

// DnTableRow

const DnTableRow = ({ children, ...rest }: DnTableRowProps): JSX.Element => {
    return (
        <tr {...rest} >{children}</tr>
    );
};

DnTable.Row = DnTableRow;

export interface DnTableRowProps {
    children: React.ReactNode;
}

DnTableRow.defaultProps = {
    children: null,
};

// DnTableFooter

const DnTableFooter = ({ children, ...rest }: DnTableFooterProps): JSX.Element => {
    return (
        <tfoot {...rest} >{children}</tfoot>
    );
};

DnTable.Footer = DnTableFooter;

export interface DnTableFooterProps {
    children: React.ReactNode;
}

DnTableFooter.defaultProps = {
    children: null,
};

// DnTableHeaderCell

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

// DnTableCell

const DnTableCell = ({ position, isMono, className, children, ...rest }: DnTableCellProps): JSX.Element => {
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

DnTable.Cell = DnTableCell;

export interface DnTableCellProps {
    children: React.ReactNode;
    className?: string;
    position: DnTableDataPositions;
    isMono: boolean;
}

DnTableCell.defaultProps = {
    children: null,
    className: undefined,
    position: DnTableDataPositions.default,
    isMono: false,
};

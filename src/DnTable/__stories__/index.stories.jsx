/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { getThemeClassName, propsGroupId } from '../../../.storybook/storybook-utils';
import { DnTable, DnTableDataPositions, DnTableSortDirections } from '../../index'; // src/index.tsx

const getIsStriped = () => boolean('isStriped', false, propsGroupId);

const getIsCards = () => boolean('isCards', false, propsGroupId);

const getIsFrozen = () => boolean('isFrozen', false, propsGroupId);

const getIsMono = () => boolean('isMono', false, propsGroupId);

const getIsSorted = () => boolean('isSorted', false, propsGroupId);

const getSortDirection = () =>
    select('sortDirection', DnTableSortDirections, DnTableSortDirections.default, propsGroupId);

const getPosition = () => select('position', DnTableDataPositions, DnTableDataPositions.default, propsGroupId);

export default {
    title: 'Components/DnTable',
    decorators: [withKnobs],
};

export const Default = () => {
    return (
        <DnTable>
            <DnTable.Header>
                <DnTable.Row>
                    <DnTable.HeaderCell>Date</DnTable.HeaderCell>
                    <DnTable.HeaderCell>Time</DnTable.HeaderCell>
                    <DnTable.HeaderCell>User</DnTable.HeaderCell>
                    <DnTable.HeaderCell>Role</DnTable.HeaderCell>
                    <DnTable.HeaderCell>Cause</DnTable.HeaderCell>
                </DnTable.Row>
            </DnTable.Header>
            <DnTable.Body>
                <DnTable.Row>
                    <DnTable.Cell>04/14/2017</DnTable.Cell>
                    <DnTable.Cell>19:34 PDT</DnTable.Cell>
                    <DnTable.Cell>yby.jupiter</DnTable.Cell>
                    <DnTable.Cell>Admin</DnTable.Cell>
                    <DnTable.Cell>jira123</DnTable.Cell>
                </DnTable.Row>
            </DnTable.Body>
            <DnTable.Footer>
                <DnTable.Row>
                    <DnTable.Cell>04/14/2017</DnTable.Cell>
                    <DnTable.Cell>19:34 PDT</DnTable.Cell>
                    <DnTable.Cell>yby.jupiter</DnTable.Cell>
                    <DnTable.Cell>Admin</DnTable.Cell>
                    <DnTable.Cell>jira123</DnTable.Cell>
                </DnTable.Row>
            </DnTable.Footer>
        </DnTable>
    );
};

export const Playground = () => {
    return (
        <div className={getThemeClassName()}>
            <DnTable
                isStriped={getIsStriped()}
                isCards={getIsCards()}
                isFrozen={getIsFrozen()}
                onClick={action('table-click')}
            >
                <DnTable.Header onClick={action('header-click')}>
                    <DnTable.Row>
                        <DnTable.HeaderCell position={getPosition(DnTableDataPositions.right)}>Date</DnTable.HeaderCell>
                        <DnTable.HeaderCell isMono={getIsMono()}>Time</DnTable.HeaderCell>
                        <DnTable.HeaderCell
                            isSorted={getIsSorted()}
                            sortDirection={getSortDirection(DnTableSortDirections.ascend)}
                        >
                            User
                        </DnTable.HeaderCell>
                        <DnTable.HeaderCell>Role</DnTable.HeaderCell>
                        <DnTable.HeaderCell>Cause</DnTable.HeaderCell>
                    </DnTable.Row>
                </DnTable.Header>
                <DnTable.Body onClick={action('body-click')}>
                    <DnTable.Row onClick={action('row-click')}>
                        <DnTable.HeaderCell>04/14/2017</DnTable.HeaderCell>
                        <DnTable.Cell>19:34 PDT</DnTable.Cell>
                        <DnTable.Cell>yby.jupiter</DnTable.Cell>
                        <DnTable.Cell>Admin</DnTable.Cell>
                        <DnTable.Cell>jira123</DnTable.Cell>
                    </DnTable.Row>
                    <DnTable.Row>
                        <DnTable.HeaderCell onClick={action('cell-click')}>04/14/2017</DnTable.HeaderCell>
                        <DnTable.Cell>19:34 PDT</DnTable.Cell>
                        <DnTable.Cell>yby.jupiter</DnTable.Cell>
                        <DnTable.Cell>Admin</DnTable.Cell>
                        <DnTable.Cell>jira123</DnTable.Cell>
                    </DnTable.Row>
                    <DnTable.Row>
                        <DnTable.HeaderCell>04/14/2017</DnTable.HeaderCell>
                        <DnTable.Cell>19:34 PDT</DnTable.Cell>
                        <DnTable.Cell>yby.jupiter</DnTable.Cell>
                        <DnTable.Cell>Admin</DnTable.Cell>
                        <DnTable.Cell>jira123</DnTable.Cell>
                    </DnTable.Row>
                </DnTable.Body>
                <DnTable.Footer onClick={action('footer-click')}>
                    <DnTable.Row>
                        <DnTable.HeaderCell>
                            <a href="#footer">Footer</a>
                        </DnTable.HeaderCell>
                        <DnTable.Cell>
                            <a href="#greyList">pes.acl.greylist</a>
                        </DnTable.Cell>
                        <DnTable.Cell>Foo Turansky</DnTable.Cell>
                        <DnTable.Cell>Admin</DnTable.Cell>
                        <DnTable.Cell>jira123</DnTable.Cell>
                    </DnTable.Row>
                </DnTable.Footer>
            </DnTable>
        </div>
    );
};

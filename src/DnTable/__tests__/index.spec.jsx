/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { render } from 'enzyme';
import { DnTable, DnTableDataPositions, DnTableSortDirections } from '../../index'; // src/index.tsx

describe('DnTable Tests', () => {
    it('should export DnTableDataPositions', () => {
        expect.assertions(1);

        expect(DnTableDataPositions).toStrictEqual({
            default: 'default',
            center: 'center',
            left: 'left',
            right: 'right',
        });
    });

    it('should export DnTableSortDirections', () => {
        expect.assertions(1);

        expect(DnTableSortDirections).toStrictEqual({
            default: 'default',
            ascend: 'ascend',
            descend: 'descend',
        });
    });

    it('should render with default props', () => {
        expect.assertions(1);

        const rendered = render(
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
                        <DnTable.HeaderCell>04/14/2017</DnTable.HeaderCell>
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
            </DnTable>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with custom props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnTable isStriped isCards isFrozen>
                <DnTable.Header>
                    <DnTable.Row>
                        <DnTable.HeaderCell position={DnTableDataPositions.right}>Date</DnTable.HeaderCell>
                        <DnTable.HeaderCell isMono>Time</DnTable.HeaderCell>
                        <DnTable.HeaderCell isSorted sortDirection={DnTableSortDirections.ascend}>
                            User
                        </DnTable.HeaderCell>
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
                    <DnTable.Row>
                        <DnTable.Cell>04/14/2017</DnTable.Cell>
                        <DnTable.Cell>19:34 PDT</DnTable.Cell>
                        <DnTable.Cell>yby.jupiter</DnTable.Cell>
                        <DnTable.Cell>Admin</DnTable.Cell>
                        <DnTable.Cell>jira123</DnTable.Cell>
                    </DnTable.Row>
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
                        <DnTable.Cell>
                            <a href="#footer">Footer</a>
                        </DnTable.Cell>
                        <DnTable.Cell>
                            <a href="#greylist">pes.acl.greylist</a>
                        </DnTable.Cell>
                        <DnTable.Cell>Foo Turansky</DnTable.Cell>
                        <DnTable.Cell>Admin</DnTable.Cell>
                        <DnTable.Cell>jira123</DnTable.Cell>
                    </DnTable.Row>
                </DnTable.Footer>
            </DnTable>,
        );

        expect(rendered).toMatchSnapshot();
    });
});

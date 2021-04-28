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
                    <DnTable.HeaderCell>Date</DnTable.HeaderCell>
                    <DnTable.HeaderCell>Time</DnTable.HeaderCell>
                    <DnTable.HeaderCell>User</DnTable.HeaderCell>
                    <DnTable.HeaderCell>Role</DnTable.HeaderCell>
                    <DnTable.HeaderCell>Cause</DnTable.HeaderCell>
                </DnTable.Header>
                <DnTable.Body>
                    <DnTable.HeaderCell>04/14/2017</DnTable.HeaderCell>
                    <DnTable.BodyCell>19:34 PDT</DnTable.BodyCell>
                    <DnTable.BodyCell>yby.jupiter</DnTable.BodyCell>
                    <DnTable.BodyCell>Admin</DnTable.BodyCell>
                    <DnTable.BodyCell>jira123</DnTable.BodyCell>
                </DnTable.Body>
                <DnTable.Footer>
                    <DnTable.HeaderCell>04/14/2017</DnTable.HeaderCell>
                    <DnTable.BodyCell>19:34 PDT</DnTable.BodyCell>
                    <DnTable.BodyCell>yby.jupiter</DnTable.BodyCell>
                    <DnTable.BodyCell>Admin</DnTable.BodyCell>
                    <DnTable.BodyCell>jira123</DnTable.BodyCell>
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
                    <DnTable.HeaderCell position={DnTableDataPositions.right}>Date</DnTable.HeaderCell>
                    <DnTable.HeaderCell isMono>Time</DnTable.HeaderCell>
                    <DnTable.HeaderCell isSorted sortDirection={DnTableSortDirections.ascend}>
                        User
                    </DnTable.HeaderCell>
                    <DnTable.HeaderCell>Role</DnTable.HeaderCell>
                    <DnTable.HeaderCell>Cause</DnTable.HeaderCell>
                </DnTable.Header>
                <DnTable.Body>
                    <DnTable.HeaderCell>04/14/2017</DnTable.HeaderCell>
                    <DnTable.BodyCell>19:34 PDT</DnTable.BodyCell>
                    <DnTable.BodyCell>yby.jupiter</DnTable.BodyCell>
                    <DnTable.BodyCell>Admin</DnTable.BodyCell>
                    <DnTable.BodyCell>jira123</DnTable.BodyCell>
                </DnTable.Body>
                <DnTable.Body>
                    <DnTable.HeaderCell>04/14/2017</DnTable.HeaderCell>
                    <DnTable.BodyCell>19:34 PDT</DnTable.BodyCell>
                    <DnTable.BodyCell>yby.jupiter</DnTable.BodyCell>
                    <DnTable.BodyCell>Admin</DnTable.BodyCell>
                    <DnTable.BodyCell>jira123</DnTable.BodyCell>
                </DnTable.Body>
                <DnTable.Body>
                    <DnTable.HeaderCell>04/14/2017</DnTable.HeaderCell>
                    <DnTable.BodyCell>19:34 PDT</DnTable.BodyCell>
                    <DnTable.BodyCell>yby.jupiter</DnTable.BodyCell>
                    <DnTable.BodyCell>Admin</DnTable.BodyCell>
                    <DnTable.BodyCell>jira123</DnTable.BodyCell>
                </DnTable.Body>
                <DnTable.Footer>
                    <DnTable.HeaderCell>
                        <a href="#footer">Footer</a>
                    </DnTable.HeaderCell>
                    <DnTable.BodyCell>
                        <a href="#greylist">pes.acl.greylist</a>
                    </DnTable.BodyCell>
                    <DnTable.BodyCell>Foo Turansky</DnTable.BodyCell>
                    <DnTable.BodyCell>Admin</DnTable.BodyCell>
                    <DnTable.BodyCell>jira123</DnTable.BodyCell>
                </DnTable.Footer>
            </DnTable>,
        );

        expect(rendered).toMatchSnapshot();
    });
});

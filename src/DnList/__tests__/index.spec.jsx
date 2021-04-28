/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { render } from 'enzyme';
import { DnList } from '../../index'; // src/index.tsx

describe('DnList Tests', () => {
    it('should render with default props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnList>
                <DnList.Item>List item 1</DnList.Item>
                <DnList.Item>List item 2</DnList.Item>
                <DnList.Item>List item 3</DnList.Item>
                <DnList.Item>List item 4</DnList.Item>
            </DnList>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with custom props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnList isOrderedList className="dummy-list-classname">
                <DnList.Item className="dummy-list-item-classname">List item 1</DnList.Item>
                <DnList.Item>List item 2</DnList.Item>
                <DnList.Item>List item 3</DnList.Item>
                <DnList.Item>List item 4</DnList.Item>
            </DnList>,
        );

        expect(rendered).toMatchSnapshot();
    });
});

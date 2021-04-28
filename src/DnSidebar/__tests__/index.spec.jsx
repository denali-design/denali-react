/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { render } from 'enzyme';
import { DnSidebar } from '../../index'; // src/index.tsx

describe('DnSidebar Tests', () => {
    it('should render with default props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnSidebar>
                <DnSidebar.SectionHeader>SECTION HEADER</DnSidebar.SectionHeader>
                <DnSidebar.Item>Item 1</DnSidebar.Item>
                <DnSidebar.Item>Item 2</DnSidebar.Item>
                <DnSidebar.Item>Item 3</DnSidebar.Item>
            </DnSidebar>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with custom props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnSidebar isTabletDownHideLeft className="dummy-sidebar">
                <DnSidebar.SectionHeader className="dummy-sidebar-section-header">
                    SECTION HEADER
                </DnSidebar.SectionHeader>
                <DnSidebar.Item className="dummy-sidebar-item">Item 1</DnSidebar.Item>
                <DnSidebar.Item isActive>Item 2</DnSidebar.Item>
                <DnSidebar.Item isDisabled>Item 3</DnSidebar.Item>
                <DnSidebar.Item>Item 4</DnSidebar.Item>
            </DnSidebar>,
        );

        expect(rendered).toMatchSnapshot();
    });
});

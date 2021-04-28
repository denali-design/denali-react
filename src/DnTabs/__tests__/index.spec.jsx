/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { render } from 'enzyme';
import { DnTabs, DnTabsStyles } from '../../index'; // src/index.tsx

describe('DnTabs Tests', () => {
    it('should export DnTabsStyles', () => {
        expect.assertions(1);

        expect(DnTabsStyles).toStrictEqual({
            primary: 'primary',
            secondary: 'secondary',
        });
    });

    it('should render with default props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnTabs>
                <DnTabs.Tab>Tab 1</DnTabs.Tab>
                <DnTabs.Tab>Tab 2</DnTabs.Tab>
                <DnTabs.Tab>Tab 3</DnTabs.Tab>
                <DnTabs.Tab>Tab 4</DnTabs.Tab>
            </DnTabs>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with custom props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnTabs isVertical style={DnTabsStyles.secondary} className="dummy-tabs">
                <DnTabs.Tab className="dummy-tab-item">Tab 1</DnTabs.Tab>
                <DnTabs.Tab isActive>Tab 2</DnTabs.Tab>
                <DnTabs.Tab isDisabled>Tab 3</DnTabs.Tab>
                <DnTabs.Tab>Tab 4</DnTabs.Tab>
            </DnTabs>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with section header', () => {
        expect.assertions(1);

        const rendered = render(
            <DnTabs isTabletDownHideLeft isVertical style={DnTabsStyles.secondary} className="dummy-tabs">
                <DnTabs.SectionHeader className="dummy-section-header-item">SECTION HEADER</DnTabs.SectionHeader>
                <DnTabs.Tab isActive>Tab 1</DnTabs.Tab>
                <DnTabs.Tab isDisabled>Tab 2</DnTabs.Tab>
                <DnTabs.Tab>Tab 3</DnTabs.Tab>
            </DnTabs>,
        );

        expect(rendered).toMatchSnapshot();
    });
});

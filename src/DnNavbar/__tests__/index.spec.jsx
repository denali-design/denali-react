/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { render } from 'enzyme';
import { DnNavbar, DnIcon } from '../../index'; // src/index.tsx
import brandImage from '../__stories__/denali-logo.svg';

describe('DnNavbar Tests', () => {
    it('should render with default props', () => {
        expect.assertions(1);

        const rendered = render(<DnNavbar />);

        expect(rendered).toMatchSnapshot();
    });

    it('should render default storybook example', () => {
        expect.assertions(1);

        const rendered = render(
            <DnNavbar>
                <DnNavbar.Left>
                    <DnNavbar.Brand src={brandImage} alt="Denali brand" />
                </DnNavbar.Left>
                <DnNavbar.Responsive>
                    <DnNavbar.Center>
                        <DnNavbar.Item isActive>Three</DnNavbar.Item>
                        <DnNavbar.Item>Center</DnNavbar.Item>
                        <DnNavbar.Item>Items</DnNavbar.Item>
                    </DnNavbar.Center>
                    <DnNavbar.Right>
                        <DnNavbar.Item href=".">
                            <DnIcon icon="dashboard" />
                        </DnNavbar.Item>
                        <DnNavbar.Item href=".">
                            <DnIcon icon="menu-dialpad" />
                        </DnNavbar.Item>
                        <DnNavbar.Item>
                            <DnIcon icon="user-profile-circle" />
                        </DnNavbar.Item>
                    </DnNavbar.Right>
                </DnNavbar.Responsive>
            </DnNavbar>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render brand without alt', () => {
        expect.assertions(1);

        const rendered = render(
            <DnNavbar>
                <DnNavbar.Left>
                    <DnNavbar.Brand src={brandImage} />
                </DnNavbar.Left>
            </DnNavbar>,
        );

        expect(rendered).toMatchSnapshot();
    });
});

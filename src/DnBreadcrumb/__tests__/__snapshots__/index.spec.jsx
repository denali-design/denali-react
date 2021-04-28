/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { render } from 'enzyme';
import { DnBreadcrumb } from '../../index'; // src/index.tsx
import { DnMenu } from '../../../DnMenu';

describe('DnBreadcrumb Tests', () => {
    it('should render with default props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnBreadcrumb>
                <a href="#home">Home</a>
                <a href="#Section">Section</a>
                <a href="#SubSection">Sub Section</a>
                <span>Article</span>
            </DnBreadcrumb>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with custom props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnBreadcrumb className="Foo">
                <a href="#home">Home</a>
                <a href="#Section">Section</a>
                <a href="#SubSection">Sub Section</a>
                <span>Article</span>
            </DnBreadcrumb>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with ellipses', () => {
        expect.assertions(1);

        const rendered = render(
            <DnBreadcrumb>
                <a href="#home">Home</a>
                <DnMenu>
                    <DnMenu.Trigger isEllipses />
                    <DnMenu.Content>
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                        <a href="#help">Help</a>
                        <hr />
                        <a href="#support">Support</a>
                    </DnMenu.Content>
                </DnMenu>
                <a href="#article">Article</a>
            </DnBreadcrumb>,
        );

        expect(rendered).toMatchSnapshot();
    });
});

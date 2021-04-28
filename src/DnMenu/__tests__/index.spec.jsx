/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { render } from 'enzyme';
import { DnMenu, DnMenuAlignment } from '../../index'; // src/index.tsx

describe('DnMenu Tests', () => {
    it('should export DnMenuAlignment', () => {
        expect.assertions(1);

        expect(DnMenuAlignment).toStrictEqual({
            default: '',
            left: 'left',
            right: 'right',
        });
    });

    it('should render with default props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnMenu>
                <DnMenu.Trigger>Hover for default menu</DnMenu.Trigger>
                <DnMenu.Content>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    <a href="#help">Help</a>
                    <hr />
                    <a href="#support">Support</a>
                </DnMenu.Content>
            </DnMenu>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with custom props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnMenu className="Foo" alignment={DnMenuAlignment.left}>
                <DnMenu.Trigger>Hover for default menu</DnMenu.Trigger>
                <DnMenu.Content>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    <a href="#help">Help</a>
                    <hr />
                    <a href="#support">Support</a>
                </DnMenu.Content>
            </DnMenu>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with isEllipses props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnMenu className="Foo" alignment={DnMenuAlignment.left}>
                <DnMenu.Trigger isEllipses>Hover for default menu</DnMenu.Trigger>
                <DnMenu.Content>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    <a href="#help">Help</a>
                    <hr />
                    <a href="#support">Support</a>
                </DnMenu.Content>
            </DnMenu>,
        );

        expect(rendered).toMatchSnapshot();
    });
});

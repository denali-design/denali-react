/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { render } from 'enzyme';
import { DnLink, DnIcon } from '../../index'; // src/index.tsx

describe('DnLink Tests', () => {
    it('should render with default props', () => {
        expect.assertions(1);

        const rendered = render(
            <a href="#home">
                <DnLink>Home</DnLink>
            </a>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with custom props', () => {
        expect.assertions(1);

        const rendered = render(
            <a href="#home">
                <DnLink isActive isDisabled isSmall isSecondary isSub>
                    Home
                </DnLink>
            </a>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with Icon at front', () => {
        expect.assertions(1);

        const rendered = render(
            <a href="#home">
                <DnLink frontIconComponent={<DnIcon icon="add-circle" />}>Home</DnLink>
            </a>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with Icon at front with additional props', () => {
        expect.assertions(1);

        const rendered = render(
            <a href="#home">
                <DnLink isActive isDisabled isSmall isSecondary isSub frontIconComponent={<DnIcon icon="add-circle" />}>
                    Home
                </DnLink>
            </a>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with Icon at back', () => {
        expect.assertions(1);

        const rendered = render(
            <a href="#home">
                <DnLink backIconComponent={<DnIcon icon="external" className="is-sub" />}>Home</DnLink>
            </a>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with Icon at back with all props', () => {
        expect.assertions(1);

        const rendered = render(
            <a href="#home">
                <DnLink
                    isActive
                    isDisabled
                    isSmall
                    isSecondary
                    isSub
                    backIconComponent={<DnIcon icon="external" className="is-sub" />}
                >
                    Home
                </DnLink>
            </a>,
        );

        expect(rendered).toMatchSnapshot();
    });
});

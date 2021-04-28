/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { render } from 'enzyme';
import { DnTitle, DnTitleColors, DnTitleShades } from '../../index'; // src/index.tsx

describe('DnTitle Tests', () => {
    it('should export DnTitleColors', () => {
        expect.assertions(1);

        expect(DnTitleColors).toStrictEqual({
            brand: 'brand',
            grey: 'grey',
            red: 'red',
            orange: 'orange',
            yellow: 'yellow',
            lime: 'lime',
            green: 'green',
            sky: 'sky',
            blue: 'blue',
            purple: 'purple',
            violet: 'violet',
            pink: 'pink',
        });
    });

    it('should export DnTitleShades', () => {
        expect.assertions(1);

        expect(DnTitleShades).toStrictEqual({
            shade100: '100',
            shade200: '200',
            shade300: '300',
            shade400: '400',
            shade500: '500',
            shade600: '600',
            shade700: '700',
            shade800: '800',
        });
    });

    it('should render with default props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnTitle>
                <h3>Title Element</h3>
                <h6>Caption</h6>
            </DnTitle>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with custom props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnTitle isWide color={DnTitleColors.yellow} shade={DnTitleShades.shade500} className="p-18">
                <h3>Title Element</h3>
                <h6>Caption</h6>
            </DnTitle>,
        );

        expect(rendered).toMatchSnapshot();
    });
});

/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { mount, render } from 'enzyme';
import { DnChip, DnChipSizes, DnChipColors, DnChipShades } from '../../index'; // src/index.tsx

describe('DnChip Tests', () => {
    it('should export DnChipSizes', () => {
        expect.assertions(1);

        expect(DnChipSizes).toStrictEqual({
            default: 'default',
            large: 'large',
            medium: 'medium',
            small: 'small',
        });
    });

    it('should export DnChipColors', () => {
        expect.assertions(1);

        expect(DnChipColors).toStrictEqual({
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

    it('should export DnChipShades', () => {
        expect.assertions(1);

        expect(DnChipShades).toStrictEqual({
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

        const rendered = render(<DnChip>Online</DnChip>);

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with custom props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnChip
                size={DnChipSizes.large}
                bgColor={DnChipColors.red}
                bgShade={DnChipShades.shade800}
                color={DnChipColors.yellow}
                shade={DnChipShades.shade600}
                className="p-18"
            >
                Offline
            </DnChip>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should call on click correctly', () => {
        expect.assertions(1);

        const mockedOnClick = jest.fn();
        const wrapper = mount(<DnChip onClick={mockedOnClick}>Info</DnChip>);
        wrapper.find('span.chips').simulate('click');

        expect(mockedOnClick).toHaveBeenCalledTimes(1);
    });
});

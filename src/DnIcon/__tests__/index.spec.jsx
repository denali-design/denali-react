/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { render } from 'enzyme';
import { DnIcon, DnIconSizes, DnIconColors, DnIconShades } from '../../index'; // src/index.tsx

describe('DnIcon Tests', () => {
    it('should export DnIconSizes', () => {
        expect.assertions(1);

        expect(DnIconSizes).toStrictEqual({
            default: 'default',
            large: 'large',
            medium: 'medium',
            small: 'small',
            extrasmall: 'extrasmall',
        });
    });

    it('should export DnIconColors', () => {
        expect.assertions(1);

        expect(DnIconColors).toStrictEqual({
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

    it('should export DnIconShades', () => {
        expect.assertions(1);

        expect(DnIconShades).toStrictEqual({
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

        const rendered = render(<DnIcon icon="denali" />);

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with custom props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnIcon
                icon="denali"
                size={DnIconSizes.large}
                color={DnIconColors.yellow}
                shade={DnIconShades.shade600}
                className="p-18"
            />,
        );

        expect(rendered).toMatchSnapshot();
    });
});

/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import { DnColors, DnShades, getColorClassName, getBgColorClassName } from '../../index'; // src/index.tsx

describe('DnColors Tests', () => {
    it('should export DnColors', () => {
        expect.assertions(1);

        expect(DnColors).toStrictEqual({
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

    it('should export DnShades', () => {
        expect.assertions(1);

        expect(DnShades).toStrictEqual({
            shade100: '100',
            shade200: '200',
            shade300: '300',
            shade400: '400',
            shade500: '500',
            shade600: '600',
            shade700: '700',
            shade800: '800',
            shade900: '900',
            shader100: 'r100',
            shader200: 'r200',
            shader300: 'r300',
            shader400: 'r400',
            shader500: 'r500',
        });
    });

    it('should return is-brand-500 when calling getColorClassName', () => {
        expect.assertions(1);

        expect(getColorClassName({ color: DnColors.brand, shade: DnShades.shade500 })).toBe('is-brand-500');
    });

    it('should return has-bg-brand-500 when calling getBgColorClassName', () => {
        expect.assertions(1);

        expect(getBgColorClassName({ color: DnColors.brand, shade: DnShades.shade500 })).toBe('has-bg-brand-500');
    });
});

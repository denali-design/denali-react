/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import { getFontWeightClassName, getFontFamilyClassName, DnFontFamily, DnFontWeight } from '../../index'; // src/index.tsx

describe('DnFonts Tests', () => {
    it('should export DnFontFamily', () => {
        expect.assertions(1);

        expect(DnFontFamily).toStrictEqual({
            default: 'default',
            mono: 'mono',
        });
    });

    it('should export DnFontWeight', () => {
        expect.assertions(1);

        expect(DnFontWeight).toStrictEqual({
            default: 'default',
            light: 'light',
            bold: 'bold',
            italic: 'italic',
        });
    });

    it('should return empty string when calling getFontFamilyClassName with default', () => {
        expect.assertions(1);

        expect(getFontFamilyClassName({ fontFamily: DnFontFamily.default })).toBe('');
    });

    it('should return is-mono when calling getFontFamilyClassName with DnFontFamily.mono', () => {
        expect.assertions(1);

        expect(getFontFamilyClassName({ fontFamily: DnFontFamily.mono })).toBe('is-mono');
    });

    it('should return empty string when calling getFontWeightClassName with default', () => {
        expect.assertions(1);

        expect(getFontWeightClassName({ fontWeight: DnFontWeight.default })).toBe('');
    });

    it('should return is-light when calling getFontWeightClassName with DnFontWeight.light', () => {
        expect.assertions(1);

        expect(getFontWeightClassName({ fontWeight: DnFontWeight.light })).toBe('is-light');
    });
});

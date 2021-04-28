/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { render } from 'enzyme';
import { DnToggle } from '../../index'; // src/index.tsx

describe('DnToggle Tests', () => {
    it('should render with default props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnToggle>
                <DnToggle.Item isActive>Toggle1</DnToggle.Item>
                <DnToggle.Item>Toggle2</DnToggle.Item>
            </DnToggle>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render with no class names', () => {
        expect.assertions(1);

        const rendered = render(
            <DnToggle>
                <DnToggle.Item>Toggle1</DnToggle.Item>
                <DnToggle.Item>Toggle2</DnToggle.Item>
            </DnToggle>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render with custom props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnToggle isSmall isInverse className="additional--class">
                <DnToggle.Item isActive>Toggle1</DnToggle.Item>
                <DnToggle.Item isActive={false} isDisabled>
                    Toggle2
                </DnToggle.Item>
                <DnToggle.Item isActive={false}>Toggle3</DnToggle.Item>
            </DnToggle>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with radio item', () => {
        expect.assertions(1);

        const rendered = render(
            <DnToggle isSmall isInverse isRadioToggle>
                <DnToggle.RadioItem
                    id="Radio1"
                    name="sample"
                    radioValue="Radio1"
                    defaultChecked
                    isDisabled={false}
                    radioLabel="Radio 1"
                />
                <DnToggle.RadioItem
                    id="Radio2"
                    name="sample"
                    radioValue="Radio2"
                    defaultChecked={false}
                    isDisabled={false}
                    radioLabel="Radio 2"
                />
                <DnToggle.RadioItem
                    id="Radio3"
                    name="sample"
                    radioValue="Radio3"
                    defaultChecked={false}
                    isDisabled={false}
                    radioLabel="Radio 3"
                />
            </DnToggle>,
        );

        expect(rendered).toMatchSnapshot();
    });
});

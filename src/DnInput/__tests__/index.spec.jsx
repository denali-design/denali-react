/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { render } from 'enzyme';
import {
    DnInput,
    DnInputSizes,
    DnInputTypes,
    DnInputGroup,
    DnButton,
    DnButtonStyles,
    DnIcon,
    DnIconColors,
    DnIconSizes,
    DnIconShades,
} from '../../index';

describe('DnInput Tests', () => {
    it('should export DnInputsSizes', () => {
        expect.assertions(1);

        expect(DnInputSizes).toStrictEqual({
            default: 'default',
            medium: 'medium',
            small: 'small',
        });
    });

    it('should export DnInputTypes', () => {
        expect.assertions(1);

        expect(DnInputTypes).toStrictEqual({
            text: 'text',
            email: 'email',
            number: 'number',
            password: 'password',
        });
    });

    it('should render with default props', () => {
        expect.assertions(1);

        const rendered = render(<DnInput />);

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with custom props', () => {
        expect.assertions(1);

        const rendered = render(
            <div className="Foo">
                <DnInput
                    id="someId"
                    size={DnInputSizes.default}
                    type={DnInputTypes.text}
                    isActive
                    isDisabled
                    isError
                    isInverse
                    errorMessage="Error"
                    placeholderText="Just an input field"
                />
            </div>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with Icon at front', () => {
        expect.assertions(1);

        const rendered = render(
            <DnInput
                frontIconComponent={
                    <DnIcon icon="filter-horizontal" color={DnIconColors.brand} shade={DnIconShades.shade300} />
                }
            />,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with Icon at front with error and placeholder', () => {
        expect.assertions(1);

        const rendered = render(
            <DnInput
                isError
                errorMessage="Error"
                placeholderText="Just an input field"
                frontIconComponent={
                    <DnIcon icon="filter-horizontal" color={DnIconColors.brand} shade={DnIconShades.shade300} />
                }
            />,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with Icon at back', () => {
        expect.assertions(1);

        const rendered = render(
            <DnInput backIconComponent={<DnIcon icon="close-circle-solid" color={DnIconColors.grey} />} />,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with Icon at back with error and placeholder', () => {
        expect.assertions(1);

        const rendered = render(
            <DnInput
                isError
                errorMessage="Error"
                placeholderText="Just an input field"
                backIconComponent={<DnIcon icon="close-circle-solid" color={DnIconColors.grey} />}
            />,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with button on field', () => {
        expect.assertions(1);

        const rendered = render(
            <DnInputGroup hasButton>
                <DnInput />
                <DnButton style={DnButtonStyles.solid} className="has-icon">
                    <DnIcon size={DnIconSizes.small} icon="add" />
                </DnButton>
            </DnInputGroup>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with button on field with error and placeholder', () => {
        expect.assertions(1);

        const rendered = render(
            <DnInputGroup hasButton>
                <DnInput isError errorMessage="Error" placeholderText="Just an input field" />
                <DnButton style={DnButtonStyles.solid} className="has-icon">
                    <DnIcon size={DnIconSizes.small} icon="add" />
                </DnButton>
            </DnInputGroup>,
        );

        expect(rendered).toMatchSnapshot();
    });
});

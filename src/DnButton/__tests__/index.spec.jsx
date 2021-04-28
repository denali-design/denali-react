/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { mount, render } from 'enzyme';
import { DnButton, DnButtonStyles, DnButtonSizes, DnButtonTypes } from '../../index'; // src/index.tsx

describe('DnButton Tests', () => {
    it('should export DnButtonStyles', () => {
        expect.assertions(1);

        expect(DnButtonStyles).toStrictEqual({
            ghost: 'ghost',
            outline: 'outline',
            solid: 'solid',
            text: 'text',
        });
    });

    it('should export DnButtonSizes', () => {
        expect.assertions(1);

        expect(DnButtonSizes).toStrictEqual({
            default: 'default',
            large: 'large',
            medium: 'medium',
            small: 'small',
        });
    });

    it('should export DnButtonTypes', () => {
        expect.assertions(1);

        expect(DnButtonTypes).toStrictEqual({
            button: 'button',
            reset: 'reset',
            submit: 'submit',
        });
    });

    it('should render with default props', () => {
        expect.assertions(1);

        const rendered = render(<DnButton>Continue</DnButton>);

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with custom props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnButton
                isActive
                style={DnButtonStyles.ghost}
                size={DnButtonSizes.large}
                isInverse
                isDisabled
                isFull
                type={DnButtonTypes.submit}
                className="p-18"
            >
                Submit From
            </DnButton>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with custom props with is loading', () => {
        expect.assertions(1);

        const rendered = render(
            <DnButton
                isActive
                style={DnButtonStyles.ghost}
                size={DnButtonSizes.large}
                isInverse
                isDisabled
                isFull
                type={DnButtonTypes.submit}
                isLoading
                className="p-18"
            >
                Submit From
            </DnButton>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should call on click correctly', () => {
        expect.assertions(1);

        const mockedOnClick = jest.fn();
        const wrapper = mount(<DnButton onClick={mockedOnClick}>Button</DnButton>);
        wrapper.find('button').simulate('click');

        expect(mockedOnClick).toHaveBeenCalledTimes(1);
    });

    it('should call on focus correctly', () => {
        expect.assertions(1);

        const mockedOnFocus = jest.fn();
        const wrapper = mount(<DnButton onFocus={mockedOnFocus}>Button</DnButton>);
        wrapper.find('button').simulate('focus');

        expect(mockedOnFocus).toHaveBeenCalledTimes(1);
    });

    it('should call on keydown correctly', () => {
        expect.assertions(1);

        const mockedOnKeydown = jest.fn();
        const wrapper = mount(<DnButton onKeyDown={mockedOnKeydown}>Button</DnButton>);
        wrapper.find('button').simulate('keydown');

        expect(mockedOnKeydown).toHaveBeenCalledTimes(1);
    });
});

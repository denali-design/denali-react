/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React, { Fragment } from 'react';
import { mount, render } from 'enzyme';
import { DnSelect, DnSelectSizes } from '../../index'; // src/index.tsx

describe('DnSelect Tests', () => {
    const selectOptions = (
        <Fragment>
            <option value="" disabled>
                -- select one --
            </option>
            <option value="v1">value 1</option>
            <option value="v2">value 2</option>
            <option value="v3">value 3</option>
        </Fragment>
    );

    it('should export DnSelectSizes', () => {
        expect.assertions(1);

        expect(DnSelectSizes).toStrictEqual({
            default: 'default',
            large: 'large',
            medium: 'medium',
            small: 'small',
        });
    });

    it('should render with default props', () => {
        expect.assertions(1);

        const rendered = render(<DnSelect>{selectOptions}</DnSelect>);

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with custom props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnSelect size={DnSelectSizes.small} isInverse isDisabled isFull className="p-18">
                {selectOptions}
            </DnSelect>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should call on click correctly', () => {
        expect.assertions(1);

        const mockedOnClick = jest.fn();
        const wrapper = mount(<DnSelect onClick={mockedOnClick}>{selectOptions}</DnSelect>);
        wrapper.find('select').simulate('click');

        expect(mockedOnClick).toHaveBeenCalledTimes(1);
    });

    it('should call on change correctly', () => {
        expect.assertions(1);

        const mockedOnChange = jest.fn();
        const wrapper = mount(<DnSelect onChange={mockedOnChange}>{selectOptions}</DnSelect>);
        wrapper.find('select').simulate('change', { value: 'v2' });

        expect(mockedOnChange).toHaveBeenCalledTimes(1);
    });

    it('should call on focus correctly', () => {
        expect.assertions(1);

        const mockedOnFocus = jest.fn();
        const wrapper = mount(<DnSelect onFocus={mockedOnFocus}>{selectOptions}</DnSelect>);
        wrapper.find('select').simulate('focus');

        expect(mockedOnFocus).toHaveBeenCalledTimes(1);
    });
});

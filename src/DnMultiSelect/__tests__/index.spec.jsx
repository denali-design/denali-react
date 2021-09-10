/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { mount, render } from 'enzyme';
import { DnMultiSelect } from '../../index'; // src/index.tsx

describe('DnMultiSelect Tests', () => {
    it('should render with default props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnMultiSelect
                dataList={[
                    { value: 'chocolate', label: 'Chocolate' },
                    { value: 'strawberry', label: 'Strawberry' },
                    { value: 'vanilla', label: 'Vanilla' },
                ]}
            />,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with custom props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnMultiSelect
                dataList={[
                    { value: 'bread', label: 'Bread' },
                    { value: 'meat', label: 'Meat' },
                    { value: 'oil', label: 'Oil' },
                    { value: 'icecream', label: 'Ice Cream' },
                    { value: 'cheese', label: 'Cheese' },
                    { value: 'eggs', label: 'Eggs' },
                ]}
                closeMenuOnSelect
                isClearable
                isSearchable
            />,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render with empty dataList array', () => {
        expect.assertions(1);

        const rendered = render(<DnMultiSelect dataList={[]} />);

        expect(rendered).toMatchSnapshot();
    });

    it('should call on change correctly', () => {
        expect.assertions(14);

        const mockedOnChange = jest.fn();
        const wrapper = mount(
            <DnMultiSelect
                dataList={[
                    { value: 'chocolate', label: 'Chocolate' },
                    { value: 'strawberry', label: 'Strawberry' },
                    { value: 'vanilla', label: 'Vanilla' },
                ]}
                onChange={mockedOnChange}
            />,
        );

        expect(wrapper.render()).toMatchSnapshot('Before Menu open');

        wrapper.find('div.denali-multiselect__dropdown-indicator').simulate('mouseDown', {
            button: 0,
        });

        expect(wrapper.render()).toMatchSnapshot('After Menu open');

        expect(wrapper.find('div.denali-multiselect__multi-value')).toHaveLength(1);

        wrapper.find('div.denali-multiselect__option').at(0).simulate('click');

        expect(wrapper.find('div.denali-multiselect__multi-value')).toHaveLength(2);

        expect(wrapper.render()).toMatchSnapshot('Selected Strawberry item');

        expect(mockedOnChange).toHaveBeenCalledTimes(1);

        wrapper.find('div.denali-multiselect__option').at(0).simulate('click');

        expect(wrapper.find('div.denali-multiselect__multi-value')).toHaveLength(3);

        expect(wrapper.render()).toMatchSnapshot('Selecting Vanilla item');

        expect(mockedOnChange).toHaveBeenCalledTimes(2);

        expect(wrapper.render()).toMatchSnapshot('Menu when no options left to select');

        expect(wrapper.exists('div.denali-multiselect__menu-notice')).toStrictEqual(true);

        wrapper.find('div.denali-multiselect__multi-value__remove').at(0).simulate('click');

        expect(wrapper.render()).toMatchSnapshot('removing chocolate item');
        expect(wrapper.find('div.denali-multiselect__multi-value')).toHaveLength(2);

        expect(mockedOnChange).toHaveBeenNthCalledWith(
            3,
            [
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' },
            ],
            {
                action: 'remove-value',
                removedValue: { value: 'chocolate', label: 'Chocolate' },
                name: undefined,
            },
        );
    });
});

/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { render, mount } from 'enzyme';
import { DnRadio } from '../../index'; // src/index.tsx

describe('DnCheckbox Tests', () => {
    it('should render with default props', () => {
        expect.assertions(2);

        const wrapper = mount(<DnRadio id="Radio" />);

        expect(wrapper.render()).toMatchSnapshot('before change');

        wrapper.find('input[type="radio"]').simulate('change');

        expect(wrapper.render()).toMatchSnapshot('after change');
    });

    it('should render correctly with custom props', () => {
        expect.assertions(1);

        const rendered = render(
            <>
                <DnRadio
                    id="Radio1"
                    name="sample"
                    radioValue="Radio1"
                    defaultChecked
                    isDisabled
                    className="additional--class"
                    radioLabel="Radio 1"
                />
                <DnRadio id="Radio2" name="sample" radioValue="Radio2" defaultChecked isDisabled radioLabel="Radio 2" />
                <DnRadio id="Radio3" name="sample" radioValue="Radio3" defaultChecked isDisabled radioLabel="Radio 3" />
            </>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should call on change correctly', () => {
        expect.assertions(1);

        const mockedOnChange = jest.fn();
        const wrapper = mount(<DnRadio onChange={mockedOnChange} />);
        wrapper.find('input[type="radio"]').simulate('change');

        expect(mockedOnChange).toHaveBeenCalledTimes(1);
    });
});

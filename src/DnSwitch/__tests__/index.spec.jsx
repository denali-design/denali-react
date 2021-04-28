/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { render, mount } from 'enzyme';
import { DnSwitch } from '../../index'; // src/index.tsx

describe('DnSwitch Tests', () => {
    it('should render with default props', () => {
        expect.assertions(2);

        const wrapper = mount(<DnSwitch />);

        expect(wrapper.render()).toMatchSnapshot('before change');

        wrapper.find('input[type="checkbox"]').simulate('change');

        expect(wrapper.render()).toMatchSnapshot('after change');
    });

    it('should render correctly with custom props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnSwitch
                id="switch1"
                name="canView"
                offLabel="Off"
                onLabel="On"
                checked
                isDisabled
                className="additional--class"
            />,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should call on change correctly', () => {
        expect.assertions(1);

        const mockedOnChange = jest.fn();
        const wrapper = mount(<DnSwitch onChange={mockedOnChange} />);
        wrapper.find('input[type="checkbox"]').simulate('change');

        expect(mockedOnChange).toHaveBeenCalledTimes(1);
    });
});

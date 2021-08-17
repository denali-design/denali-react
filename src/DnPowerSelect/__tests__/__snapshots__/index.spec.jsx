/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { render } from 'enzyme';
import { DnPowerSelect } from '../../index'; // src/index.tsx

describe('DnPowerSelect Tests', () => {
    it('should render with default props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnPowerSelect
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
            <DnPowerSelect
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

        const rendered = render(<DnPowerSelect dataList={[]} />);

        expect(rendered).toMatchSnapshot();
    });
});

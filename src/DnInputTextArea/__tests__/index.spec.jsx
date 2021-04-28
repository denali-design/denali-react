/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { render } from 'enzyme';
import { DnInputTextArea } from '../../index';

describe('DnInputTextArea Tests', () => {
    it('should render with default props', () => {
        expect.assertions(1);

        const rendered = render(<DnInputTextArea />);

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with custom props', () => {
        expect.assertions(1);

        const rendered = render(
            <div className="Foo">
                <DnInputTextArea
                    id="someId"
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
});

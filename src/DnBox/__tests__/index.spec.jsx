/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { render } from 'enzyme';
import { DnBox } from '../../index'; // src/index.tsx

describe('DnBox Tests', () => {
    it('should render with default props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnBox>
                <h1>Title</h1>
            </DnBox>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with custom props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnBox className="p-18" style={{ width: '320px' }}>
                <h1>Title</h1>
            </DnBox>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with footer', () => {
        expect.assertions(1);

        const rendered = render(
            <DnBox className="p-18">
                <p>This is the body</p>
                <footer>This is a footer</footer>
            </DnBox>,
        );

        expect(rendered).toMatchSnapshot();
    });
});

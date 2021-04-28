/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { render } from 'enzyme';
import { DnInputGroup, DnInput } from '../../index'; // src/index.tsx

describe('DnInputGroup Tests', () => {
    it('should render with default props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnInputGroup>
                <DnInput />
            </DnInputGroup>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with custom props', () => {
        expect.assertions(1);

        const id = 'someId';
        const rendered = render(
            <div className="Foo">
                <DnInputGroup isStacked isResponsive isAuto labelText="Label" labelId={id}>
                    <DnInput id={id} />
                </DnInputGroup>
            </div>,
        );

        expect(rendered).toMatchSnapshot();
    });
});

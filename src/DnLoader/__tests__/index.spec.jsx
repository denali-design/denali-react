/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { render } from 'enzyme';
import { DnLoader } from '../../index'; // src/index.tsx

describe('DnLoader Tests', () => {
    it('should render with default props', () => {
        expect.assertions(1);

        const rendered = render(<DnLoader />);

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with custom props', () => {
        expect.assertions(1);

        const rendered = render(<DnLoader isInverse className="p-18" />);

        expect(rendered).toMatchSnapshot();
    });
});

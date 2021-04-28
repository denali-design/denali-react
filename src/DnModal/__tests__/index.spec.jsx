/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { render } from 'enzyme';
import { DnModal, DnButton, DnIcon } from '../../index'; // src/index.tsx

describe('DnModal Tests', () => {
    it('should render with default props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnModal>
                <p>Dummy Component</p>
            </DnModal>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with custom props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnModal
                id="modal1"
                isFull
                modalContainerClassName="w-600px"
                closeContent={
                    <DnButton>
                        <DnIcon icon="close" />
                    </DnButton>
                }
                headerContent={<span>Dummy Header</span>}
                footerContent={<span>Dummy Footer</span>}
            >
                <p>Dummy Component</p>
            </DnModal>,
        );

        expect(rendered).toMatchSnapshot();
    });
});

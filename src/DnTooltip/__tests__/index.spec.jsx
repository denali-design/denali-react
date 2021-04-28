/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { render } from 'enzyme';
import { DnTooltip, DnTooltipPositions, DnLink, DnIcon } from '../../index'; // src/index.tsx

describe('DnTooltip Tests', () => {
    it('should export DnTooltipPositions', () => {
        expect.assertions(1);

        expect(DnTooltipPositions).toStrictEqual({
            default: 'default',
            top: 'top',
            right: 'right',
            left: 'left',
        });
    });

    it('should render with default props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnTooltip tooltipText="the tooltip text">
                <DnLink>Tooltip</DnLink>
            </DnTooltip>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with custom props', () => {
        expect.assertions(1);

        const rendered = render(
            <div className="">
                <div className="flex justify-content-center m-t-40">
                    <DnTooltip
                        className="additional--class"
                        position={DnTooltipPositions.right}
                        isSmall
                        tooltipText="the tooltip text"
                    >
                        <DnIcon icon="user-profile-circle" />
                    </DnTooltip>
                </div>
            </div>,
        );

        expect(rendered).toMatchSnapshot();
    });
});

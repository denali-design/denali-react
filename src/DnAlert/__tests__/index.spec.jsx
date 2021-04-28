/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { render } from 'enzyme';
import { DnAlert, DnAlertStatus } from '../../index'; // src/index.tsx

describe('DnAlert Tests', () => {
    it('should export DnAlertStatus', () => {
        expect.assertions(1);

        expect(DnAlertStatus).toStrictEqual({
            default: 'default',
            info: 'info',
            warning: 'warning',
            success: 'success',
            danger: 'danger',
        });
    });

    it('should render with default props', () => {
        expect.assertions(1);

        const rendered = render(<DnAlert icon="domain" title="This is a title" />);

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with custom props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnAlert
                icon="stop-urgent"
                title="This is the title"
                context="The message provides users with context of the alert."
                status={DnAlertStatus.danger}
                isBlock
                className="test--class"
            />,
        );

        expect(rendered).toMatchSnapshot();
    });
});

/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { mount, render } from 'enzyme';
import { DnProgress, DnProgressSizes, DnProgressBgStatus } from '../../index'; // src/index.tsx

describe('DnProgress Tests', () => {
    it('should export DnProgressSizes', () => {
        expect.assertions(1);

        expect(DnProgressSizes).toStrictEqual({
            default: '',
            small: 'sm',
            medium: 'md',
            large: 'lg',
        });
    });

    it('should export DnProgressBgStatus', () => {
        expect.assertions(1);

        expect(DnProgressBgStatus).toStrictEqual({
            default: '',
            danger: 'danger',
            warning: 'warning',
            success: 'success',
        });
    });

    it('should render with default props', () => {
        expect.assertions(1);

        const rendered = render(<DnProgress dataList={[{ key: 'key1', value: 50 }]} />);

        expect(rendered).toMatchSnapshot();
    });

    it('should render with isLoading props', () => {
        expect.assertions(1);

        const rendered = render(<DnProgress dataList={[{ key: 'key1', value: 0 }]} isLoading />);

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with custom props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnProgress
                dataList={[{ key: 'key1', value: 25, bgStatus: DnProgressBgStatus.danger, className: 'foo-1' }]}
                size={DnProgressSizes.large}
                className="p-18"
            />,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render multi bar correctly with custom props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnProgress
                dataList={[
                    { key: 'key1', value: 15, bgStatus: DnProgressBgStatus.danger, className: 'foo-1' },
                    { key: 'key2', value: 30, bgStatus: DnProgressBgStatus.warning, className: 'foo-2' },
                    { key: 'key3', value: 20, bgStatus: DnProgressBgStatus.success, className: 'foo-3' },
                ]}
                size={DnProgressSizes.large}
                className="p-18"
            />,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should call on click correctly', () => {
        expect.assertions(1);

        const mockedOnClick = jest.fn();
        const wrapper = mount(<DnProgress dataList={[{ key: 'key1', value: 25 }]} onClick={mockedOnClick} />);
        wrapper.find('div.d-progress').simulate('click');

        expect(mockedOnClick).toHaveBeenCalledTimes(1);
    });
});

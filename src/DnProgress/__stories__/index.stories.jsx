/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, text, select, object, boolean } from '@storybook/addon-knobs';
import { getThemeClassName, propsGroupId, storyLog } from '../../../.storybook/storybook-utils';
import { DnProgress, DnProgressSizes, DnProgressBgStatus } from '../../index'; // src/index.tsx

const getDataList = (value) => object('dataList', value, propsGroupId);

const getIsLoading = (value) => boolean('isLoading', value, propsGroupId);

const getSize = (value) => select('size', DnProgressSizes, value, propsGroupId);

const getClassName = (value) => text('className', value, propsGroupId);

const getOnClick = () => storyLog('clicked');

export default {
    title: 'Components/DnProgress',
    decorators: [withKnobs],
};

export const Default = () => {
    return (
        <DnProgress
            dataList={getDataList([
                {
                    key: 'key1',
                    value: 25,
                },
            ])}
        />
    );
};

export const playground = () => {
    return (
        <div className={getThemeClassName()}>
            <DnProgress
                dataList={getDataList([
                    {
                        key: 'key1',
                        value: 50,
                        bgStatus: DnProgressBgStatus.danger,
                        className: 'any-item-class-name',
                    },
                ])}
                isLoading={getIsLoading(false)}
                size={getSize(DnProgressSizes.large)}
                onClick={getOnClick()}
                className={getClassName('any-class-name')}
            />
        </div>
    );
};

export const MultiBar = () => {
    return (
        <div className={getThemeClassName()}>
            <DnProgress
                dataList={getDataList([
                    {
                        key: 'key1',
                        value: 15,
                        bgStatus: DnProgressBgStatus.danger,
                        className: 'any-item-class-name',
                    },
                    {
                        key: 'key2',
                        value: 30,
                        bgStatus: DnProgressBgStatus.warning,
                        className: 'any-item-class-name',
                    },
                    {
                        key: 'key3',
                        value: 20,
                        bgStatus: DnProgressBgStatus.success,
                        className: 'any-item-class-name',
                    },
                ])}
                isLoading={getIsLoading(false)}
                size={getSize(DnProgressSizes.large)}
                onClick={getOnClick()}
                className={getClassName('any-class-name')}
            />
        </div>
    );
};

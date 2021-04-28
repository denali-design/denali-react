/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { getThemeClassName, propsGroupId } from '../../../.storybook/storybook-utils';
import { DnLink, DnIcon } from '../../index'; // src/index.tsx

const getChildren = (value = 'Some Text') => text('children', value, propsGroupId);

const getIsActive = () => boolean('isActive', false, propsGroupId);

const getIsDisabled = () => boolean('isDisabled', false, propsGroupId);

const getIsSmall = () => boolean('isSmall', false, propsGroupId);

const getIsSecondary = () => boolean('isSecondary', false, propsGroupId);

const getIsSub = () => boolean('isSub', false, propsGroupId);

export default {
    title: 'Components/DnLink',
    decorators: [withKnobs],
};

export const Default = () => {
    return (
        <a href="#home">
            <DnLink>{getChildren('Home')}</DnLink>
        </a>
    );
};

export const playground = () => {
    return (
        <div className={getThemeClassName()}>
            <a href="#home">
                <DnLink
                    isActive={getIsActive()}
                    isDisabled={getIsDisabled()}
                    isSmall={getIsSmall()}
                    isSecondary={getIsSecondary()}
                    isSub={getIsSub()}
                >
                    {getChildren('Home')}
                </DnLink>
            </a>
        </div>
    );
};

export const linkWithIconAtFront = () => {
    return (
        <a href="#home">
            <DnLink
                isActive={getIsActive()}
                isDisabled={getIsDisabled()}
                isSmall={getIsSmall()}
                isSecondary={getIsSecondary()}
                isSub={getIsSub()}
                frontIconComponent={<DnIcon icon="add-circle" />}
            >
                {getChildren('Home')}
            </DnLink>
        </a>
    );
};

export const linkWithIconAtBack = () => {
    return (
        <a href="#home">
            <DnLink
                isActive={getIsActive()}
                isDisabled={getIsDisabled()}
                isSmall={getIsSmall()}
                isSecondary={getIsSecondary()}
                isSub={getIsSub()}
                backIconComponent={<DnIcon icon="external" className="is-sub" />}
            >
                {getChildren('Home')}
            </DnLink>
        </a>
    );
};

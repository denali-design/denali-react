/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { getThemeClassName, propsGroupId } from '../../../.storybook/storybook-utils';
import { DnInputTextArea } from '../../index';

const getIsActive = () => boolean('isActive', false, propsGroupId);

const getIsDisabled = () => boolean('isDisabled', false, propsGroupId);

const getIsError = () => boolean('isError', false, propsGroupId);

const getIsInverse = () => boolean('isInverse', false, propsGroupId);

const getErrorMessage = (value) => text('errorMessage', value, propsGroupId);

const getPlaceholderText = (value) => text('placeholderText', value, propsGroupId);

const getId = (value) => text('id', value, propsGroupId);

export default {
    title: 'Components/DnInputTextArea',
    decorators: [withKnobs],
};

export const Default = () => {
    return <DnInputTextArea />;
};

export const playground = () => {
    return (
        <div className={getThemeClassName()}>
            <DnInputTextArea
                id={getId('textareaID')}
                isActive={getIsActive()}
                isDisabled={getIsDisabled()}
                isError={getIsError()}
                isInverse={getIsInverse()}
                placeholderText={getPlaceholderText('Just a text area field')}
                errorMessage={getErrorMessage('Error')}
            />
        </div>
    );
};

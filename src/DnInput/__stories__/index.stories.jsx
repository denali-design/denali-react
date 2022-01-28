/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { getThemeClassName, propsGroupId } from '../../../.storybook/storybook-utils';
import {
    DnInput,
    DnInputSizes,
    DnInputTypes,
    DnInputGroup,
    DnButton,
    DnButtonStyles,
    DnIcon,
    DnIconColors,
    DnIconShades,
    DnIconSizes,
} from '../../index';

const getIsActive = () => boolean('isActive', false, propsGroupId);

const getSize = () => select('size', DnInputSizes, DnInputSizes.default, propsGroupId);

const getIsDisabled = () => boolean('isDisabled', false, propsGroupId);

const getIsError = () => boolean('isError', false, propsGroupId);

const getType = () => select('type', DnInputTypes, DnInputTypes.text, propsGroupId);

const getIsInverse = () => boolean('isInverse', false, propsGroupId);

const getErrorMessage = (value) => text('errorMessage', value, propsGroupId);

const getPlaceholderText = (value) => text('placeholderText', value, propsGroupId);

const getId = (value) => text('id', value, propsGroupId);

const getName = (value) => text('name', value, propsGroupId);

export default {
    title: 'Components/DnInput',
    decorators: [withKnobs],
};

export const Default = () => {
    return <DnInput />;
};

export const playground = () => {
    return (
        <div className={getThemeClassName()}>
            <DnInput
                id={getId('someId')}
                name={getName('someName')}
                size={getSize()}
                type={getType()}
                isActive={getIsActive()}
                isDisabled={getIsDisabled()}
                isError={getIsError()}
                isInverse={getIsInverse()}
                errorMessage={getErrorMessage('Error')}
                placeholderText={getPlaceholderText('Just an input field')}
            />
        </div>
    );
};

export const fieldWithIconAtFront = () => {
    return (
        <DnInput
            id={getId('someId')}
            name={getName('someName')}
            size={getSize()}
            type={getType()}
            isActive={getIsActive()}
            isDisabled={getIsDisabled()}
            isInverse={getIsInverse()}
            isError={getIsError()}
            errorMessage={getErrorMessage('Error')}
            placeholderText={getPlaceholderText('Just an input field')}
            frontIconComponent={
                <DnIcon icon="filter-horizontal" color={DnIconColors.brand} shade={DnIconShades.shade300} />
            }
        />
    );
};

export const fieldWithIconAtBack = () => {
    return (
        <DnInput
            id={getId('someId')}
            name={getName('someName')}
            size={getSize()}
            type={getType()}
            isActive={getIsActive()}
            isDisabled={getIsDisabled()}
            isError={getIsError()}
            isInverse={getIsInverse()}
            errorMessage={getErrorMessage('Error')}
            placeholderText={getPlaceholderText('Just an input field')}
            backIconComponent={<DnIcon icon="close-circle-solid" color={DnIconColors.grey} />}
        />
    );
};

export const fieldWithButton = () => {
    return (
        <DnInputGroup hasButton>
            <DnInput
                id={getId('someId')}
                name={getName('someName')}
                size={getSize()}
                type={getType()}
                isActive={getIsActive()}
                isDisabled={getIsDisabled()}
                isError={getIsError()}
                isInverse={getIsInverse()}
                errorMessage={getErrorMessage('Error')}
                placeholderText={getPlaceholderText('just an input field')}
            />
            <DnButton style={DnButtonStyles.solid} className="has-icon">
                <DnIcon size={DnIconSizes.small} icon="add" />
            </DnButton>
        </DnInputGroup>
    );
};

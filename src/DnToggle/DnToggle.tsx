/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import classnames from 'classnames';
import { DnRadio } from '../DnRadio';

export const DnToggle = ({
    isSmall,
    isInverse,
    children,
    className,
    isRadioToggle,
    ...rest
}: DnToggleProps): JSX.Element => {
    return (
        <div
            className={classnames(
                'toggle',
                {
                    'is-small': isSmall,
                    'is-inverse': isInverse,
                },
                className,
            )}
            {...rest}
        >
            {!isRadioToggle && <ul>{children}</ul>}
            {isRadioToggle && children}
        </div>
    );
};

export interface DnToggleProps {
    className?: string;
    children?: React.ReactNode;
    isRadioToggle?: boolean;
    isSmall?: boolean;
    isInverse?: boolean;
}

const DnToggleItem = ({ children, isActive, isDisabled, className, ...rest }: DnToggleItemProps): JSX.Element => {
    return (
        <li
            className={classnames(`${isActive ? 'is-active' : ''}`, `${isDisabled ? 'is-disabled' : ''}`, className)}
            {...rest}
        >
            {children}
        </li>
    );
};
DnToggle.Item = DnToggleItem;

export interface DnToggleItemProps {
    isActive?: boolean;
    isDisabled?: boolean;
    children: React.ReactNode;
    className?: string;
}

DnToggleItem.defaultProps = {
    isActive: false,
    isDisabled: false,
    children: null,
    className: undefined,
};

const DnToggleRadioItem = ({
    children,
    id,
    name,
    radioLabel,
    defaultChecked,
    radioValue,
    isDisabled,
    className,
    onChange,
    ...rest
}: DnToggleRadioItemProps): JSX.Element => {
    return (
        <DnRadio
            isToggle
            id={id}
            name={name}
            radioValue={radioValue}
            defaultChecked={defaultChecked}
            isDisabled={isDisabled}
            className={className}
            onChange={onChange}
            radioLabel={radioLabel}
            {...rest}
        >
            {children}
        </DnRadio>
    );
};

DnToggle.RadioItem = DnToggleRadioItem;

export interface DnToggleRadioItemProps {
    children: React.ReactNode;
    id: string;
    name?: string;
    radioLabel?: string;
    defaultChecked?: boolean;
    radioValue?: string;
    isDisabled?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    className?: string;
}

DnToggleRadioItem.defaultProps = {
    children: null,
    id: undefined,
    name: undefined,
    radioLabel: undefined,
    defaultChecked: false,
    radioValue: undefined,
    isDisabled: false,
    onChange: undefined,
    className: undefined,
};

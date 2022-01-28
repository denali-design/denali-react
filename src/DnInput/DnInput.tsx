/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import classnames from 'classnames';

export const DnInput = ({
    className,
    size,
    isActive,
    isDisabled,
    isError,
    type,
    isInverse,
    errorMessage,
    placeholderText,
    frontIconComponent,
    backIconComponent,
    id,
    name,
    ...rest
}: DnInputProps): JSX.Element => {
    return (
        <div
            className={classnames(
                'input',
                {
                    'is-active': isActive,
                    [`is-${size}`]: size,
                    'is-inverse': isInverse,
                    'is-disabled': isDisabled,
                    'is-error': isError,
                    'has-icon-front': !!frontIconComponent,
                    'has-icon-back': !!backIconComponent,
                },
                className,
            )}
            {...rest}
        >
            {frontIconComponent}
            <input id={id} name={name} type={type} placeholder={placeholderText} disabled={isDisabled} />
            {backIconComponent}
            {isError && <p className="message">{errorMessage}</p>}
        </div>
    );
};

export enum DnInputSizes {
    small = 'small',
    medium = 'medium',
    default = 'default',
}

export enum DnInputTypes {
    text = 'text',
    email = 'email',
    number = 'number',
    password = 'password',
}

export interface DnInputProps {
    className?: string;
    size?: DnInputSizes;
    isActive?: boolean;
    isDisabled?: boolean;
    isError?: boolean;
    type?: DnInputTypes;
    isInverse?: boolean;
    errorMessage?: string;
    placeholderText?: string;
    frontIconComponent?: React.ReactNode;
    backIconComponent?: React.ReactNode;
    id?: string;
    name?: string;
}

DnInput.defaultProps = {
    size: DnInputSizes.default,
    isActive: false,
    isDisabled: false,
    isError: false,
    type: DnInputTypes.text,
    isInverse: false,
    errorMessage: undefined,
    placeholderText: undefined,
    frontIconComponent: null,
    backIconComponent: null,
    id: undefined,
    name: undefined,
};

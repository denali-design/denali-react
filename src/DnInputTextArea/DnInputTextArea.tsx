/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import classnames from 'classnames';

export const DnInputTextArea = ({
    className,
    isActive,
    isDisabled,
    isError,
    isInverse,
    errorMessage,
    placeholderText,
    id,
    ...rest
}: DnInputTextAreaProps): JSX.Element => {
    return (
        <div
            className={classnames(
                'input',
                {
                    'is-active': isActive,
                    'is-inverse': isInverse,
                    'is-disabled': isDisabled,
                    'is-error': isError,
                },
                className,
            )}
            {...rest}
        >
            <textarea id={id} placeholder={placeholderText} disabled={isDisabled} />
            {isError && <p className="message">{errorMessage}</p>}
        </div>
    );
};

export interface DnInputTextAreaProps {
    className?: string;
    isActive?: boolean;
    isDisabled?: boolean;
    isError?: boolean;
    isInverse?: boolean;
    errorMessage?: string;
    placeholderText?: string;
    id?: string;
}

DnInputTextArea.defaultProps = {
    isActive: false,
    isDisabled: false,
    isError: false,
    isInverse: false,
    errorMessage: undefined,
    placeholderText: undefined,
    id: undefined,
};

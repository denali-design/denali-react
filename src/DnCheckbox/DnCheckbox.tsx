/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

export const DnCheckbox: React.FC<DnCheckboxProps> = ({
    id,
    name,
    defaultChecked,
    checkboxLabel,
    checkboxValue,
    isPartial,
    isDisabled,
    className,
    onChange,
}: DnCheckboxProps) => {
    const [checkedState, setCheckedState] = useState(defaultChecked);

    const checkboxOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setCheckedState((value) => !value);

        if (onChange) {
            onChange(event);
        }
    };

    useEffect(() => {
        setCheckedState(defaultChecked);
    }, [defaultChecked, setCheckedState]);

    return (
        <div className={classnames('checkbox', className)}>
            <input
                id={id}
                name={name}
                type="checkbox"
                value={checkboxValue}
                checked={checkedState}
                disabled={isDisabled}
                {...(isPartial ? { 'data-partial': '' } : {})}
                onChange={checkboxOnChange}
            />
            <label htmlFor={id}>{checkboxLabel}</label>
        </div>
    );
};

export interface DnCheckboxProps {
    id: string;
    name?: string;
    defaultChecked?: boolean;
    checkboxLabel?: string;
    checkboxValue?: string;
    isPartial?: boolean;
    isDisabled?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    className?: string;
}

DnCheckbox.defaultProps = {
    id: undefined,
    name: undefined,
    defaultChecked: false,
    checkboxLabel: undefined,
    checkboxValue: undefined,
    isPartial: false,
    isDisabled: false,
    onChange: undefined,
    className: undefined,
};

/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

export const DnRadio: React.FC<DnRadioProps> = ({
    id,
    name,
    radioLabel,
    defaultChecked,
    radioValue,
    isDisabled,
    className,
    isToggle,
    onChange,
}: DnRadioProps) => {
    const [checkedState, setCheckedState] = useState(defaultChecked);

    const radioOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setCheckedState(true);

        if (onChange) {
            onChange(event);
        }
    };

    useEffect(() => {
        setCheckedState(defaultChecked);
    }, [defaultChecked, setCheckedState]);

    const radio = (
        <>
            <input
                id={id}
                name={name}
                type="radio"
                value={radioValue}
                checked={checkedState}
                disabled={isDisabled}
                onChange={radioOnChange}
            />
            <label htmlFor={id}>{radioLabel}</label>
        </>
    );

    if (isToggle) {
        return radio;
    }

    return <div className={classnames('radio', className)}>{radio}</div>;
};

export interface DnRadioProps {
    id: string;
    name?: string;
    radioLabel?: string;
    defaultChecked?: boolean;
    radioValue?: string;
    isDisabled?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    className?: string;
    isToggle?: boolean;
}

DnRadio.defaultProps = {
    id: undefined,
    name: undefined,
    radioLabel: undefined,
    defaultChecked: false,
    radioValue: undefined,
    isDisabled: false,
    onChange: undefined,
    className: undefined,
    isToggle: false,
};

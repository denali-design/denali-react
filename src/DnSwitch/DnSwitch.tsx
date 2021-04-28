/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React, { useState } from 'react';
import classnames from 'classnames';

export const DnSwitch: React.FC<DnSwitchProps> = ({
    id,
    name,
    offLabel,
    onLabel,
    checked,
    isDisabled,
    className,
    onChange,
}: DnSwitchProps) => {
    const [checkedState, setCheckedState] = useState(checked);

    const switchOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setCheckedState((value) => !value);

        if (onChange) {
            onChange(event);
        }
    };

    return (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label className={classnames('switch', className)}>
            <input
                id={id}
                name={name}
                type="checkbox"
                checked={checkedState}
                disabled={isDisabled}
                onChange={switchOnChange}
            />
            <span className="slider" />
            {offLabel && <span className="off label">{offLabel}</span>}
            {onLabel && <span className="on label">{onLabel}</span>}
        </label>
    );
};

export interface DnSwitchProps {
    id?: string;
    name?: string;
    offLabel?: string;
    onLabel?: string;
    checked?: boolean;
    isDisabled?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    className?: string;
}

DnSwitch.defaultProps = {
    id: undefined,
    name: undefined,
    offLabel: undefined,
    onLabel: undefined,
    checked: false,
    isDisabled: false,
    onChange: undefined,
    className: undefined,
};

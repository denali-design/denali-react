/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import Select from 'react-select';
import './DnPowerSelect.css';

export const DnPowerSelect: React.FC<DnPowerSelectProps> = ({
    dataList,
    closeMenuOnSelect,
    isClearable,
    isSearchable,
    ...rest
}: DnPowerSelectProps) => {
    return (
        <Select
            defaultValue={dataList[0]}
            isMulti
            name="colors"
            options={dataList}
            classNamePrefix="denali-powerselect"
            closeMenuOnSelect={closeMenuOnSelect}
            isClearable={isClearable}
            isSearchable={isSearchable}
            {...rest}
        />
    );
};

export interface DnPowerSelectProps {
    dataList: DnPowerSelectProps[];
    closeMenuOnSelect?: boolean;
    isClearable?: boolean;
    isSearchable?: boolean;
}

DnPowerSelect.defaultProps = {
    closeMenuOnSelect: false,
    isClearable: false,
    isSearchable: false,
};

/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import Select from 'react-select';
import './DnMultiSelect.css';

export const DnMultiSelect: React.FC<DnMultiSelectProps> = ({
    name,
    dataList,
    closeMenuOnSelect,
    isClearable,
    isSearchable,
    ...rest
}: DnMultiSelectProps) => {
    return (
        <Select
            defaultValue={dataList[0]}
            isMulti
            name={name}
            options={dataList}
            classNamePrefix="denali-multiselect"
            closeMenuOnSelect={closeMenuOnSelect}
            isClearable={isClearable}
            isSearchable={isSearchable}
            {...rest}
        />
    );
};

export interface DnMultiSelectProps {
    name?: string;
    dataList: DnMultiSelectProps[];
    closeMenuOnSelect?: boolean;
    isClearable?: boolean;
    isSearchable?: boolean;
}

DnMultiSelect.defaultProps = {
    name: undefined,
    closeMenuOnSelect: false,
    isClearable: false,
    isSearchable: false,
};

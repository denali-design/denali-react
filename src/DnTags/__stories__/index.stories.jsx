/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { getThemeClassName, propsGroupId } from '../../../.storybook/storybook-utils';
import { DnTags, DnTagSizes, DnIcon } from '../../index'; // src/index.tsx

const getNowrap = (value) => boolean('nowrap', value, propsGroupId);
const getIsActive = (value) => boolean('isActive', value, propsGroupId);
const getIsDisabled = (value) => boolean('isDisabled', value, propsGroupId);
const getIsOutlined = (value) => boolean('isOutlined', value, propsGroupId);
const getSize = (value) => select('size', DnTagSizes, value, propsGroupId);

const frontIconComponent = <DnIcon icon="check" />;
const backIconComponent = <DnIcon icon="close" />;

export default {
    title: 'Components/DnTags',
    decorators: [withKnobs],
};

export const Default = () => {
    return (
        <DnTags>
            <DnTags.Tag>Standard Tag</DnTags.Tag>
            <DnTags.Tag isActive>Active Tag</DnTags.Tag>
            <DnTags.Tag isDisabled>Disabled Tag</DnTags.Tag>
        </DnTags>
    );
};

export const Outlined = () => {
    return (
        <DnTags>
            <DnTags.Tag isOutlined>Standard Tag</DnTags.Tag>
            <DnTags.Tag isOutlined isActive>
                Active Tag
            </DnTags.Tag>
            <DnTags.Tag isOutlined isDisabled>
                Disabled Tag
            </DnTags.Tag>
        </DnTags>
    );
};

export const Small = () => {
    return (
        <DnTags>
            <DnTags.Tag size={DnTagSizes.small}>Small Standard Tag</DnTags.Tag>
            <DnTags.Tag size={DnTagSizes.small} isOutlined>
                Small Outlined Tag
            </DnTags.Tag>
            <DnTags.Tag size={DnTagSizes.small} isOutlined isActive>
                Small Active Outlined Tag
            </DnTags.Tag>
            <DnTags.Tag size={DnTagSizes.small} isOutlined isDisabled>
                Small Disabled Outlined Tag
            </DnTags.Tag>
        </DnTags>
    );
};

export const FrontIcons = () => {
    return (
        <DnTags>
            <DnTags.Tag frontIconComponent={frontIconComponent}>Standard Tag</DnTags.Tag>
            <DnTags.Tag frontIconComponent={frontIconComponent} size={DnTagSizes.small}>
                Small Standard Tag
            </DnTags.Tag>
            <DnTags.Tag frontIconComponent={frontIconComponent} isOutlined size={DnTagSizes.small}>
                Small Outlined Tag
            </DnTags.Tag>
            <DnTags.Tag frontIconComponent={frontIconComponent} isActive size={DnTagSizes.small}>
                Active Tag
            </DnTags.Tag>
            <DnTags.Tag frontIconComponent={frontIconComponent} isDisabled size={DnTagSizes.small}>
                Disabled Tag
            </DnTags.Tag>
        </DnTags>
    );
};

export const BackIcons = () => {
    return (
        <DnTags>
            <DnTags.Tag backIconComponent={backIconComponent}>Standard Tag</DnTags.Tag>
            <DnTags.Tag backIconComponent={backIconComponent} size={DnTagSizes.small}>
                Small Standard Tag
            </DnTags.Tag>
            <DnTags.Tag backIconComponent={backIconComponent} isOutlined size={DnTagSizes.small}>
                Small Outlined Tag
            </DnTags.Tag>
            <DnTags.Tag backIconComponent={backIconComponent} isActive size={DnTagSizes.small}>
                Active Tag
            </DnTags.Tag>
            <DnTags.Tag backIconComponent={backIconComponent} isDisabled size={DnTagSizes.small}>
                Disabled Tag
            </DnTags.Tag>
        </DnTags>
    );
};

export const playground = () => {
    const isActive = getIsActive(false);
    const isDisabled = getIsDisabled(false);
    const isOutlined = getIsOutlined(false);
    const size = getSize(DnTagSizes.small);

    return (
        <div className={getThemeClassName()}>
            <DnTags nowrap={getNowrap(true)} className="additional-tabs-class">
                <DnTags.Tag isActive={isActive} isDisabled={isDisabled} isOutlined={isOutlined} size={size}>
                    Tag Item
                </DnTags.Tag>
                <DnTags.Tag
                    isActive={isActive}
                    isDisabled={isDisabled}
                    isOutlined={isOutlined}
                    size={size}
                    frontIconComponent={frontIconComponent}
                >
                    Tag w/ front icon
                </DnTags.Tag>
                <DnTags.Tag
                    isActive={isActive}
                    isDisabled={isDisabled}
                    isOutlined={isOutlined}
                    size={size}
                    backIconComponent={backIconComponent}
                >
                    Tag w/ back icon
                </DnTags.Tag>
                <DnTags.Tag
                    isActive={isActive}
                    isDisabled={isDisabled}
                    isOutlined={isOutlined}
                    size={size}
                    frontIconComponent={frontIconComponent}
                    backIconComponent={backIconComponent}
                >
                    Tag w/ front and back icon
                </DnTags.Tag>
                <DnTags.Tag isActive={isActive} isDisabled={isDisabled} isOutlined={isOutlined} size={size}>
                    Tag Item
                </DnTags.Tag>
            </DnTags>
        </div>
    );
};

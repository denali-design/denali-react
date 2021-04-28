/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { render } from 'enzyme';
import { DnTags, DnTagSizes, DnIcon } from '../../index'; // src/index.tsx

const frontIconComponent = <DnIcon icon="check" />;
const backIconComponent = <DnIcon icon="close" />;

describe('DnTags Tests', () => {
    it('should export DnTagSizes', () => {
        expect.assertions(1);

        expect(DnTagSizes).toStrictEqual({
            small: 'small',
            default: 'default',
        });
    });

    it('should render with default props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnTags>
                <DnTags.Tag>Tag 1</DnTags.Tag>
                <DnTags.Tag>Tag 2</DnTags.Tag>
                <DnTags.Tag>Tag 3</DnTags.Tag>
                <DnTags.Tag>Tag 4</DnTags.Tag>
            </DnTags>,
        );

        expect(rendered).toMatchSnapshot();
    });

    it('should render correctly with custom props', () => {
        expect.assertions(1);

        const rendered = render(
            <DnTags nowrap className="dummy-tabs">
                <DnTags.Tag className="dummy-tab-item">Tag class name</DnTags.Tag>
                <DnTags.Tag isActive>Active Tag</DnTags.Tag>
                <DnTags.Tag isDisabled>Disabled Tag</DnTags.Tag>
                <DnTags.Tag isOutlined>Outlined Tag</DnTags.Tag>
                <DnTags.Tag size={DnTagSizes.small}>Small Tag</DnTags.Tag>
                <DnTags.Tag isActive isOutlined>
                    Active Outlined Tag
                </DnTags.Tag>
                <DnTags.Tag isActive isOutlined size={DnTagSizes.small}>
                    Active Outlined Small Tag
                </DnTags.Tag>
                <DnTags.Tag isDisabled isOutlined>
                    Disabled Outlined Tag
                </DnTags.Tag>
                <DnTags.Tag isDisabled isOutlined size={DnTagSizes.small}>
                    Disabled Outlined Small Tag
                </DnTags.Tag>
                <DnTags.Tag frontIconComponent={frontIconComponent}>Tag w/ Front Icon</DnTags.Tag>
                <DnTags.Tag backIconComponent={backIconComponent}>Tag w/ Back Icon</DnTags.Tag>
                <DnTags.Tag frontIconComponent={frontIconComponent} backIconComponent={backIconComponent}>
                    Tag w/ Front and Back Icon
                </DnTags.Tag>
            </DnTags>,
        );

        expect(rendered).toMatchSnapshot();
    });
});

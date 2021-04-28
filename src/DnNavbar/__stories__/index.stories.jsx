/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { DnNavbar, DnIcon } from '../../index';
import { getThemeClassName } from '../../../.storybook/storybook-utils';
import brandImage from './denali-logo.svg';

export default {
    title: 'Components/DnNavbar',
};

export const Default = () => {
    return (
        <DnNavbar>
            <DnNavbar.Left>
                <DnNavbar.Brand src={brandImage} />
            </DnNavbar.Left>
            <DnNavbar.Responsive>
                <DnNavbar.Center>
                    <DnNavbar.Item isActive>Three</DnNavbar.Item>
                    <DnNavbar.Item>Center</DnNavbar.Item>
                    <DnNavbar.Item>Items</DnNavbar.Item>
                </DnNavbar.Center>
                <DnNavbar.Right>
                    <DnNavbar.Item href=".">
                        <DnIcon icon="dashboard" />
                    </DnNavbar.Item>
                    <DnNavbar.Item href=".">
                        <DnIcon icon="menu-dialpad" />
                    </DnNavbar.Item>
                    <DnNavbar.Item>
                        <DnIcon icon="user-profile-circle" />
                    </DnNavbar.Item>
                </DnNavbar.Right>
            </DnNavbar.Responsive>
        </DnNavbar>
    );
};

export const playground = () => {
    return (
        <div className={getThemeClassName()}>
            <DnNavbar>
                <DnNavbar.Left>
                    <DnNavbar.Brand src={brandImage} />
                </DnNavbar.Left>
                <DnNavbar.Responsive>
                    <DnNavbar.Center>
                        <DnNavbar.Item isActive>Three</DnNavbar.Item>
                        <DnNavbar.Item>Center</DnNavbar.Item>
                        <DnNavbar.Item>Items</DnNavbar.Item>
                    </DnNavbar.Center>
                    <DnNavbar.Right>
                        <DnNavbar.Item href=".">
                            <DnIcon icon="dashboard" />
                        </DnNavbar.Item>
                        <DnNavbar.Item href=".">
                            <DnIcon icon="menu-dialpad" />
                        </DnNavbar.Item>
                        <DnNavbar.Item>
                            <DnIcon icon="user-profile-circle" />
                        </DnNavbar.Item>
                    </DnNavbar.Right>
                </DnNavbar.Responsive>
            </DnNavbar>
        </div>
    );
};

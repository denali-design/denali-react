/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { demoGroupId, getThemeClassName, propsGroupId } from '../../../.storybook/storybook-utils';
import { DnBreadcrumb } from '../../index';
import { DnMenu } from '../../DnMenu';

export default {
    title: 'Components/DnBreadcrumb',
    decorators: [withKnobs],
};

const getHomeItemText = (value = 'Home') => text('Home item text', value, demoGroupId);

const getSectionItemText = (value = 'Section') => text('Section item text', value, demoGroupId);

const getSubSectionItemText = (value = 'Sub Section') => text('Subsection item text', value, demoGroupId);

const getArticleItemText = (value = 'Article') => text('Article item text', value, demoGroupId);

const getClassName = (value) => text('className', value, propsGroupId);

export const Default = () => {
    return (
        <DnBreadcrumb>
            <a href="#home">{getHomeItemText()}</a>
            <a href="#section">{getSectionItemText()}</a>
            <a href="#subSection">{getSubSectionItemText()}</a>
            <span>{getArticleItemText()}</span>
        </DnBreadcrumb>
    );
};

export const Playground = () => {
    return (
        <div className={getThemeClassName()}>
            <DnBreadcrumb className={getClassName('Foo')}>
                <a href="#home">{getHomeItemText()}</a>
                <a href="#section">{getSectionItemText()}</a>
                <a href="#subSection">{getSubSectionItemText()}</a>
                <span>{getArticleItemText()}</span>
            </DnBreadcrumb>
        </div>
    );
};

export const Ellipses = () => {
    return (
        <DnBreadcrumb>
            <a href="#home">Home</a>
            <DnMenu>
                <DnMenu.Trigger isEllipses />
                <DnMenu.Content>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    <a href="#help">Help</a>
                    <hr />
                    <a href="#support">Support</a>
                </DnMenu.Content>
            </DnMenu>
            <a href="#article">Article</a>
        </DnBreadcrumb>
    );
};

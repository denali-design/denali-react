/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { getThemeClassName, propsGroupId, demoGroupId } from '../../../.storybook/storybook-utils';
import { DnModal, DnIcon } from '../../index'; // src/index.tsx

const getId = (value) => text('id', value, propsGroupId);

const getIsFull = (value) => boolean('isFull', value, propsGroupId);

const getModalContainerClassName = (value) => text('modalContainerClassName', value, propsGroupId);

const getChildren = (value) => text('children', value, propsGroupId);

const getHasHeaderContent = (value) => boolean('Has headerContent', value, demoGroupId);

const getHasFooterContent = (value) => boolean('Has footerContent', value, demoGroupId);

const getHasCloseContent = (value) => boolean('Has closeContent', value, demoGroupId);

const getWithIcons = (value) => boolean('With Icons', value, demoGroupId);

let dummyText = '';
for (let i = 0; i < 300; i += 1) {
    dummyText += `Dummy Body `;
}

export default {
    title: 'Components/DnModal',
    decorators: [withKnobs],
};

export const Default = () => {
    return (
        <DnModal>
            <p>Dummy Body</p>
        </DnModal>
    );
};

export const playground = () => {
    const id = getId('modal1');
    const isFull = getIsFull(true);
    const modalContainerClassName = getModalContainerClassName('w-600px');
    const children = getChildren(dummyText);
    const hasHeaderContent = getHasHeaderContent(true);
    const hasFooterContent = getHasFooterContent(true);
    const hasCloseContent = getHasCloseContent(true);
    const withIcons = getWithIcons(false);

    return (
        <div className={getThemeClassName()}>
            <DnModal
                id={id}
                isFull={isFull}
                modalContainerClassName={modalContainerClassName}
                headerContent={
                    hasHeaderContent && (
                        <p>
                            {withIcons && <DnIcon icon="hash" />}
                            <span>Dummy Header</span>
                        </p>
                    )
                }
                footerContent={
                    hasFooterContent && (
                        <p>
                            {withIcons && <DnIcon icon="information-circle" />}
                            <span>Dummy Footer</span>
                        </p>
                    )
                }
                closeContent={
                    hasCloseContent && (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a href="#">
                            {withIcons && <DnIcon icon="close-circle" />}
                            <span>Dummy close</span>
                        </a>
                    )
                }
            >
                <p>
                    {withIcons && <DnIcon icon="keyboard-tab" />}
                    {children}
                </p>
            </DnModal>
        </div>
    );
};

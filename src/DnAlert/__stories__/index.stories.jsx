/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { getThemeClassName, propsGroupId } from '../../../.storybook/storybook-utils';
import { DnAlert, DnAlertStatus } from '../../index'; // src/index.tsx

const getIcon = (value) => text('icon', value, propsGroupId);

const getTitle = (value) => text('title', value, propsGroupId);

const getContext = (value) => text('context', value, propsGroupId);

const getStatus = (value) => select('status', DnAlertStatus, value, propsGroupId);

const getBlock = (value) => boolean('isBlock', value, propsGroupId);

const getClassName = (value) => text('className', value, propsGroupId);

export default {
    title: 'Components/DnAlert',
    decorators: [withKnobs],
};

export const Default = () => {
    return <DnAlert title="This is an alert" icon="domain" />;
};

export const playground = () => {
    return (
        <div className={getThemeClassName()}>
            <DnAlert
                icon={getIcon('stop-urgent')}
                title={getTitle('This is the title')}
                context={getContext('The message provides users with context of the alert.')}
                status={getStatus(DnAlertStatus.danger)}
                isBlock={getBlock(false)}
                className={getClassName('test--class')}
                tabIndex={0}
                onClose={action('onClose')}
                onCloseKeyDown={action('onCloseKeyDown')}
            />
        </div>
    );
};

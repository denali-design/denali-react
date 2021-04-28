/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { getThemeClassName, propsGroupId } from '../../../.storybook/storybook-utils';
import { DnLoader } from '../../index'; // src/index.tsx

const getIsInverse = () => boolean('isInverse', false, propsGroupId);

export default {
    title: 'Components/DnLoader',
    decorators: [withKnobs],
};

export const Default = () => {
    return <DnLoader className="foo" />;
};

export const playground = () => {
    return (
        <div className={getThemeClassName()}>
            <DnLoader isInverse={getIsInverse()} />
        </div>
    );
};

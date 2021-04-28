/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import classnames from 'classnames';

export const DnProgress: React.FC<DnProgressProps> = ({
    dataList,
    isLoading,
    size,
    className,
    ...rest
}: DnProgressProps) => {
    return (
        <div
            className={classnames(
                'd-progress',
                {
                    'd-progress__loading': isLoading,
                    [`d-progress__${size}`]: size,
                },
                className,
            )}
            {...rest}
        >
            {!isLoading &&
                dataList.map((item) => (
                    // eslint-disable-next-line jsx-a11y/control-has-associated-label
                    <div
                        key={item.key}
                        className={classnames(
                            'd-progress--bar',
                            {
                                [`has-bg-status-${item.bgStatus}`]: item.bgStatus,
                            },
                            item.className,
                        )}
                        role="progressbar"
                        style={{ width: `${item.value}%` }}
                        aria-valuenow={item.value}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />
                ))}
        </div>
    );
};

export enum DnProgressSizes {
    default = '',
    small = 'sm',
    medium = 'md',
    large = 'lg',
}

export enum DnProgressBgStatus {
    default = '',
    danger = 'danger',
    warning = 'warning',
    success = 'success',
}

export interface DnProgressBarItemProps {
    key: string;
    value: number;
    bgStatus?: DnProgressBgStatus;
    className?: string;
}

export interface DnProgressProps {
    dataList: DnProgressBarItemProps[];
    isLoading: boolean;
    size?: DnProgressSizes;
    className?: string;
}

DnProgress.defaultProps = {
    isLoading: false,
    size: DnProgressSizes.default,
    className: '',
};

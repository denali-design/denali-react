/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import classnames from 'classnames';

export const DnModal: React.FC<DnModalProps> = ({
    id,
    isFull,
    modalContainerClassName,
    closeContent,
    headerContent,
    footerContent,
    children,
}: DnModalProps) => {
    return (
        <div id={id} className="modal is-active">
            <div className={classnames('modal-container', { 'is-full': isFull }, modalContainerClassName)}>
                {closeContent && <div className="close">{closeContent}</div>}
                {headerContent && <div className="modal-header">{headerContent}</div>}
                <div className="modal-content">{children}</div>
                {footerContent && <div className="modal-footer">{footerContent}</div>}
            </div>
        </div>
    );
};

export interface DnModalProps {
    id?: string;
    isFull?: boolean;
    modalContainerClassName?: string;
    closeContent?: React.ReactNode;
    headerContent?: React.ReactNode;
    footerContent?: React.ReactNode;
    children: React.ReactNode;
}

DnModal.defaultProps = {
    id: undefined,
    isFull: false,
    modalContainerClassName: undefined,
    closeContent: null,
    headerContent: null,
    footerContent: null,
};

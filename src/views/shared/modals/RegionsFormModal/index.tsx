import React, { FC } from "react";
import { Modal } from 'antd';
import { IModalProps } from 'state/modals/types';

interface Props extends IModalProps {
    title: 'title',
}

const RegionsFormModal: FC<Props> = ({ onClose, title }) => {

    return (
        <Modal title={title} onCancel={onClose} open>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    )
}

export default RegionsFormModal;
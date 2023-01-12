import React, {FC} from "react";
import {isEmpty} from "lodash";
import {Button, Form, Modal, Input} from 'antd';
import {FormikProvider} from 'formik';
import {IModalProps} from 'state/modals/types';
import InputFiled from "views/shared/forms/InputField";
import {IParams} from 'state/types';
import useContainer from "./hook";
import "./style.scss";

const { Number }: any = Input;

interface Props extends IModalProps {
    title: '',
    tracking_code: string,
    params: IParams,
}

const ReceivedAndAcceptedModal: FC<Props> = ({ onClose, title, tracking_code, params }) => {
    const { formik, formData, loading, onSubmit } = useContainer({params, tracking_code, title});
    return (
        <Modal
            title={title}
            onCancel={onClose}
            className='regions-form-modal'
            open
            footer={
                <div className='footer'>
                    <Button onClick={onClose} className='cancel'>Cancel</Button>
                    <Button
                        loading={loading} disabled={!(formik.isValid && formik.dirty)}
                        onClick={!isEmpty(formik.touched) ? onSubmit : onClose}
                        className='save'
                    >
                        Save
                    </Button>
                </div>
            }
        >
            <Form onFinish={formik.handleSubmit} className='form'>
                <FormikProvider value={formik}>
                    <InputFiled
                        name={formData[0]}
                        // @ts-ignore
                        placeholder={title === "Accepted" ? "Sender give money" : "Recipient give money"}
                        className="input"
                        formItemClassName='formItem'
                        asComponent={Number}
                        type='number'
                    />
                    <InputFiled
                        name={formData[1]}
                        // @ts-ignore
                        placeholder={title === "Accepted" ? "Sender take money" : "Recipient take money"}
                        className="input"
                        formItemClassName='formItem'
                        asComponent={Number}
                        type='number'
                    />
                </FormikProvider>
            </Form>
        </Modal>
    )
}

export default ReceivedAndAcceptedModal;

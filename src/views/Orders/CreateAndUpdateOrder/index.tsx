import React from 'react';
import {Button, Divider, Form} from 'antd';
import {FormikProvider} from 'formik';

import AdminLayout from 'views/layouts/Admin';
import NextButton from "views/shared/NextButton";
import InputFiled from 'views/shared/forms/InputField';
import Loader from "views/shared/Loader";
import useContainer from './hook';
import './style.scss';

const CreateAndUpdateOrder = () => {
    const { getPermissionsLoading, formik, options, roleById, buttonLoader, openSelectCustomerModal} = useContainer();

    if(getPermissionsLoading) {
           return <Loader isAdmin />
    }

    return (
        <AdminLayout>
            <div className='role-forms'>
                <div className='form-header'>
                    <NextButton/>
                    <p className='title'>{roleById.name ? `Update ${roleById.name} role` : 'Create new role'}</p>
                </div>
                <Form onFinish={formik.handleSubmit} className='form'>
                    <FormikProvider value={formik}>
                        <p className='label'>{formik?.values?.sender_name}</p>
                        <p className='label'>{formik?.values?.recipient_name}</p>
                        <Button onClick={() => openSelectCustomerModal('sender')}>Select Sender</Button>
                        <Button onClick={() => openSelectCustomerModal('recipient')}>Select Recipient</Button>

                        <InputFiled
                            name="name"
                            placeholder="Order name"
                            className="name-input"
                            formItemClassName='input-form-item'
                        />
                        <InputFiled
                            name="name"
                            placeholder="Order name"
                            className="name-input"
                            formItemClassName='input-form-item'
                        />
                        <InputFiled
                            name="name"
                            placeholder="Order name"
                            className="name-input"
                            formItemClassName='input-form-item'
                        />
                        <Divider/>
                        <div className='button-div'>
                            <Button loading={buttonLoader} htmlType='submit' className='submit-button'>Save</Button>
                        </div>
                    </FormikProvider>
                </Form>
            </div>
        </AdminLayout>
    );
};

export default CreateAndUpdateOrder;

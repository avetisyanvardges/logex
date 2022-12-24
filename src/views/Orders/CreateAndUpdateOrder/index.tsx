import React from 'react';
import {Button, Divider, Form} from 'antd';
import {FormikProvider} from 'formik';

import AdminLayout from 'views/layouts/Admin';
import NextButton from "views/shared/NextButton";
import InputFiled from 'views/shared/forms/InputField';
import Loader from "views/shared/Loader";
import CheckBoxGroupField from "views/shared/forms/CheckBoxGroupField";
import useContainer from './hook';
import './style.scss';

const CreateAndUpdateOrder = () => {
    const { getPermissionsLoading, formik, options, roleById, buttonLoader } = useContainer();

    if(getPermissionsLoading) {
           return <Loader isAdmin />
    }

    return (
        <AdminLayout>
            <div className='role-forms'>
                <div className='form-header'>
                    <NextButton />
                    <p className='title'>{roleById.name ? `Update ${roleById.name} role` : 'Create new role'}</p>
                </div>
                <Form onFinish={formik.handleSubmit} className='form'>
                    <FormikProvider value={formik}>
                        <p className='label'>Order name</p>
                        <InputFiled
                            name="name"
                            placeholder="Order name"
                            className="name-input"
                            formItemClassName='input-form-item'
                        />
                        <Divider />
                        <p className='label'>Permissions</p>
                        <CheckBoxGroupField items={options} name='permissions' className='check-box-field' />
                        <div className='button-div'>
                            <Button loading={buttonLoader} htmlType='submit' className='submit-button'>Save</Button>
                        </div>
                    </FormikProvider>
                </Form>
            </div>
        </AdminLayout>
    )
};

export default CreateAndUpdateOrder;

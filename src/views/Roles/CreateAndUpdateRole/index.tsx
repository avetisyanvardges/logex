import React from 'react';
import {Button, Form} from 'antd';
import {FormikProvider} from 'formik';
import AdminLayout from 'views/layouts/Admin';
import LoaderWithLayout from "views/shared/LoaderWithLayout";
import InputFiled from 'views/shared/forms/InputField';
import CheckBoxGroupField from "views/shared/forms/CheckBoxGroupField";
import useContainer from './hook';
import NextButton from "views/shared/NextButton";
import './style.scss';

const CreateAndUpdateRole = () => {
    const { getPermissionsLoading, getRoleByIdLoading, formik, options, roleById, buttonLoader } = useContainer();

    if(getPermissionsLoading || getRoleByIdLoading) {
           return <LoaderWithLayout isAdmin />
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
                        <p className='label'>Role name</p>
                        <InputFiled
                            name="name"
                            placeholder="Role name"
                            className="name-input"
                            formItemClassName='input-form-item'
                        />
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

export default CreateAndUpdateRole;
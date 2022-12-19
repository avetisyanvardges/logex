import React from 'react';
import {Button, Divider, Form} from 'antd';
import {FormikProvider} from 'formik';
import AdminLayout from 'views/layouts/Admin';
import FormHeader from 'views/shared/FormHeader';
import InputFiled from 'views/shared/forms/InputField';
import useContainer from './hook';

const CreateAndUpdateCommunity = () => {
    const {id, formik} = useContainer();

    return (
        <AdminLayout>
            <div className='create-and-update-community'>
                <FormHeader title={id ? 'Update community' : 'Create community'}/>
                <Form onFinish={formik.handleSubmit} className='form'>
                    <FormikProvider value={formik}>
                        <InputFiled
                            name="name"
                            placeholder="Role name"
                            className="name-input"
                            formItemClassName='input-form-item'
                        />
                        <Divider/>
                        <div className='button-div'>
                            <Button htmlType='submit' className='submit-button'>Save</Button>
                        </div>
                    </FormikProvider>
                </Form>
            </div>
        </AdminLayout>
    )
};

export default CreateAndUpdateCommunity;
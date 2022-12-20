import React from 'react';
import {Button, Divider, Form} from 'antd';
import {FormikProvider} from 'formik';
import AdminLayout from 'views/layouts/Admin';
import FormHeader from 'views/shared/FormHeader';
import InputFiled from 'views/shared/forms/InputField';
import useContainer from './hook';
import "./style.scss";

const CreateAndUpdateCommunity = () => {
    const {id, formik} = useContainer();

    return (
        <AdminLayout>
            <div className='create-and-update-community'>
                <FormHeader title={id ? 'Update community' : 'Create community'}/>
                <Form onFinish={formik.handleSubmit} className='form'>
                    <FormikProvider value={formik}>
                        <InputFiled
                            name="community_am"
                            placeholder="Community am"
                            label="Community am"
                            className="input"
                            labelClassName="label"
                            formItemClassName='input-form-item'
                        />
                        <InputFiled
                            name="community_ru"
                            placeholder="Community ru"
                            label="Community ru"
                            className="input"
                            labelClassName="label"
                            formItemClassName='input-form-item'
                        />
                        <InputFiled
                            name="community_en"
                            placeholder="Community en"
                            label="Community en"
                            className="input"
                            labelClassName="label"
                            formItemClassName='input-form-item'
                        />
                        <div className='button-div'>
                            <Button htmlType='submit' className='submit-button'>Save</Button>
                        </div>
                    </FormikProvider>
                </Form>
                <Divider/>
            </div>
        </AdminLayout>
    )
};

export default CreateAndUpdateCommunity;
import React from 'react';
import {Button, Divider, Form} from 'antd';
import {FormikProvider} from 'formik';
import {isEmpty} from 'lodash';
import AdminLayout from 'views/layouts/Admin';
import FormHeader from 'views/shared/FormHeader';
import InputFiled from 'views/shared/forms/InputField';
import useContainer from './hook';
import "./style.scss";

const CreateAndUpdateUser = () => {
    const {id, formik, openSelectRegionModal, selectedRegion, loading} = useContainer();

    return (
        <AdminLayout>
            <div className='create-and-update-user'>
                <FormHeader title={id ? 'Update user' : 'Create user'}/>
                <Form onFinish={formik.handleSubmit} className='form'>
                    <FormikProvider value={formik}>
                        <InputFiled
                            name="first_name"
                            placeholder="First name"
                            label="First name"
                            className="input"
                            labelClassName="label"
                            formItemClassName='input-form-item'
                        />
                        <InputFiled
                            name="last_name"
                            placeholder="Last name"
                            label="Last name"
                            className="input"
                            labelClassName="label"
                            formItemClassName='input-form-item'
                        />
                        <InputFiled
                            name="phone"
                            placeholder="Phone"
                            label="Phone"
                            className="input"
                            labelClassName="label"
                            formItemClassName='input-form-item'
                        />
                        <InputFiled
                            name="address"
                            placeholder="Address"
                            label="Address"
                            className="input"
                            labelClassName="label"
                            formItemClassName='input-form-item'
                        />

                        <div className='region'>
                            {!isEmpty(selectedRegion) && (
                                <div className='content'>
                                    <p className='name'>{`Region՝ ${selectedRegion?.region}`}</p>
                                </div>
                            )}
                        </div>

                        <div className='button-div'>
                            <Button onClick={() => openSelectRegionModal()}>Select Region</Button>
                            {!isEmpty(selectedRegion) &&
                                <Button loading={loading} htmlType='submit' className='submit-button'>Save</Button>}
                        </div>

                    </FormikProvider>
                </Form>
                <Divider/>
            </div>
        </AdminLayout>
    )
};

export default CreateAndUpdateUser;
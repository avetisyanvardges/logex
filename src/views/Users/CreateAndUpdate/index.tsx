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
    const {id, formik, openSelectRegionModal, selectedRegion, loading, selectedCommunity, selectedRole} = useContainer();
console.log(selectedRole)
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

                        <div className='selected-fields'>
                            {!isEmpty(selectedRegion) && (
                                <div className='content'>
                                    <div className='name'><span>Region`</span><span className='type'>{selectedRegion?.region}</span></div>
                                </div>
                            )}
                            <Button onClick={() => openSelectRegionModal()}>Select Region</Button>
                        </div>

                        <div className='selected-fields'>
                            {!isEmpty(selectedCommunity) && (
                                <div className='content'>
                                    <div className='name'><span>Community`</span><span className='type'>{selectedCommunity?.community}</span></div>
                                </div>
                            )}
                            <Button onClick={() => openSelectRegionModal()}>Select Community</Button>
                        </div>

                        <div className='selected-fields'>
                            {!isEmpty(selectedRole) && (
                                <div className='content'>
                                    <div className='name'><span>Role`</span><span className='type'>{selectedRole?.[0].name}</span></div>
                                </div>
                            )}
                            <Button onClick={() => openSelectRegionModal()}>Select Role</Button>
                        </div>

                        <div className='button-div'>
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
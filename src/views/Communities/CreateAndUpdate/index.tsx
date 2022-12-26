import React from 'react';
import {Button, Divider, Form} from 'antd';
import {FormikProvider} from 'formik';
import {isEmpty} from 'lodash';
import AdminLayout from 'views/layouts/Admin';
import FormHeader from 'views/shared/FormHeader';
import InputFiled from 'views/shared/forms/InputField';
import useContainer from './hook';
import "./style.scss";

const CreateAndUpdateCommunity = () => {
    const {id, formik, openSelectRegionModal, selectedRegion} = useContainer();

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
                        <div className='region'>
                            {!isEmpty(selectedRegion) && (
                                <div className='content'>
                                    <p className='name'>{`Region am՝ ${selectedRegion?.region_am}`}</p>
                                    <p className='name'>{`Region en՝ ${selectedRegion?.region_en}`}</p>
                                    <p className='name'>{`Region ru՝ ${selectedRegion?.region_ru}`}</p>
                                </div>
                            )}
                            <Button onClick={() => openSelectRegionModal()}>Select Region</Button>
                        </div>
                        {!isEmpty(selectedRegion) &&
                            <div className='button-div'>
                                <Button htmlType='submit' className='submit-button'>Save</Button>
                            </div>
                        }
                    </FormikProvider>
                </Form>
                <Divider/>
            </div>
        </AdminLayout>
    )
};

export default CreateAndUpdateCommunity;
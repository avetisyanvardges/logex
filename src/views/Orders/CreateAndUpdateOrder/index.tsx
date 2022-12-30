import React from 'react';
import {Button, Col, Divider, Form, Row} from 'antd';
import {FormikProvider} from 'formik';

import AdminLayout from 'views/layouts/Admin';
import NextButton from "views/shared/NextButton";
import InputFiled from 'views/shared/forms/InputField';
import useContainer from './hook';
import './style.scss';
import {isEmpty} from "lodash";

const CreateAndUpdateOrder = () => {
    const {
        formik,
        options,
        roleById,
        selectedRegion,
        selectedCommunity,
        openSelectCustomerModal,
        openSelectRegionModal
    } = useContainer();

    // if(getPermissionsLoading) {
    //        return <Loader isAdmin />
    // }

    return (
        <AdminLayout>
            <div className='order-forms'>
                <div className='form-header'>
                    <NextButton/>
                    <p className='title'>{roleById.name ? `Update ${roleById.name} role` : 'Create new order'}</p>
                </div>
                <Form onFinish={formik.handleSubmit} className='form'>
                    <FormikProvider value={formik}>
                        <Row gutter={36}>
                            <Col span={6}>
                                <div style={{border: '1px solid #ddd', padding: 20, borderRadius: '9px', marginLeft: 5}}>
                                    <div style={{display: 'flex', flexDirection: 'row'}}>
                                        <h2 style={{flex: 1}}>Sender</h2>
                                        <div onClick={() => openSelectCustomerModal('sender')} style={{
                                            cursor: 'pointer',
                                            height: 30,
                                            border: '1px solid #ddd',
                                            marginLeft: 5,
                                            padding: 5,
                                            borderRadius: 8
                                        }}>
                                            <h5>{formik?.values?.sender_name || 'Select Sender'}</h5>
                                        </div>
                                    </div>
                                    <InputFiled
                                        name="sender.first_name"
                                        placeholder="First name"
                                        label="First name"
                                        className="input"
                                        labelClassName="label"
                                        formItemClassName='input-form-item'
                                    />
                                    <InputFiled
                                        name="sender.last_name"
                                        placeholder="Last name"
                                        label="Last name"
                                        className="input"
                                        labelClassName="label"
                                        formItemClassName='input-form-item'
                                    />
                                    <InputFiled
                                        name="sender.phone"
                                        placeholder="Phone"
                                        label="Phone"
                                        className="input"
                                        labelClassName="label"
                                        formItemClassName='input-form-item'
                                    />
                                    <InputFiled
                                        name="sender.address"
                                        placeholder="Address"
                                        label="Address"
                                        className="input"
                                        labelClassName="label"
                                        formItemClassName='input-form-item'
                                    />

                                    <div className='selected-fields'>
                                        {!isEmpty(selectedRegion) && (
                                            <div className='content'>
                                                <div className='name'><span>Region`</span><span
                                                    className='type'>{selectedRegion?.region}</span></div>
                                            </div>
                                        )}
                                        <Button onClick={() => openSelectRegionModal()}>Select Region</Button>
                                    </div>

                                    <div className='selected-fields'>
                                        {!isEmpty(selectedCommunity) && (
                                            <div className='content'>
                                                <div className='name'><span>Community`</span><span
                                                    className='type'>{selectedCommunity?.community}</span></div>
                                            </div>
                                        )}
                                        <Button onClick={() => {
                                            console.log(formik.values, 9999)
                                            openSelectRegionModal()
                                        }}>Select Community</Button>
                                    </div>


                                    <div className='button-div'>
                                        {!isEmpty(selectedRegion) &&
                                            <Button loading={false} htmlType='submit'
                                                    className='submit-button'>Save</Button>}
                                    </div>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div style={{border: '1px solid #ddd', padding: 20, borderRadius: '9px'}}>
                                    <div style={{display: 'flex', flexDirection: 'row'}}>
                                        <h2 style={{flex: 1}}>Recipient</h2>
                                        <div onClick={() => openSelectCustomerModal('recipient')} style={{
                                            cursor: 'pointer',
                                            height: 30,
                                            border: '1px solid #ddd',
                                            marginLeft: 5,
                                            padding: 5,
                                            borderRadius: 8
                                        }}>
                                            <h5>{formik?.values?.sender_name || 'Select Recipient'}</h5>
                                        </div>
                                    </div>
                                    <InputFiled
                                        name="recipient.first_name"
                                        placeholder="First name"
                                        label="First name"
                                        className="input"
                                        labelClassName="label"
                                        formItemClassName='input-form-item'
                                    />
                                    <InputFiled
                                        name="recipient.last_name"
                                        placeholder="Last name"
                                        label="Last name"
                                        className="input"
                                        labelClassName="label"
                                        formItemClassName='input-form-item'
                                    />
                                    <InputFiled
                                        name="recipient.phone"
                                        placeholder="Phone"
                                        label="Phone"
                                        className="input"
                                        labelClassName="label"
                                        formItemClassName='input-form-item'
                                    />
                                    <InputFiled
                                        name="recipient.address"
                                        placeholder="Address"
                                        label="Address"
                                        className="input"
                                        labelClassName="label"
                                        formItemClassName='input-form-item'
                                    />

                                    <div className='selected-fields'>
                                        {!isEmpty(selectedRegion) && (
                                            <div className='content'>
                                                <div className='name'><span>Region`</span><span
                                                    className='type'>{selectedRegion?.region}</span></div>
                                            </div>
                                        )}
                                        <Button onClick={() => openSelectRegionModal()}>Select Region</Button>
                                    </div>

                                    <div className='selected-fields'>
                                        {!isEmpty(selectedCommunity) && (
                                            <div className='content'>
                                                <div className='name'><span>Community`</span><span
                                                    className='type'>{selectedCommunity?.community}</span></div>
                                            </div>
                                        )}
                                        <Button onClick={() => openSelectRegionModal()}>Select Community</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Button onClick={() => {
                            console.log(formik.values, 9999)
                            openSelectCustomerModal('recipient')
                        }}>Select Recipient</Button>

                        <p className='label'>{formik?.values?.sender_name}</p>
                        <p className='label'>{formik?.values?.recipient_name}</p>
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
                            <Button
                                loading={false}
                                htmlType='submit' className='submit-button'>Save</Button>
                        </div>
                    </FormikProvider>
                </Form>
            </div>
        </AdminLayout>
    );
};

export default CreateAndUpdateOrder;

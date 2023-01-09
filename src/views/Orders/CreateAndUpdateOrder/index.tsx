import React from 'react';
import {Button, Checkbox, Col, DatePicker, Divider, Dropdown, Form, Space, Typography} from 'antd';
import {DownOutlined} from "@ant-design/icons";
import {FormikProvider} from 'formik';

import AdminLayout from 'views/layouts/Admin';
import NextButton from "views/shared/NextButton";
import Exchange from "assets/svg/ExchangeSvg";
import InputFiled from "views/shared/forms/InputField";
import {STATUS_NAME} from "constants/statuses";
import Loader from "views/shared/Loader";
import SelectUser from "../SelectUser";
import useContainer from './hook';
import './style.scss';

const CreateAndUpdateOrder = () => {
    const {
        formik,
        openSelectRegionModal,
        statuses,
        onChangeIsReturn,
        onChangeStatus,
        getOrderByIdLoading,
        buttonLoader,
        orderById
    } = useContainer();

    if (getOrderByIdLoading) {
        return <Loader isAdmin/>
    }

    return (
        <AdminLayout>
            <div className='create-and-update-orders'>
                <div className='form-header'>
                    <NextButton/>
                    <p className='title'>{false ? `Update order` : 'Create new order'}</p>
                </div>
                <Form onFinish={formik.handleSubmit} className='form'>
                    <FormikProvider value={formik}>
                        <div style={{marginBottom: 10}}>
                            <Col>
                                <div style={{display: 'flex', flexDirection: 'row'}}>
                                    <div onClick={() => openSelectRegionModal(undefined, 'from')} style={{
                                        flex: 1,
                                        alignItems: "center",
                                        justifyContent: 'center',
                                        display: 'flex',
                                        border: '1px solid #ddd',
                                        padding: 20,
                                        borderRadius: '9px',
                                        borderTopRightRadius: 0,
                                        borderBottomRightRadius: 0,
                                        cursor: 'pointer',
                                    }}>
                                        <h3>{`From: ${formik.values.from_name}`}</h3>
                                    </div>
                                    <div onClick={() => {
                                        const from = {id: formik.values.from_id, name: formik.values.from_name}
                                        const to = {id: formik.values.to_id, name: formik.values.to_name}
                                        formik.setValues({
                                            ...formik.values,
                                            from_id: to.id,
                                            from_name: to.name,
                                            to_id: from.id,
                                            to_name: from.name
                                        });
                                    }}  className='exchange'>
                                        <Exchange/>
                                    </div>

                                    <div onClick={() => openSelectRegionModal(undefined, 'to')} style={{
                                        flex: 1,
                                        alignItems: "center",
                                        justifyContent: 'center',
                                        display: 'flex',
                                        border: '1px solid #ddd',
                                        padding: 20,
                                        borderRadius: '9px',
                                        borderTopLeftRadius: 0,
                                        borderBottomLeftRadius: 0,
                                        cursor: 'pointer'

                                    }}>
                                        <h3>{`To: ${formik.values.to_name}`}</h3>
                                    </div>
                                </div>
                            </Col>
                        </div>
                        <div className='select-fields'>
                            <SelectUser title='Sender' formik={formik} id={orderById?.sender?.id}/>
                            <SelectUser title='Recipient' formik={formik} id={orderById?.recipient?.id}/>
                            <div style={{border: '1px solid #ddd', padding: 20, borderRadius: '9px', margin: '3px'}}>
                                <h2 style={{flex: 1}}>Additional</h2>
                                <div className='form'>
                                    <InputFiled
                                        name={`description`}
                                        placeholder="Description"
                                        label="Description"
                                        className="input"
                                        labelClassName="label"
                                        formItemClassName='input-form-item'
                                    />
                                    <InputFiled
                                        name={`additional_address`}
                                        placeholder="Additional address"
                                        label="Additional address"
                                        className="input"
                                        labelClassName="label"
                                        formItemClassName='input-form-item'
                                    />
                                    <InputFiled
                                        name={`comment`}
                                        placeholder="Comment"
                                        label="Comment"
                                        className="input"
                                        labelClassName="label"
                                        formItemClassName='input-form-item'
                                    />
                                    <InputFiled
                                        name={`admin_comment`}
                                        placeholder="Admin comment"
                                        label="Admin comment"
                                        className="input"
                                        labelClassName="label"
                                        formItemClassName='input-form-item'
                                    />

                                    <div className='check-box-content'>
                                        Is return
                                        <Checkbox
                                            value={!!formik.values.is_return}
                                            checked={!!formik.values.is_return}
                                            className='check-box'
                                            onChange={onChangeIsReturn}
                                        />
                                    </div>
                                    <div className='selected-fields'>
                                        <div className='filed'>
                                            <div className='content'>
                                                <div className='name'>
                                                    <span>Delivery date</span>
                                                </div>
                                            </div>
                                        </div>
                                        <DatePicker onChange={(date, dateString) => formik.setValues({
                                            ...formik.values,
                                            delivery_date: dateString
                                        })}/>
                                    </div>
                                    <div className='selected-fields'>
                                        <div className='filed'>
                                            <div className='content'>
                                                <div className='name'>
                                                    <span>Status</span>
                                                </div>
                                            </div>
                                        </div>
                                        <Dropdown
                                            menu={{
                                                items: statuses,
                                                selectable: true,
                                                defaultSelectedKeys: [formik.values.status],
                                                onClick: onChangeStatus
                                            }}>
                                            <Typography.Link>
                                                <Space>
                                                    {STATUS_NAME[formik.values.status] || 'Select'}
                                                    <DownOutlined/>
                                                </Space>
                                            </Typography.Link>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Col>
                        </Col>
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

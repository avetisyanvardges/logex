import React from 'react';
import AdminLayout from 'views/layouts/Admin';
import useContainer from './hook';
import './style.scss';
import NextButton from "../../shared/NextButton";
import {FormikProvider} from "formik";
import {Button, Col, Form, Row, Table} from "antd";
import Loader from "../../shared/Loader";
import InputFiled from "../../shared/forms/InputField";
import {isEmpty} from "lodash";

const CreateAndUpdateParcel = (props: any) => {
    const {
        formik,
        getParcelByIdLoading,
        openSelectCourierModal,
        buttonLoader,
        getUserByIdLoading,
        orders,
        ordersMeta,
        params,
        page,
        handleChangeParams,
        isFetchingOrders,
        columns
    } = useContainer(props);

    if (getParcelByIdLoading || getUserByIdLoading) {
        return <Loader isAdmin/>
    }


    return (
        <AdminLayout>
            <div className='create-and-update-user'>
                <div className='form-header'>
                    <NextButton/>
                    <p className='title'>{false ? `Update parcel` : 'Create new parcel'}</p>
                </div>
                <Form onFinish={formik.handleSubmit} className='form'>
                    <FormikProvider value={formik}>
                        <Row gutter={36}>
                            <Col span={12}>
                                <div style={{border: '1px solid #ddd', padding: 20, borderRadius: '9px'}}>
                                    <div className='form'>
                                        <InputFiled
                                            name={`name`}
                                            placeholder="Parcel name"
                                            label="Parcel name"
                                            className="input"
                                            labelClassName="label"
                                            formItemClassName='input-form-item'
                                        />
                                        <div className='selected-fields'>
                                            <div className='filed'>
                                                <div className='content'>
                                                    <div className='name'>
                                                        <span>Courier`</span>
                                                        <span
                                                            className='type'>{!isEmpty(formik.values.courier) && formik.values.courier}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button onClick={() => openSelectCourierModal()}>Select Courier</Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className='button-div'>
                                    {(formik.isValid && formik.dirty) &&
                                        <Button loading={buttonLoader} htmlType='submit'
                                                className='submit-button'>Save</Button>}
                                </div>
                            </Col>
                        </Row>
                    </FormikProvider>
                </Form>
                <div style={{marginTop: 30}}>
                    <Table
                        rowKey='id' bordered dataSource={orders} columns={columns}
                        loading={isFetchingOrders} className='table'
                        expandable={{defaultExpandedRowKeys: ['0']}}
                        pagination={{
                            pageSize: +params.per_page,
                            showSizeChanger: false,
                            current: +page,
                            total: ordersMeta.total,
                            onChange: (pageNumber) => handleChangeParams(pageNumber)
                        }}
                    />
                </div>
            </div>
        </AdminLayout>
    );


};

export default CreateAndUpdateParcel;

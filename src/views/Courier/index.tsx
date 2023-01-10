import React, {useEffect, useState} from 'react';
import AdminLayout from '../layouts/Admin';
import useContainer from "./hook";
import TableHeader from "../shared/TableHeader";
import {Col, Row, Table} from "antd";

const Courier = (props: any) => {
    const {
        handleChangeParams,
        page,
        params,
        ordersMeta,
        orders,
        isFetchingOrders,
        columns,
        handleCreateOrder,
        courier_orders,
        activeTab,
        setActiveTab
    } = useContainer(props);
    const [activeExpRow, setActiveExpRow] = useState();
    const [activeExtraTab, setActiveExtraTab] = useState('sender');
    const sender = activeExtraTab === 'sender'
    const recipient = activeExtraTab === 'recipient'
    const more = activeExtraTab === 'more';
    const pickup = activeTab === 'pickup'
    const delivery = activeTab === 'delivery'

    const expandedRowRender = (data:any) => {
        const {
            first_name,
            last_name,
            phone,
            address,
        } = data?.[activeExtraTab] || {};
        const {
            description,
            additional_address,
            comment,
            admin_comment,
            is_return,
            cost
        } = data;
        return (
            <Row key={data.id}>
                <Col span={8}>
                    <div onClick={() => setActiveExtraTab('sender')} style={{cursor: 'pointer'}}>
                        <p style={{color: sender ? '#5BC852' : '#B2C2B0'}}>Ուղարկող</p>
                    </div>
                    <div onClick={() => setActiveExtraTab('recipient')} style={{cursor: 'pointer'}}>
                        <p style={{color: recipient ? '#5BC852' : '#B2C2B0'}}>Ստացող</p>
                    </div>
                    <div onClick={() => setActiveExtraTab('more')} style={{cursor: 'pointer'}}>
                        <p style={{color: more ? '#5BC852' : '#B2C2B0'}}>Մանրամասներ</p>
                    </div>
                </Col>
                <Col span={12}>
                    <Row>
                        <Col span={12}>
                            <div>
                                <p style={{color: '#B2C2B0'}}>{more ? 'Նկարագրություն' : 'Անուն Ազգանուն'}։</p>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div>
                                <p>{more ? description : first_name + ' ' + last_name}</p>
                            </div>
                        </Col>

                    </Row>
                    <Row>
                        <Col span={12}>
                            <div>
                                <p style={{color: '#B2C2B0'}}>{more ? 'Լրացուցիչ հասցե' : 'Հեռախոսահամար'}։</p>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div>
                                <p>{more ? additional_address : phone}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <div>
                                <p style={{color: '#B2C2B0'}}>{more ? 'Նշումներ' : 'Հասցե'}։</p>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div>
                                <p>{more ? comment : address}</p>
                            </div>
                        </Col>
                    </Row>
                    {more &&
                        <>
                            <Row>
                                <Col span={12}>
                                    <div>
                                        <p style={{color: '#B2C2B0'}}>Ադմինի նշումներ։</p>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div>
                                        <p>{admin_comment}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <div>
                                        <p style={{color: '#B2C2B0'}}>Արժեքը։</p>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div>
                                        <p>{cost}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <div>
                                        <p style={{color: '#B2C2B0'}}>հետադարձ։</p>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div>
                                        <p>{is_return ? 'Yes' : 'No'}</p>
                                    </div>
                                </Col>
                            </Row>
                        </>
                    }
                </Col>
            </Row>
        );
    }

    return (
        <AdminLayout>
            <div className='page-with-table'>
                <TableHeader isCreate={false} onCreate={handleCreateOrder} totalCount={ordersMeta?.total}/>
                <Row>
                    <Col span={12}>
                        <div onClick={() => setActiveTab('pickup')} style={{
                            display: "flex",
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: pickup ? '#5DBA2F' : '',
                            cursor: 'pointer'
                        }}>
                            <h2 style={{color: pickup ? 'white' : 'black'}}>Pickup</h2>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div onClick={() => setActiveTab('delivery')} style={{
                            display: "flex",
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: delivery ? '#5DBA2F' : '',
                            cursor: 'pointer'

                        }}>
                            <h2 style={{color: delivery ? 'white' : 'black'}}>Delivery</h2>
                        </div>
                    </Col>
                </Row>
                <Table
                    rowKey='id' bordered dataSource={courier_orders} columns={columns}
                    loading={isFetchingOrders} className='table'
                    expandable={{
                        expandedRowRender,
                        rowExpandable: (record) => true,
                        expandedRowKeys: activeExpRow,
                        defaultExpandedRowKeys: ['0'],
                        onExpand: (expanded, record) => {
                            const keys = [];
                            if (expanded) {
                                keys.push(record.id);
                            }
                            // @ts-ignore
                            setActiveExpRow(keys);
                        }
                    }}
                    pagination={{
                        pageSize: +params.per_page,
                        showSizeChanger: false,
                        current: +page,
                        total: ordersMeta?.total,
                        onChange: (pageNumber) => handleChangeParams(pageNumber)
                    }}
                />
            </div>
        </AdminLayout>
    );
};

export default Courier;

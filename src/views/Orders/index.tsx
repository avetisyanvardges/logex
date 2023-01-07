import React, {useState} from 'react';
import AdminLayout from '../layouts/Admin';
import useContainer from "./hook";
import TableHeader from "../shared/TableHeader";
import {Table} from "antd";

const Orders = (props: any) => {
    const {
        handleChangeParams,
        page,
        params,
        ordersMeta,
        orders,
        isFetchingOrders,
        columns,
        handleCreateOrder
    } = useContainer(props);
    const [activeExtraTab, setActiveExtraTab] = useState('sender');
    const sender = activeExtraTab === 'sender'
    const recipient = activeExtraTab === 'recipient'
    const more = activeExtraTab === 'more';

    const expandedRowRender = (data:any) => {
        const {first_name, last_name, phone, address} = data?.[activeExtraTab] || {}
        return (
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{flex: 1}}>
                    <div onClick={() => setActiveExtraTab('sender')} style={{cursor: 'pointer'}}>
                        <p style={{color: sender ? '#5BC852' : '#B2C2B0'}}>Ուղարկող</p>
                    </div>
                    <div onClick={() => setActiveExtraTab('recipient')} style={{cursor: 'pointer'}}>
                        <p style={{color: recipient ? '#5BC852' : '#B2C2B0'}}>Ստացող</p>
                    </div>
                    <div onClick={() => setActiveExtraTab('more')} style={{cursor: 'pointer'}}>
                        <p style={{color: more ? '#5BC852' : '#B2C2B0'}}>Մանրամասներ</p>
                    </div>
                </div>
                <div style={{flex: 1}}>
                    <div>
                        <p style={{color: '#B2C2B0'}}>Անուն Ազգանուն։</p>
                    </div>
                    <div>
                        <p style={{color: '#B2C2B0'}}>Հեռախոսահամար։</p>
                    </div>
                    <div>
                        <p style={{color: '#B2C2B0'}}>Հասցե։</p>
                    </div>
                </div>
                <div style={{flex: 1}}>
                    <div>
                        <p>{first_name + ' ' + last_name}</p>
                    </div>
                    <div>
                        <p>{phone}</p>
                    </div>
                    <div>
                        <p>{address}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <AdminLayout>
            <div className='orders'>
                <TableHeader isCreate={props.create} onCreate={handleCreateOrder} totalCount={ordersMeta.total}/>
                <Table
                    rowKey='id' bordered dataSource={orders} columns={columns}
                    loading={isFetchingOrders} className='table'
                    expandable={{expandedRowRender, defaultExpandedRowKeys: ['0']}}
                    pagination={{
                        pageSize: +params.per_page,
                        showSizeChanger: false,
                        current: +page,
                        total: ordersMeta.total,
                        onChange: (pageNumber) => handleChangeParams(pageNumber)
                    }}
                />
            </div>
        </AdminLayout>
    )
};

export default Orders;

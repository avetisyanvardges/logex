import React from 'react';
import {Table} from "antd";
import TableHeader from "views/shared/TableHeader";
import AdminLayout from 'views/layouts/Admin';
import useContainer from "./hook";
import "./style.scss";

const Customers = () => {
    const {
        customers, handleCreate, customersMeta, columns, handleChangeParams, params, page, getCustomersLoading
    } = useContainer();

    return (
        <AdminLayout>
            <div className='customers'>
                <TableHeader onCreate={handleCreate} totalCount={customersMeta.total} />
                <Table
                    bordered
                    rowKey='id'
                    dataSource={customers}
                    columns={columns}
                    scroll={{ x: 'max-content' }}
                    loading={getCustomersLoading}
                    className='table'
                    pagination={{
                        pageSize: +params.per_page,
                        showSizeChanger: false,
                        current: +page,
                        total: customersMeta.total,
                        onChange: (pageNumber) => handleChangeParams(pageNumber)
                    }}
                />
            </div>
        </AdminLayout>
    )
}

export default Customers;
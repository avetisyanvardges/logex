import React from 'react';
import {Table} from 'antd';
import AdminLayout from 'views/layouts/Admin';
import TableHeader from 'views/shared/TableHeader';
import useContainer from './hook';
import "./style.scss";

const Warehouses = () => {
    const { warehouses, warehousesMeta, getWarehousesLoading, params, handleChangeParams, page, columns, handleCreate } = useContainer();
    return (
        <AdminLayout>
            <div className='warehouses'>
                <TableHeader onCreate={handleCreate} totalCount={warehousesMeta.total} />
                <Table
                    bordered
                    rowKey='id'
                    dataSource={warehouses}
                    columns={columns}
                    scroll={{ x: 'max-content' }}
                    loading={getWarehousesLoading}
                    className='table'
                    pagination={{
                        pageSize: +params.per_page,
                        showSizeChanger: false,
                        current: +page,
                        total: warehousesMeta.total,
                        onChange: (pageNumber) => handleChangeParams(pageNumber)
                    }}
                />
            </div>
        </AdminLayout>
    )
}

export default Warehouses;
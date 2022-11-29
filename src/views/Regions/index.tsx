import React from 'react';
import {Table} from 'antd';
import AdminLayout from 'views/layouts/Admin';
import useContainer from "./hook";
import "./style.scss";
import TableHeader from '../shared/TableHeader';

const Regions = () => {
    const { handleChangeParams, page, params, regions, meta, isFetchingRegions, columns } = useContainer();

    return (
        <AdminLayout>
            <div className='regions'>
                <TableHeader />
                 <Table
                     pagination={{
                     pageSize: +params.per_page,
                     showSizeChanger: false,
                     current: +page,
                     total: meta.total,
                      onChange: (pageNumber) => handleChangeParams(pageNumber)
                     }}
                     bordered
                     dataSource={regions}
                     columns={columns}
                     loading={isFetchingRegions}
                     className='table'
                     rowClassName="editable-row"
                />
            </div>
        </AdminLayout>
    )
}

export default Regions;
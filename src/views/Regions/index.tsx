import React from 'react';
import {Table} from 'antd';
import AdminLayout from 'views/layouts/Admin';
import TableHeader from 'views/shared/TableHeader';
import useContainer from "./hook";
import "./style.scss";

const Regions = () => {
    const { handleChangeParams, page, params, regions, meta, isFetchingRegions, columns, openRegionsFormModal } = useContainer();

    return (
        <AdminLayout>
            <div className='regions'>
                <TableHeader onCreate={openRegionsFormModal} totalCount={meta.total} />
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
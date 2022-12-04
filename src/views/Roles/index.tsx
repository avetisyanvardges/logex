import React from 'react';
import {Table} from 'antd';
import AdminLayout from 'views/layouts/Admin';
import TableHeader from 'views/shared/TableHeader';
import useContainer from "./hook";
import "./style.scss";

const Roles = () => {
    const { handleChangeParams, page, params, rolesMeta, roles, isFetchingRoles, columns, createRole } = useContainer();

    return (
        <AdminLayout>
            <div className='roles'>
                <TableHeader onCreate={createRole} totalCount={rolesMeta.total} />
                 <Table
                     rowKey='id' bordered dataSource={roles} columns={columns}
                     loading={isFetchingRoles} className='table'
                     pagination={{
                     pageSize: +params.per_page,
                     showSizeChanger: false,
                     current: +page,
                     total: rolesMeta.total,
                      onChange: (pageNumber) => handleChangeParams(pageNumber)
                     }}
                />
            </div>
        </AdminLayout>
    )
}

export default Roles;
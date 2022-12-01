import React from 'react';
import {Table} from "antd";
import AdminLayout from 'views/layouts/Admin';
import TableHeader from "views/shared/TableHeader";
import useContainer from "./hook";

const Users = () => {
    const { handleCreate, params, page, handleChangeParams, columns, usersMeta, users, getUsersLoading } = useContainer();

    return (
        <AdminLayout>
            <div className='users'>
                <TableHeader onCreate={handleCreate} totalCount={10} />
                <Table
                    pagination={{
                        pageSize: +params.per_page,
                        showSizeChanger: false,
                        current: +page,
                        total: usersMeta.total,
                        onChange: (pageNumber) => handleChangeParams(pageNumber)
                    }}
                    bordered
                    dataSource={users}
                    columns={columns}
                    loading={getUsersLoading}
                    className='table'
                    rowClassName="editable-row"
                />
            </div>
        </AdminLayout>
    )
}

export default Users;
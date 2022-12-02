import React from 'react';
import {Table} from "antd";
import AdminLayout from 'views/layouts/Admin';
import TableHeader from "views/shared/TableHeader";
import useContainer from "./hook";
import "./style.scss";

const Users = () => {
    const { handleCreate, params, page, handleChangeParams, columns, usersMeta, users, getUsersLoading } = useContainer();

    return (
        <AdminLayout>
            <div className='users'>
                <TableHeader onCreate={handleCreate} totalCount={usersMeta.total} />
                <Table
                    bordered rowKey='id' dataSource={users} scroll={{ x: 'max-content' }}
                    columns={columns} loading={getUsersLoading} className='table'
                    pagination={{
                        pageSize: +params.per_page,
                        showSizeChanger: false,
                        current: +page,
                        total: usersMeta.total,
                        onChange: (pageNumber) => handleChangeParams(pageNumber)
                    }}
                />
            </div>
        </AdminLayout>
    )
}

export default Users;
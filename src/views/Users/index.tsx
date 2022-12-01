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
                {/*<TableHeader onCreate={handleCreate} totalCount={usersMeta.total} />*/}
                <Table
                    pagination={{
                        pageSize: +params.per_page,
                        showSizeChanger: false,
                        current: +page,
                        total: usersMeta.total,
                        onChange: (pageNumber) => handleChangeParams(pageNumber)
                    }}
                    bordered
                    rowKey='id'
                    style={{maxWidth: 1000}}
                    dataSource={users}
                    scroll={{ x: 'max-content' }}
                    // sticky={true}
                    columns={columns}
                    loading={getUsersLoading}
                    className='table'
                />
            </div>
        </AdminLayout>
    )
}

export default Users;
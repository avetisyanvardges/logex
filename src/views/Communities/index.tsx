import React from 'react';
import AdminLayout from 'views/layouts/Admin';
import TableHeader from 'views/shared/TableHeader';
import useContainer from './hook';
import {Table} from "antd";

const Communities = () => {
    const { handleCreate, communities, columns, handleChangeParams, params, page, communitiesMeta, getCommunitiesLoading } = useContainer();

    return (
        <AdminLayout>
            <div className='communities'>
                <TableHeader onCreate={handleCreate} totalCount={communitiesMeta.total} />
                <Table
                    pagination={{
                        pageSize: +params.per_page,
                        showSizeChanger: false,
                        current: +page,
                        total: communitiesMeta.total,
                        onChange: (pageNumber) => handleChangeParams(pageNumber)
                    }}
                    bordered
                    dataSource={communities}
                    columns={columns}
                    loading={getCommunitiesLoading}
                    className='table'
                    rowClassName="editable-row"
                />
            </div>
        </AdminLayout>
    )
}

export default Communities;
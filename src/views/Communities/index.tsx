import React from 'react';
import {Table} from "antd";
import AdminLayout from 'views/layouts/Admin';
import TableHeader from 'views/shared/TableHeader';
import useContainer from './hook';

const Communities = () => {
    const { handleCreate, communities, columns, handleChangeParams, params, page, communitiesMeta, getCommunitiesLoading } = useContainer();

    return (
        <AdminLayout>
            <div className='communities'>
                <TableHeader onCreate={handleCreate} totalCount={communitiesMeta.total} />
                <Table
                    bordered rowKey='id' dataSource={communities} columns={columns}
                    loading={getCommunitiesLoading} className='table'
                    pagination={{
                        pageSize: +params.per_page,
                        showSizeChanger: false,
                        current: +page,
                        total: communitiesMeta.total,
                        onChange: (pageNumber) => handleChangeParams(pageNumber)
                    }}
                />
            </div>
        </AdminLayout>
    )
}

export default Communities;
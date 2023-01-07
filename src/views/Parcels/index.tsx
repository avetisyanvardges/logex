import React from 'react';
import AdminLayout from '../layouts/Admin';
import useContainer from "./hook";
import TableHeader from "../shared/TableHeader";
import {Table} from "antd";

const Parcels = (props: any) => {
    const {
        handleCreateParcel,
        parcel,
        parcelMeta,
        columns,
        isFetchingParcel,
        params,
        page,
        handleChangeParams
    } = useContainer(props);
    return (
        <AdminLayout>
            <div className='orders'>
                <TableHeader isCreate={props.create} onCreate={handleCreateParcel} totalCount={parcelMeta.total}/>
                <Table
                    rowKey='id' bordered dataSource={parcel} columns={columns}
                    loading={isFetchingParcel} className='table'
                    expandable={{defaultExpandedRowKeys: ['0']}}
                    pagination={{
                        pageSize: +params.per_page,
                        showSizeChanger: false,
                        current: +page,
                        total: parcelMeta.total,
                        onChange: (pageNumber) => handleChangeParams(pageNumber)
                    }}
                />
            </div>
        </AdminLayout>
    );
};

export default Parcels;

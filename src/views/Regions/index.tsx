import React, {FC} from 'react';
import {Table} from 'antd';
import AdminLayout from 'views/layouts/Admin';
import TableHeader from 'views/shared/TableHeader';
import {IPagePermissions} from 'state/types';
import useContainer from "./hook";
import "./style.scss";

interface IProps extends IPagePermissions {}

const Regions: FC<IProps> = (props) => {
    const {
        handleChangeParams, page, params, regions, regionsMeta, isFetchingRegions, columns, openRegionsFormModal
    } = useContainer(props);
    return (
        <AdminLayout>
            <div className='regions'>
                <TableHeader onCreate={props.create ? openRegionsFormModal : undefined} totalCount={regionsMeta.total} />
                 <Table
                     rowKey='id' bordered dataSource={regions} columns={columns}
                     loading={isFetchingRegions} className='table'
                     pagination={{
                     pageSize: +params.per_page,
                     showSizeChanger: false,
                     current: +page,
                     total: regionsMeta.total,
                      onChange: (pageNumber) => handleChangeParams(pageNumber)
                     }}
                />
            </div>
        </AdminLayout>
    )
}

export default Regions;
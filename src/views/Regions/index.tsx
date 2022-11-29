import React from 'react';
import { FormikProvider } from "formik";
import {Button, Form, Popconfirm, Table, Typography} from 'antd';
import AdminLayout from 'views/layouts/Admin';
import EditableCell from "views/shared/EditableCell";
import { IRegion } from "state/regions/types";
import useContainer from "./hook";
import "./style.scss";

const Regions = () => {
    const {
        handleChangeParams,
        page,
        params,
        regions,
        meta,
        isFetchingRegions,
        formik,
        editingKey,
        isEditing,
        handleEdit,
        handleCancel,
    } = useContainer();

    const columns = [
        {
            title: 'region_am',
            dataIndex: 'region_am',
            width: '24%',
            editable: true,
        },
        {
            title: 'region_en',
            dataIndex: 'region_en',
            width: '24%',
            editable: true,
        },
        {
            title: 'region_ru',
            dataIndex: 'region_ru',
            width: '24%',
            editable: true,
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_: any, record: IRegion) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <Button>Save</Button>
                        <Popconfirm title="Sure to cancel?" onConfirm={handleCancel}>
                            <Button>Cancel</Button>
                        </Popconfirm>
                    </span>
                ) : (
                    <Typography.Link disabled={editingKey !== 0} onClick={() => handleEdit(record)}>
                        <Button>Edit</Button>
                    </Typography.Link>
                );
            },
        },
    ];

    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: IRegion) => ({
                record,
                inputType: 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    return (
        <AdminLayout>
            <div className='regions'>
                <Form component={false}>
                    <FormikProvider value={formik}>
                        <Table
                            components={{ body: { cell: EditableCell }}}
                            pagination={{
                                pageSize: +params.per_page,
                                showSizeChanger: false,
                                current: +page,
                                total: meta.total,
                                onChange: (pageNumber) => handleChangeParams(pageNumber)
                            }}
                            bordered
                            dataSource={regions}
                            columns={mergedColumns}
                            loading={isFetchingRegions}
                            className='table'
                            rowClassName="editable-row"
                        />
                    </FormikProvider>
                </Form>
            </div>
        </AdminLayout>
    )
}

export default Regions;
import React, {useEffect, useMemo} from "react";
import { useDispatch } from 'react-redux';
import useMount from "hooks/useMount";
import useQueryParams from "hooks/useQueryParams";
import useTypedSelector from "hooks/useTypedSelector";
import useParametricSelector from "hooks/useParametricSelector";
import TableOperations from "views/shared/TableOperations";
import {fetchWarehousesRequest} from 'state/warehouses/actions';
import { fetchWarehousesEndpoint } from "state/warehouses/endpoints";
import {IWarehouse} from 'state/warehouses/types';
import {IPagePropsPermissions} from "state/types";

function useContainer({edit, remove}: IPagePropsPermissions) {
    const dispatch = useDispatch();
    const { page, params, handleChangeParams } = useQueryParams();
    const { warehouses, warehousesMeta } = useTypedSelector(({warehouses}) => warehouses);
    const { endpoint: getWarehousesEndpoint } = fetchWarehousesEndpoint;
    const { isLoading: getWarehousesLoading } = useParametricSelector(getWarehousesEndpoint);

    /**  create  */
    const handleCreate = () => {
        console.log('handleCreate');
    };

    /**  edt  */
    const handleEdit = () => {
        console.log('handleEdite')
    };

    /**  delete  */
    const handleDelete = () => {
        console.log('handleEdite')
    };

    /**  on params update handler  */
    const onUpdateHandler = () => {
        dispatch(fetchWarehousesRequest(params));
    }

    /**  Lifecycle  */
    useEffect(onUpdateHandler, [page]);
    useMount();

    /**
     * Table columns
     * **/
    const columns = useMemo(() => (
        [
            {
                title: 'Warehouse en',
                width: 100,
                dataIndex: 'warehouse_en',
                fixed: 'left' as 'left',
            },
            {
                title: 'Warehouse am',
                width: 100,
                dataIndex: 'warehouse_am',
            },
            {
                width: 100,
                title: 'Warehouse ru',
                dataIndex: 'warehouse_am',
            },
            {
                width: 100,
                title: 'Address',
                dataIndex: 'address',
            },
            {
                width: 100,
                title: 'Open at',
                dataIndex: 'open_at',
            },
            {
                width: 100,
                title: 'Close at',
                dataIndex: 'close_at',
            },
            {
                width: 100,
                title: 'code',
                dataIndex: 'code',
            },
            {
                width: 100,
                title: 'Operations',
                fixed: 'right' as 'right',
                dataIndex: 'operation',
                render: (_: any, record: IWarehouse) =>
                    <TableOperations isEdit={edit} isDelete={remove} record={record} handleEdit={handleEdit} handleDelete={handleDelete} />
            },
        ]
    ), [warehouses]);


    return {
        handleCreate,
        page,
        warehouses,
        columns,
        params,
        warehousesMeta,
        getWarehousesLoading,
        handleChangeParams,
    }
}

export default useContainer;
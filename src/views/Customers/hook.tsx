import React, {useEffect, useMemo} from "react";
import { Popover } from "antd";
import { useDispatch } from 'react-redux';
import useMount from "hooks/useMount";
import useQueryParams from "hooks/useQueryParams";
import useTypedSelector from "hooks/useTypedSelector";
import useParametricSelector from "hooks/useParametricSelector";
import TableOperations from "views/shared/TableOperations";
import {fetchCustomersRequest} from "state/customers/actions";
import {fetchCustomersEndpoint} from "state/customers/endpoints";
import {ICustomers} from "state/customers/types";
import {ICurrentAdmin} from "state/admins/types";
import sliceText from "utils/sliceText";

function useContainer() {
    const dispatch = useDispatch();
    const { page, params, handleChangeParams } = useQueryParams();
    const { customers, customersMeta } = useTypedSelector(({customers}) => customers);
    const { endpoint: getCustomersEndpoint } = fetchCustomersEndpoint;
    const { isLoading: getCustomersLoading } = useParametricSelector(getCustomersEndpoint);

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
        dispatch(fetchCustomersRequest(params));
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
                title: 'Full name',
                width: 100,
                fixed: 'left' as 'left',
                render: (_: any, record: ICurrentAdmin) =>
                    <Popover content={<span>{`${record.first_name} ${record.last_name}`}</span>}>
                        <span>{sliceText(`${record.first_name} ${record.last_name}`, 15)}</span>
                    </Popover>
            },
            {
                title: 'Phone',
                width: 100,
                render: (_: any, record: ICurrentAdmin) =>
                    <Popover content={<span>{record.phone}</span>}>
                        <span>{sliceText(record.phone, 13)}</span>
                    </Popover>
            },
            {
                width: 100,
                title: 'Community',
                dataIndex: ['community', 'community'],
            },
            {
                width: 100,
                title: 'Region',
                dataIndex: ['region', 'region'],
            },
            {
                width: 100,
                title: 'Address',
                dataIndex: 'address',
            },
            {
                width: 100,
                title: 'Operations',
                fixed: 'right' as 'right',
                dataIndex: 'operation',
                render: (_: any, record: ICustomers) =>
                    <TableOperations record={record} handleEdit={handleEdit} handleDelete={handleDelete} />
            },
        ]
    ), [customers])


    return {
        handleCreate,
        page,
        customers,
        columns,
        params,
        customersMeta,
        getCustomersLoading,
        handleChangeParams,
    }
}

export default useContainer;
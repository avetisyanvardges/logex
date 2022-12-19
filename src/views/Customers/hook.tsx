import React, {useEffect, useMemo} from "react";
import { useDispatch } from 'react-redux';
import useMount from "hooks/useMount";
import useQueryParams from "hooks/useQueryParams";
import useTypedSelector from "hooks/useTypedSelector";
import useParametricSelector from "hooks/useParametricSelector";
import TableOperations from "views/shared/TableOperations";
import {fetchCustomersRequest} from "state/customers/actions";
import {fetchCustomersEndpoint} from "state/customers/endpoints";
import {ICustomers} from "state/customers/types";
import {IPagePropsPermissions} from "state/types";

function useContainer({edit, remove}: IPagePropsPermissions) {
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
                dataIndex: 'first_name',
                // render: (_: any, record: ICustomers) => <span>{`${record.first_name} ${record.last_name}`}</span>
            },
            {
                title: 'Phone',
                width: 100,
                dataIndex: 'phone',
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
                    <TableOperations
                        isEdit={edit}
                        isDelete={remove}
                        record={record}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
            },
        ]
    ), [customers]);


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
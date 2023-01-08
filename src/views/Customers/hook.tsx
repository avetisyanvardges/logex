import React, {useEffect, useMemo} from "react";
import {useDispatch} from 'react-redux';
import useMount from "hooks/useMount";
import useQueryParams from "hooks/useQueryParams";
import useTypedSelector from "hooks/useTypedSelector";
import useParametricSelector from "hooks/useParametricSelector";
import TableOperations from "views/shared/TableOperations";
import {deleteCustomer, fetchCustomersRequest} from "state/customers/actions";
import {fetchCustomersEndpoint} from "state/customers/endpoints";
import {ICustomers} from "state/customers/types";
import {IPagePropsPermissions} from "state/types";
import {useNavigate} from 'react-router-dom';

function useContainer({edit, remove}: IPagePropsPermissions) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { page, params, handleChangeParams } = useQueryParams();
    const { customers, customersMeta } = useTypedSelector(({customers}) => customers);
    const { endpoint: getCustomersEndpoint } = fetchCustomersEndpoint;
    const { isLoading: getCustomersLoading } = useParametricSelector(getCustomersEndpoint);

    /**  create  */
    const handleCreate = () => {
        navigate(`/customer/create`);
    };

    /**  edt  */
    const handleEdit = (customer: any) => {
        navigate(`/customer/update/${customer.id}`);
    };

    /**  delete  */
    const handleDelete = (id: string) => {
        dispatch(deleteCustomer({params, id}));
    };

    /**  on params update handler  */
    const onUpdateHandler = () => {
        dispatch(fetchCustomersRequest(params));
    }

    /**  Lifecycle  */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(onUpdateHandler, [page]);
    useMount();

    /**
     * Table columns
     * **/
    const columns: any = useMemo(() => (
        [
            {
                title: 'Full name',
                width: '120px',
                dataIndex: 'first_name',
            },
            {
                title: 'Phone',
                width: '100px',
                dataIndex: 'phone',
            },
            {
                width: '100px',
                title: 'Community',
                dataIndex: ['community', 'community'],
            },
            {
                width: '100px',
                title: 'Region',
                dataIndex: ['region', 'region'],
            },
            {
                width: '100px',
                title: 'Address',
                dataIndex: 'address',
            },
            {
                width: '70px',
                title: 'Operations',
                fixed: 'right' as 'right',
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

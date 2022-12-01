import React, {useEffect, useMemo} from "react";
import { useDispatch } from 'react-redux';
import useQueryParams from "hooks/useQueryParams";
import useTypedSelector from "hooks/useTypedSelector";
import { ICommunity } from "state/regions/types";
import { fetchUsersRequest } from "state/admins/actions";
import TableOperations from "views/shared/TableOperations";
import {fetchUsersEndpoint} from "state/admins/endpoints";
import useParametricSelector from "hooks/useParametricSelector";
import useMount from "hooks/useMount";
import {ICurrentAdmin} from "state/admins/types";
import sliceText from "utils/sliceText";

function useContainer() {
    const dispatch = useDispatch();
    const { page, params, handleChangeParams } = useQueryParams();
    const { users, usersMeta } = useTypedSelector(({admins}) => admins);
    const { endpoint: getUsersEndpoint } = fetchUsersEndpoint;
    const { isLoading: getUsersLoading } = useParametricSelector(getUsersEndpoint);

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
        dispatch(fetchUsersRequest(params));
    }

    /**  Lifecycle  */
    useEffect(onUpdateHandler, [page]);
    useMount();

    /**
     * Table columns
     * **/
    const columns = useMemo(() => ([
            {
                title: 'Full name',
                width: '20%',
                render: (_: any, record: ICurrentAdmin) =>
                    <span>{sliceText(`${record.first_name} ${record.last_name}`, 15)}</span>
            },
            {
                title: 'Community en',
                dataIndex: 'community_en',
                width: '20%',
            },
            {
                title: 'Community ru',
                dataIndex: 'community_ru',
                width: '20%',
            },
            {
                title: 'Region',
                dataIndex: ['region', 'region'],
                width: '20%',
            },
            {
                title: 'Operations',
                dataIndex: 'operation',
                render: (_: any, record: ICurrentAdmin) =>
                    <TableOperations record={record} handleEdit={handleEdit} handleDelete={handleDelete} />
            },
    ]), [users]);


    return {
        handleCreate,
        page,
        columns,
        params,
        users,
        getUsersLoading,
        usersMeta,
        handleChangeParams,
    }
}

export default useContainer;
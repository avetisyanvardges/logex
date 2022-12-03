import React, {useEffect, useMemo} from "react";
import { useDispatch } from 'react-redux';
import {Popover} from 'antd';
import useQueryParams from "hooks/useQueryParams";
import useTypedSelector from "hooks/useTypedSelector";
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
            width: 150,
            title: 'Email',
            dataIndex: 'email',
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
            title: 'Role',
            render: (_: any, record: ICurrentAdmin) =>
                <div className='role'>{record.role && record.role.map(({name, id}) =><span key={id + name}>{name}</span>)}</div>
        },
        {
            width: 100,
            fixed: 'right' as 'right',
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
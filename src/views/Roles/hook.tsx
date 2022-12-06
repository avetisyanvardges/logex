import React, {useEffect, useMemo} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom';

import useQueryParams from "hooks/useQueryParams";
import useTypedSelector from 'hooks/useTypedSelector';
import useParametricSelector from "hooks/useParametricSelector";
import useMount from "hooks/useMount";
import { fetchRolesEndpoint } from "state/roles/endpoints";
import {deleteRole, fetchRolesRequest} from 'state/roles/actions';
import {IRole} from 'state/types';
import TableOperations from 'views/shared/TableOperations';

function useContainer() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { page, params, handleChangeParams } = useQueryParams();
    const { endpoint: getRolesEndpoint } = fetchRolesEndpoint;
    const { roles, rolesMeta } = useTypedSelector(({roles}) => roles);
    const { isLoading: isFetchingRoles } = useParametricSelector(getRolesEndpoint);

    /** create  */
    const handleCreateRole = () => {
        navigate(`/roles/create`);
    }

    /** update  */
    const handleUpdateRole = ({id}: {id: number}) => {
        navigate(`/roles/update/${id}`);
    }

    /**  delete  */
    const handleDeleteRole = (id: string) => {
        dispatch(deleteRole({params, id}))
    }

    /**  on params update handler  */
    const onUpdateHandler = () => {
        dispatch(fetchRolesRequest(params));
    }

    /**  Lifecycle  */
    useEffect(onUpdateHandler, [page]);
    useMount();

    /**  Table columns  */
    const columns = useMemo(() => (
        [
            {
                title: 'Role',
                dataIndex: 'name',
                width: '50%',
            },
            {
                title: 'Operations',
                width: '50%',
                dataIndex: 'operation',
                render: (_: any, record: IRole) =>
                    <TableOperations record={record} handleEdit={handleUpdateRole} handleDelete={handleDeleteRole} />
            },
        ]
    ), [roles]);

    return {
        page,
        roles,
        rolesMeta,
        params,
        isFetchingRoles,
        columns,
        handleCreateRole,
        handleChangeParams,
    }
}

export default useContainer;
import React, {useEffect, useMemo} from "react";
import {useDispatch} from 'react-redux';
import useQueryParams from "hooks/useQueryParams";
import useTypedSelector from "hooks/useTypedSelector";
import {ICommunity} from "state/regions/types";
import {deleteCommunity, fetchCommunitiesRequest} from "state/regions/actions";
import TableOperations from "views/shared/TableOperations";
import {fetchCommunitiesEndpoint} from "state/regions/endpoints";
import useParametricSelector from "hooks/useParametricSelector";
import useMount from "hooks/useMount";
import {IPagePropsPermissions} from "state/types";
import {useNavigate} from 'react-router-dom';

function useContainer({edit, remove}: IPagePropsPermissions) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {page, params, handleChangeParams} = useQueryParams();
    const {communities, communitiesMeta} = useTypedSelector(({regions}) => regions);
    const {endpoint: getCommunitiesEndpoint} = fetchCommunitiesEndpoint;
    const {isLoading: getCommunitiesLoading} = useParametricSelector(getCommunitiesEndpoint);

    /**  create  */
    const handleCreate = () => {
        navigate('/community/create');
    };

    /**  edt  */
    const handleEdit = (community: ICommunity) => {
        navigate(`/community/update/${community.id}`);
    };

    /**  delete  */
    const handleDelete = (id: string) => {
        dispatch(deleteCommunity(id));
    };

    /**  on params update handler  */
    const onUpdateHandler = () => {
        dispatch(fetchCommunitiesRequest(params));
    }

    /**  Lifecycle  */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(onUpdateHandler, [page]);
    useMount();

    /**
     * Table columns
     * **/
    const columns = useMemo(() => (
        [
            {
                title: 'Community am',
                dataIndex: 'community_am',
                width: '20%',
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
                render: (_: any, record: ICommunity) =>
                    <TableOperations
                        isDelete={remove}
                        isEdit={edit}
                        record={record}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
            },
        ]
        // eslint-disable-next-line react-hooks/exhaustive-deps
    ), [communities]);

    return {
        handleCreate,
        page,
        communities,
        columns,
        params,
        communitiesMeta,
        getCommunitiesLoading,
        handleChangeParams,
    }
}

export default useContainer;
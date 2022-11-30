import React, {useEffect} from "react";
import {useDispatch} from "react-redux";

import useQueryParams from "hooks/useQueryParams";
import useTypedSelector from 'hooks/useTypedSelector';
import useParametricSelector from "hooks/useParametricSelector";
import {deleteRegion, fetchRegionsRequest} from "state/regions/actions";
import {fetchRegionsEndpoint} from "state/regions/endpoints";
import {IRegion} from "state/regions/types";
import {showModal} from 'state/modals/actions';
import TableOperations from 'views/shared/TableOperations';

function useContainer() {
    const dispatch = useDispatch();
    const { page, params, handleChangeParams } = useQueryParams();
    const { endpoint: getRegionsEndpoint } = fetchRegionsEndpoint;
    const { regions, meta } = useTypedSelector(({regions}) => regions);
    const { isLoading: isFetchingRegions } = useParametricSelector(getRegionsEndpoint);

    const openRegionsFormModal = (region?: IRegion) => {
        dispatch(showModal({
            modalType: 'REGIONS_FORM_MODAL',
            modalProps: {
                title: region ? 'Update Region' : 'Create region',
                region,
                params,
            }
        }))
    }

    const handleDeleteRegion = (regionId: number) => {
        dispatch(deleteRegion({
            id: String(regionId),
            params,
        }));
    }

    const onUpdateHandler = () => {
        dispatch(fetchRegionsRequest(params));
    }

    useEffect(onUpdateHandler, [page]);

    /**
     * Table columns
     * **/
    const columns = [
            {
                title: 'Region am',
                dataIndex: 'region_am',
                width: '24%',
            },
            {
                title: 'Region en',
                dataIndex: 'region_en',
                width: '24%',
            },
            {
                title: 'Region ru',
                dataIndex: 'region_ru',
                width: '24%',
            },
            {
                title: 'Operations',
                dataIndex: 'operation',
                render: (_: any, record: IRegion) =>
                    <TableOperations record={record} handleEdit={openRegionsFormModal} handleDelete={handleDeleteRegion} />
            },
        ];

    return {
        page,
        regions,
        meta,
        params,
        isFetchingRegions,
        columns,
        openRegionsFormModal,
        handleChangeParams,
    }
}

export default useContainer;
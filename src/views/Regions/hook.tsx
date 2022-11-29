import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";

import useQueryParams from "hooks/useQueryParams";
import useTypedSelector from 'hooks/useTypedSelector';
import useParametricSelector from "hooks/useParametricSelector";
import { fetchRegionsRequest } from "state/regions/actions";
import {fetchRegionsEndpoint} from "state/regions/endpoints";
import validationSchema from "lib/yupLocalised/scheme/regions";
import {IRegion} from "state/regions/types";
import {showModal} from '../../state/modals/actions';
import TableOperations from 'views/shared/TableOperations';

function useContainer() {
    const dispatch = useDispatch();
    // params
    const { page, params, handleChangeParams } = useQueryParams();
    // endpoints
    const { endpoint: getRegionsEndpoint } = fetchRegionsEndpoint;
    // selectors
    const { regions, meta } = useTypedSelector(({regions}) => regions);
    const { isLoading: isFetchingRegions } = useParametricSelector(getRegionsEndpoint);

    const onSubmit = (values: Partial<IRegion>) => {
        console.log(values)
    };

    const formik = useFormik({
        initialValues: { region_am: '', region_en: '', region_ru: '' },
        validationSchema,
        onSubmit,
    });

    const handleEdit = (record: Readonly<IRegion> & { key: React.Key }) => {
        formik.setValues({
            ...formik.values,
            region_am: record.region_am,
            region_en: record.region_en,
            region_ru: record.region_ru,
        });
    };

    const openRegionsFormModal = (region?: IRegion) => {
        console.log(region)

        // dispatch(showModal({
        //     modalType: 'REGIONS_FORM_MODAL',
        //     modalProps: {
        //         title: ''
        //     }
        // }))
    }

    const deleteRegion = (regionId: number) => {
        console.log(regionId);
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
                    <TableOperations record={record} handleEdit={openRegionsFormModal} handleDelete={deleteRegion} />
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
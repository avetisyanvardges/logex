import React, {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";

import useQueryParams from "hooks/useQueryParams";
import useTypedSelector from 'hooks/useTypedSelector';
import useParametricSelector from "hooks/useParametricSelector";
import { fetchRegionsRequest } from "state/regions/actions";
import {fetchRegionsEndpoint} from "state/regions/endpoints";
import validationSchema from "lib/yupLocalised/scheme/signIn";
import {IRegion} from "state/regions/types";

function useContainer() {
    const dispatch = useDispatch();
    const { regions, meta } = useTypedSelector(({regions}) => regions);
    const { page, params, handleChangeParams } = useQueryParams();
    const { endpoint: getRegionsEndpoint } = fetchRegionsEndpoint;
    const { isLoading: isFetchingRegions } = useParametricSelector(getRegionsEndpoint);
    const [editingKey, setEditingKey] = useState(0);

    const isEditing = (record: IRegion) => record.key === editingKey;

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
        setEditingKey(record.key);
    };

    const handleCancel = () => {
        setEditingKey(0);
    };

    const mergedColumns = useCallback((columns: any) => {
        return columns.map((col: any) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: (record: IRegion) => ({
                    record,
                    inputType: 'text',
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: isEditing(record),
                }),
            };
        });
    }, [regions]);

    const onUpdateHandler = () => {
        dispatch(fetchRegionsRequest(params));
    }

    useEffect(onUpdateHandler, [page]);

    return {
        page,
        regions,
        meta,
        params,
        formik,
        isFetchingRegions,
        editingKey,
        mergedColumns,
        handleCancel,
        isEditing,
        handleEdit,
        handleChangeParams,
    }
}

export default useContainer;
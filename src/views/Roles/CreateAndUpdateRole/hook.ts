import {useEffect, useMemo} from "react";
import {useParams} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {isEmpty} from "lodash";

import {IPermission} from "state/types";
import { createRole, fetchPermissionsRequest, fetchRolesByIdRequest, updateRole } from "state/roles/actions";
import { fetchPermissionsEndpoint, fetchRolesByIdEndpoint, createRoleEndpoint, updateRoleEndpoint } from "state/roles/endpoints";
import useMount from "hooks/useMount";
import {ICreateAndUpdateRolePayload} from 'state/roles/types';
import useParametricSelector from "hooks/useParametricSelector";
import useTypedSelector from "hooks/useTypedSelector";
import permissionName from "utils/permissionName";
import validationSchema from "lib/yupLocalised/scheme/role";

function useContainer() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { endpoint: getPermissionEndpoint } = fetchPermissionsEndpoint;
    const { endpoint: createEndpoint } = createRoleEndpoint;
    const { endpoint: updateEndpoint } = updateRoleEndpoint(id || '');
    const { endpoint: getRoleByIdEndpoint } = fetchRolesByIdEndpoint(id || '');
    const { isLoading: getPermissionsLoading } = useParametricSelector(getPermissionEndpoint);
    const { isLoading: getRoleByIdLoading } = useParametricSelector(getRoleByIdEndpoint);
    const { isLoading: createLoader, error: createError } = useParametricSelector(createEndpoint);
    const { isLoading: updateLoader, error: updateError } = useParametricSelector(createEndpoint);
    const { permissions, roleById } = useTypedSelector(({roles}) => roles);

    /** checkbox group options  */
    const options = useMemo(() => {
        return permissions.reduce((acc: { label: string, value: number }[], item: IPermission) => {
            acc.push({label: permissionName(item.name), value: item.id});
            return acc;
        }, []);
    }, [permissions]);

    /**  Formik handleSubmit  */
    const onSubmit = (values: ICreateAndUpdateRolePayload) => {
        if(id) {
            dispatch(updateRole({...values, id}));
        } else {
            dispatch(createRole(values));
        }
    }

    /**  Formik initialization  */
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: '',
            permissions: [],
        },
        validationSchema,
        initialErrors: {
            name: createError || updateError,
        },
        onSubmit,
    });

    /**  On mount handler  */
    const onMountHandler = () => {
        formik.resetForm();
        dispatch(fetchPermissionsRequest());
        if(id) dispatch(fetchRolesByIdRequest(id));
    }

    /**  On update handler  */
    const onUpdateHandler = () => {
        if(!id && isEmpty(roleById.permissions)) return;

        const checkedItems = roleById.permissions.reduce((acc: number[] | any, item: IPermission) => {
            acc.push(item.id);
            return acc;
        }, []);

        formik.setValues({
            ...formik.values,
            name: roleById.name,
            permissions: checkedItems,
        })
    }

    /**  Lifecycle  */
    useEffect(onUpdateHandler, [roleById]);
    useMount(onMountHandler);

    return {
        id,
        getPermissionsLoading,
        getRoleByIdLoading,
        formik,
        roleById,
        permissions,
        options,
        buttonLoader: createLoader || updateLoader,
    }
}

export default useContainer;
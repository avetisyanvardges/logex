import {useEffect, useMemo} from "react";
import {useParams} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {isEmpty} from "lodash";

import {IPermission} from "state/types";
import {clearRoleById, fetchPermissionsRequest, fetchRolesByIdRequest} from "state/roles/actions";
import {fetchPermissionsEndpoint, fetchRolesByIdEndpoint} from "state/roles/endpoints";
import useMount from "hooks/useMount";
import useParametricSelector from "hooks/useParametricSelector";
import useTypedSelector from "hooks/useTypedSelector";
import permissionName from "utils/permissionName";
import useUnMount from "hooks/useUnMount";
import validationSchema from "lib/yupLocalised/scheme/role";

function useContainer() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { endpoint: getPermissionEndpoint } = fetchPermissionsEndpoint;
    const { isLoading: getPermissionsLoading } = useParametricSelector(getPermissionEndpoint);
    const { endpoint: getRoleByIdEndpoint } = fetchRolesByIdEndpoint(id || '');
    const { isLoading: getRoleByIdLoading } = useParametricSelector(getRoleByIdEndpoint);
    const { permissions, roleById } = useTypedSelector(({roles}) => roles);

    /** checkbox group options  */
    const options = useMemo(() => {
        return permissions.reduce((acc: { label: string, value: number }[], item: IPermission) => {
            acc.push({label: permissionName(item.name), value: item.id});
            return acc;
        }, []);
    }, [permissions]);

    /** checkbox group selected options  */
    const defaultSelectedOptions = useMemo(() => {
        if(isEmpty(roleById.permissions)) return [];

        return roleById.permissions.reduce((acc: number[], item: IPermission) => {
            acc.push(item.id);
            return acc;
        }, []);
    }, [roleById]);

    /**  Formik handleSubmit  */
    const onSubmit = () => {
        console.log('onSubmit')
    }

    /**  Formik initialization  */
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: '',
            permissions: defaultSelectedOptions,
        },
        validationSchema,
        onSubmit,
    });

    /**  On mount handler  */
    const onMountHandler = () => {
        dispatch(fetchPermissionsRequest());
        if(id) dispatch(fetchRolesByIdRequest(id));
    }

    /**  On un mount handler  */
    const onUnMountHandler = () => {
        if(!id) return;

        dispatch(clearRoleById())
    }

    /**  On update handler  */
    const onUpdateHandler = () => {
        if(!id) return;

        formik.setValues({
            ...formik.values,
            name: roleById.name,
        })
    }

    /**  Lifecycle  */
    useUnMount(onUnMountHandler);
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
    }
}

export default useContainer;
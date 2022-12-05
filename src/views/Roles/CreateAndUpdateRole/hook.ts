import {useParams} from 'react-router-dom';
import {useDispatch} from "react-redux";
import useMount from "hooks/useMount";
import {fetchPermissionsRequest, fetchRolesByIdRequest} from "state/roles/actions";
import {fetchPermissionsEndpoint, fetchRolesByIdEndpoint} from "state/roles/endpoints";
import useParametricSelector from "hooks/useParametricSelector";
import {useFormik} from "formik";
import useTypedSelector from "hooks/useTypedSelector";
import {IPermission} from "state/types";
import {useEffect, useMemo} from "react";
import {isEmpty} from "lodash";

function useContainer() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { endpoint: getPermissionEndpoint } = fetchPermissionsEndpoint;
    const { isLoading: getPermissionsLoading } = useParametricSelector(getPermissionEndpoint);
    const { endpoint: getRoleByIdEndpoint } = fetchRolesByIdEndpoint(id || '');
    const { isLoading: getRoleByIdLoading } = useParametricSelector(getRoleByIdEndpoint);
    const { permissions, roleById } = useTypedSelector(({roles}) => roles);

    const onSubmit = () => {
        console.log('onSubmit')
    }

    /**  Formik initialization  */
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: '',
            permissions: {},
        },
        onSubmit,
    });

    console.log(formik.values)

    /**  On update handler  */
    const onUpdateHandler = () => {
        const initialValuesPermissions = permissions.reduce((acc: {[key: number]: boolean}, item: IPermission) => {
            acc[item.id] = false;
            return acc;
        }, {});

        if (isEmpty(roleById.permissions)) {
            formik.setValues({
                name: formik.values.name,
                permissions: initialValuesPermissions,
            })
            return;
        }

        const newValues = roleById.permissions.reduce((acc: {[key: number]: boolean}, item: IPermission) => {
            acc[item.id] = true;
            return acc;
        }, {});
        console.log(formik.values, 555)
        formik.setValues({
            name: formik.values.name,
            permissions: { ...initialValuesPermissions, ...newValues }
        })
    };

    /**  On mount handler  */
    const onMountHandler = () => {
        dispatch(fetchPermissionsRequest());
        if(id) dispatch(fetchRolesByIdRequest('8'));
    }

    /**  Lifecycle  */
    useMount(onMountHandler);
    useEffect(onUpdateHandler, [roleById, permissions]);

    return {
        id,
        getPermissionsLoading,
        getRoleByIdLoading,
        formik,
        roleById,
        permissions,
    }
}

export default useContainer;
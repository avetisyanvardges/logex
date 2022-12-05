import {useParams} from 'react-router-dom';
import {useDispatch} from "react-redux";
import useMount from "hooks/useMount";
import {fetchPermissionsRequest, fetchRolesByIdRequest} from "state/roles/actions";
import {fetchPermissionsEndpoint, fetchRolesByIdEndpoint} from "state/roles/endpoints";
import useParametricSelector from "hooks/useParametricSelector";
import {useFormik} from "formik";
import validationSchema from "lib/yupLocalised/scheme/regions";
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

    const initialValues = useMemo(() => {
        return permissions.reduce((acc: {[key: string]: {checked: boolean, id: number}}, item: IPermission) => {
            acc[item.name] = {checked: false, id: item.id};
            return acc;
        }, {});
    }, [permissions]);

    const onSubmit = () => {
        console.log('onSubmit')
    }

    /**  Formik initialization  */
    const formik = useFormik({
        enableReinitialize: true,
        initialValues,
        validationSchema,
        onSubmit,
    });

    /**  On update handler  */
    const onUpdateHandler = () => {
        if (isEmpty(roleById.permissions)) return;

        // const values = roleById.permissions.reduce((acc: {[key: string]: {checked: boolean, id: number}}, item: IPermission) => {
        //     acc[item.name] = {checked: false, id: item.id};
        //     return acc;
        // }, {});
    }

    /**  On mount handler  */
    const onMountHandler = () => {
        dispatch(fetchPermissionsRequest());
        if(id) dispatch(fetchRolesByIdRequest(id));
    }

    /**  Lifecycle  */
    useMount(onMountHandler);
    useEffect(onUpdateHandler, [roleById]);

    return {
        id,
        getPermissionsLoading,
        getRoleByIdLoading,
    }
}

export default useContainer;
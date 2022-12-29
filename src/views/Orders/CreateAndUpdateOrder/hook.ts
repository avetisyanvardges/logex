import {useEffect, useMemo, useState} from "react";
import {useParams} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {isEmpty} from "lodash";

import {IPermission} from "state/types";
import {ICreateAndUpdateRolePayload} from 'state/roles/types';
import { createRole, fetchPermissionsRequest, fetchRolesByIdRequest, updateRole } from "state/roles/actions";
import { fetchPermissionsEndpoint, fetchRolesByIdEndpoint, createRoleEndpoint, updateRoleEndpoint } from "state/roles/endpoints";

import useMount from "hooks/useMount";
import permissionName from "utils/permissionName";
import useTypedSelector from "hooks/useTypedSelector";
import validationSchema from "lib/yupLocalised/scheme/role";
import useParametricSelector from "hooks/useParametricSelector";
import {showModal} from "../../../state/modals/actions";

interface ISelectedCustomer { customer?: string, id?: number }


function useContainer() {
    const dispatch = useDispatch();
    const { id } = useParams();
    // endpoints
    const { endpoint: getPermissionEndpoint } = fetchPermissionsEndpoint;
    const { endpoint: createEndpoint } = createRoleEndpoint;
    const { endpoint: updateEndpoint } = updateRoleEndpoint(id || '');
    const { endpoint: getRoleByIdEndpoint } = fetchRolesByIdEndpoint(id || '');
    // selectors
    const { isLoading: getPermissionsLoading } = useParametricSelector(getPermissionEndpoint);
    const { isLoading: getRoleByIdLoading } = useParametricSelector(getRoleByIdEndpoint);
    const { isLoading: createLoader, error: createError } = useParametricSelector(createEndpoint);
    const { isLoading: updateLoader, error: updateError } = useParametricSelector(updateEndpoint);
    const { permissions, roleById } = useTypedSelector(({roles}) => roles);
    const [selectedCustomer, setSelectedCustomer] = useState<ISelectedCustomer>({});
    const [isSender, setSender] = useState<string>('');

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
    };

    /**  Formik initialization  */
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: '',
            permissions: [],
            recipient_id: '',
            sender_id: '',
            recipient_name: '',
            sender_name: ''
        },
        validationSchema,
        initialErrors: {
            name: createError?.message || updateError?.message,
        },
        onSubmit,
    });

    /**  On mount handler  */
    const onMountHandler = () => {
        formik.resetForm();
        dispatch(fetchPermissionsRequest());
        if(id) dispatch(fetchRolesByIdRequest(id));
    };

    /** open modal for select region  */
    const onSelectHandler = (customerType?:string, customer?: ISelectedCustomer) => {
        console.log(customer,999)
        if(isEmpty(customer)) return;
        formik.setValues({
            ...formik.values,
            [`${customerType}_id`]: String(customer.id),
            [`${customerType}_name`]: String(customer?.customer),
        })
    };

    const openSelectCustomerModal = (customerType: string): void => {
        dispatch(showModal({
            modalType: 'SELECT_CUSTOMER_MODAL',
            modalProps: {
                onSelectHandler: (customer: ISelectedCustomer) => onSelectHandler(customerType, customer),
                selectedCustomerId: selectedCustomer?.id,
            }
        }))
    };

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
    };

    /**  Lifecycle  */
    useEffect(onUpdateHandler, [roleById]);
    useMount(onMountHandler);

    return {
        getPermissionsLoading,
        getRoleByIdLoading,
        formik,
        roleById,
        permissions,
        options,
        buttonLoader: createLoader || updateLoader,
        openSelectCustomerModal
    }
}

export default useContainer;

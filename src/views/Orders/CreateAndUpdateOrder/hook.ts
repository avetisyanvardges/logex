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
interface ISelectedRegion {
    region?: string,
    id?: number
}

interface ISelectedCommunity {
    community?: string,
    id?: number
}


function useContainer() {
    const dispatch = useDispatch();
    const {id} = useParams();
    // endpoints

    // selectors

    const {permissions, roleById} = useTypedSelector(({roles}) => roles);
    const [selectedCustomer, setSelectedCustomer] = useState<ISelectedCustomer>({});
    const [selectedRegion, setSelectedRegion] = useState<ISelectedRegion>({});
    const [selectedCommunity, setSelectedCommunity] = useState<ISelectedCommunity>({});
    const [isSender, setSender] = useState<string>('');


    /** on change is company  */
    const onChangeIsCompany = ({target: value}: any) => {
        formik.setFieldValue('is_company', value.checked ? 1 : 0);
    };

    /**  Formik handleSubmit  */
    const onSubmit = (values: ICreateAndUpdateRolePayload) => {
       console.log(values)
    };

    /** open modal for select region  */
    const openSelectRegionModal = (region?: ISelectedRegion): void => {
        dispatch(showModal({
            modalType: 'SELECT_REGION_MODAL',
            modalProps: {
                onSelectHandler,
                selectedRegionId: selectedRegion?.id,
            }
        }))
    };

    /**  Formik initialization  */
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: '',
            permissions: [],
            is_company: 0,
            recipient_id: '',
            sender_id: '',
            recipient_name: '',
            sender_name: ''
        },
        validationSchema,
        initialErrors: {},
        onSubmit,
    });

    /**  On mount handler  */
    const onMountHandler = () => {
        formik.resetForm();
        dispatch(fetchPermissionsRequest());
        if (id) dispatch(fetchRolesByIdRequest(id));
    };

    /** open modal for select region  */
    const onSelectHandler = (customerType?: string, customer?: ISelectedCustomer) => {
        console.log(customer, 999)
        if (isEmpty(customer)) return;
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
        if (!id && isEmpty(roleById.permissions)) return;

        const checkedItems = roleById.permissions.reduce((acc: number[] | any, item: IPermission) => {
            acc.push(item.id);
            return acc;
        }, []);

    };

    /**  Lifecycle  */
    useEffect(onUpdateHandler, [roleById]);
    useMount(onMountHandler);

    return {
        formik,
        roleById,
        permissions,
        selectedCommunity,
        selectedRegion,
        openSelectCustomerModal,
        openSelectRegionModal,
        onChangeIsCompany
    };
}

export default useContainer;

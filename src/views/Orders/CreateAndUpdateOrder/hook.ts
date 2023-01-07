import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {isEmpty} from "lodash";
import {showModal} from "../../../state/modals/actions";
import {MenuProps} from "antd";
import {STATUS} from "../../../constants/statuses";
import {createOrder, fetchOrderByIdRequest, updateOrder} from "../../../state/orders/actions";
import useTypedSelector from "../../../hooks/useTypedSelector";
import useParametricSelector from "../../../hooks/useParametricSelector";
import {createOrderEndpoint, fetchOrderByIdEndpoint, updateOrderEndpoint} from "../../../state/orders/endpoints";
import useMount from "../../../hooks/useMount";

interface ISelectedCustomer { customer?: string, id?: number }

interface ISelectedRegion {
    region?: string,
    id?: number
}

function useContainer() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const [selectedWarehouse, setSelectedRegion] = useState<ISelectedRegion>({});
    const {endpoint: createEndpoint} = createOrderEndpoint;
    const {endpoint: updateEndpoint} = updateOrderEndpoint(id || '');
    const {endpoint: getOrderByIdEndpoint} = fetchOrderByIdEndpoint(id || '');
    // selectors
    const {isLoading: getOrderByIdLoading} = useParametricSelector(getOrderByIdEndpoint);
    const {isLoading: createLoader, error: createError} = useParametricSelector(createEndpoint);
    const {isLoading: updateLoader, error: updateError} = useParametricSelector(updateEndpoint);
    const {currentAdmin} = useTypedSelector(({admins}) => admins)
    const {ordersMeta, orderById} = useTypedSelector(({orders}) => orders);


    /**  Status items  */
    const statuses: MenuProps['items'] = [
        {
            key: STATUS.IN_PROCESS,
            label: 'In process',
        },
        {
            key: STATUS.CONFIRM,
            label: 'Confirm',
        },
        {
            key: STATUS.REJECT,
            label: 'Reject',
        },
        {
            key: STATUS.ACCEPTED,
            label: 'Accepted',
        },
        {
            key: STATUS.AT_WAREHOUSE,
            label: 'At warehouse',
        },
        {
            key: STATUS.ON_WAY,
            label: 'On way',
        },
        {
            key: STATUS.IN_COURIER,
            label: 'In courier',
        },
        {
            key: STATUS.RETURN,
            label: 'Return',
        },
        {
            key: STATUS.FAILED,
            label: 'Failed',
        },
        {
            key: STATUS.RECEIVED,
            label: 'Received',
        },
    ];

    /**  Change status value  */
    const onChangeStatus: MenuProps['onClick'] = ({key}) => {
        formik.setValues({...formik.values, status: key});
    };

    /**  Formik handleSubmit  */
    const onSubmit = (values: any) => {
        if (id) {
            const data: any = {order: values, id}
            dispatch(updateOrder(data));
        } else {
            dispatch(createOrder(values))
        }
    };

    /** open modal for select region  */
    const openSelectRegionModal = (region?: ISelectedRegion, fromTo?: string): void => {
        dispatch(showModal({
            modalType: 'SELECT_WAREHOUSE_MODAL',
            modalProps: {
                onSelectHandler: (warehouse: any) => onSelectHandler(warehouse, fromTo),
                selectedWarehouseId: selectedWarehouse?.id,
            }
        }))
    };

    /**  Formik initialization  */
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            user_id: currentAdmin.id,
            sender: {
                first_name: '',
                last_name: '',
                phone: '',
                address: '',
                is_company: '',
                region_id: '',
                community_id: ''
            },
            recipient: {
                first_name: '',
                last_name: '',
                phone: '',
                address: '',
                is_company: '',
                region_id: '',
                community_id: '',
            },
            is_return: 0,
            delivery_date: '',
            status: '',
            from_name: '',
            to_name: '',
            from_id: '',
            to_id: '',
            recipient_id: '',
            sender_id: '',
        },
        initialErrors: {},
        onSubmit,
    });

    /** open modal for select region  */
    const onSelectHandler = (warehouse: any, fromTo: any) => {
        if (isEmpty(warehouse)) return;
        formik.setValues({
            ...formik.values,
            [`${fromTo}_id`]: String(warehouse.id),
            [`${fromTo}_name`]: String(warehouse.warehouse),
        })
    };

    /** change return checkbox value  */
    const onChangeIsReturn = ({target: value}: any) => {
        formik.setValues({...formik.values, is_return: value.checked ? 1 : 0})
    }

    /**  On update handler  */
    const onUpdateHandler = () => {
        if (!id) return;
        formik.setValues({
            ...formik.values,
            ...orderById,
            from_name: orderById.from?.warehouse,
            from_id: orderById.from?.id,
            to_name: orderById.to?.warehouse,
            to_id: orderById.to?.id,
            recipient_id: orderById.recipient?.id,
            sender_id: orderById.sender?.id
        })
    };

    /**  On mount handler  */
    const onMountHandler = () => {
        formik.resetForm();
        if (id) dispatch(fetchOrderByIdRequest(id));
    };

    /**  Lifecycle  */
    useEffect(onUpdateHandler, [orderById]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useMount(onMountHandler);


    return {
        getOrderByIdLoading,
        formik,
        selectedWarehouse,
        statuses,
        openSelectRegionModal,
        onChangeIsReturn,
        onChangeStatus,
        buttonLoader: createLoader || updateLoader,
        orderById
    };
}

export default useContainer;

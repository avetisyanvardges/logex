import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import useParametricSelector from "../../../hooks/useParametricSelector";
import useTypedSelector from "../../../hooks/useTypedSelector";
import {createParcelEndpoint, fetchParcelByIdEndpoint, updateParcelEndpoint} from "../../../state/parcel/endpoints";
import useErrorHandler from "../../../hooks/useErrorHandler";
import {isEmpty} from "lodash";
import useMount from "../../../hooks/useMount";
import React, {useEffect, useMemo} from "react";
import {useFormik} from "formik";
import {
    addOrderRequest,
    createParcel,
    fetchParcelByIdRequest,
    removeOrderRequest,
    updateParcel
} from "../../../state/parcel/actions";
import {showModal} from "../../../state/modals/actions";
import {fetchUserByUpdateRequest} from "../../../state/admins/actions";
import {updateUsersEndpoint} from "../../../state/admins/endpoints";
import moment from "moment/moment";
import {IPagePropsPermissions} from "../../../state/types";
import useQueryParams from "../../../hooks/useQueryParams";
import {fetchOrdersEndpoint} from "../../../state/orders/endpoints";
import {deleteOrder, fetchOrdersRequest} from "../../../state/orders/actions";
import {IOrderTypes} from "../../../state/orders/types";
import TableOperations from "../../shared/TableOperations";
import addOrder from "../../../state/parcel/operations/addOrder";

interface ISelectedCourier {
    courier: any
}

function useContainer({edit, remove}: IPagePropsPermissions) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const {page, params, handleChangeParams} = useQueryParams();
    const {endpoint: createEndpoint} = createParcelEndpoint;
    const {endpoint: updateEndpoint} = updateParcelEndpoint(id || '');
    const {endpoint: getParcelByIdEndpoint} = fetchParcelByIdEndpoint(id || '');

    // selectors
    const {isLoading: getParcelByIdLoading} = useParametricSelector(getParcelByIdEndpoint);
    const {isLoading: createLoader, error: createError} = useParametricSelector(createEndpoint);
    const {isLoading: updateLoader, error: updateError} = useParametricSelector(updateEndpoint);
    const {parcelMeta, parcelById} = useTypedSelector(({parcels}) => parcels);
    const {endpoint: updateUserEndpoint} = updateUsersEndpoint(parcelById.courier_id || '');
    const {isLoading: getUserByIdLoading} = useParametricSelector(updateUserEndpoint);
    const {endpoint: getOrdersEndpoint} = fetchOrdersEndpoint;
    const {orders, ordersMeta} = useTypedSelector(({orders}) => orders);
    const {isLoading: isFetchingOrders} = useParametricSelector(getOrdersEndpoint);

    // TODO - navigate to update page
    const handleUpdateOrder = ({id}: { id: number }) => {
        navigate(`/order/update/${id}`);
    }

    // TODO - delete order
    const handleDeleteOrder = (id: string) => {
        dispatch(deleteOrder({params, id}))
    }


    // TODO - Formik handle submit
    const onSubmit = (values: any) => {
        if (id) {
            dispatch(updateParcel({id, ...values}));
        } else {
            dispatch(createParcel(values));
        }
    };

    // TODO - handler for selected courier
    const onSelectHandler = ({courier}: any) => {
        formik.setValues({
            ...formik.values,
            courier_id: courier.id,
            courier: `${courier.first_name} ${courier.last_name}`
        })
    }

    // TODO - open modal for select courier
    const openSelectCourierModal = (courier?: ISelectedCourier): void => {
        dispatch(showModal({
            modalType: 'SELECT_COURIER_MODAL',
            modalProps: {
                onSelectHandler: (courier: any) => onSelectHandler(courier),
            }
        }))
    };

    // TODO - add order to parcel
    const addOrderToParcel = (id?: number, tracking_code?: string): void => {
        dispatch(addOrderRequest({id, tracking_code}));
    };

    // TODO - add order to parcel
    const removeOrderToParcel = (id?: number, tracking_code?: string): void => {
        dispatch(removeOrderRequest({id, tracking_code}));
    };

    // TODO - Formik initialization
    const formik = useFormik({
        initialValues: {
            name: '',
            courier_id: '',
            courier: '',

        },
        onSubmit,
    });


    // TODO - error handler
    useErrorHandler({errors: {...createError?.error, ...updateError?.error}, formik});

    // TODO - handler for params update
    const onUpdateHandler = () => {
        if (!id || isEmpty(parcelById.courier_id)) return;
        dispatch(fetchUserByUpdateRequest(parcelById.courier_id, (courier) => {
            formik.setValues({
                ...formik.values,
                name: parcelById.name,
                courier: `${courier.first_name} ${courier.last_name}`,
                courier_id: parcelById.courier_id
            })
        }));
    };


    // TODO - handler for mounting
    const onMountHandler = () => {
        formik.resetForm();
        if (!id) return;
        dispatch(fetchParcelByIdRequest(id));
        dispatch(fetchOrdersRequest(params));
    };

    // TODO - Lifecycles
    useMount(onMountHandler);
    useEffect(onUpdateHandler, [parcelById]);

    const trackIsAdded = (code: any) => {
        // @ts-ignore
        return parcelById.orders?.includes(code)
    };


    // TODO - Table columns
    const columns = useMemo(() => (
        [
            {
                title: 'Tracking code',
                dataIndex: 'tracking_code',
                width: '20%',
            },
            {
                title: 'Sender',
                dataIndex: 'sender',
                width: '20%',
                render: ((sender: any) => `${sender.first_name} ${sender.last_name}`)

            },
            {
                title: 'Recipient',
                dataIndex: 'recipient',
                width: '20%',
                render: ((recipient: any) => `${recipient?.first_name} ${recipient?.last_name}`)
            },
            {
                title: 'Delivery date',
                dataIndex: 'delivery_date',
                width: '15%',
                render: ((date: string) => moment(date).format('DD.MM.YY')),
            },
            {
                title: 'Operations',
                width: '25%',
                fixed: 'right' as 'right',
                render: (_: any, {id, tracking_code}: IOrderTypes) =>
                    <div onClick={() => {
                        trackIsAdded(tracking_code) ? removeOrderToParcel(id, tracking_code) : addOrderToParcel(id, tracking_code);
                    }} style={{
                        width: 100,
                        height: 40,
                        backgroundColor: trackIsAdded(tracking_code) ? 'red' : '#5DBA2F',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    }}>
                        <p style={{color: 'white'}}>{trackIsAdded(tracking_code) ? 'Remove order' :  'Add order'}</p>
                    </div>
            },
        ]
    ), [orders]);


    return {
        formik,
        getParcelByIdLoading,
        parcelMeta,
        parcelById,
        buttonLoader: createLoader || updateLoader,
        getUserByIdLoading,
        openSelectCourierModal,
        orders,
        ordersMeta,
        page,
        params,
        handleChangeParams,
        isFetchingOrders,
        columns
    };
}

export default useContainer;

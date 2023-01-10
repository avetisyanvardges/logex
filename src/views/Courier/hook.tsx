import React, {useEffect, useMemo, useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom';
import useQueryParams from "hooks/useQueryParams";
import useTypedSelector from 'hooks/useTypedSelector';
import useParametricSelector from "hooks/useParametricSelector";
import useMount from "hooks/useMount";
import {IPagePropsPermissions} from 'state/types';
import TableOperations from 'views/shared/TableOperations';
import {
    deleteOrder,
    fetchDeliveryOrdersRequest,
    fetchOrdersRequest,
    fetchPickupOrdersRequest
} from "state/orders/actions";
import {fetchOrdersEndpoint} from "state/orders/endpoints";
import {IOrderTypes} from "state/orders/types";
import moment from "moment";

function useContainer({edit, remove}: IPagePropsPermissions) {
    const { page, params, handleChangeParams } = useQueryParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('pickup')
    const { endpoint: getOrdersEndpoint } = fetchOrdersEndpoint;
    const { orders, ordersMeta,courier_orders } = useTypedSelector(({orders}) => orders);
    const { isLoading: isFetchingOrders } = useParametricSelector(getOrdersEndpoint);

    console.log(courier_orders);

    // TODO - navigate to create page
    const handleCreateOrder = () => {
        navigate(`/order/create`);
    }

    // TODO - navigate to update page
    const handleUpdateOrder = ({id}: {id: number}) => {
        navigate(`/order/update/${id}`);
    }

    // TODO - delete order
    const handleDeleteOrder = (id: string) => {
        dispatch(deleteOrder({params, id}))
    }

    // TODO - handle params update
    const onUpdateTabs = () => {
        if(activeTab === 'pickup')  dispatch(fetchPickupOrdersRequest(params));
        if(activeTab === 'delivery')  dispatch(fetchDeliveryOrdersRequest(params));
    }

    // TODO - Lifecycle
    useEffect(onUpdateTabs, [activeTab, page]);
    useMount();

    // TODO - Table columns
    const columns = useMemo(() => (
        [
            {
                title: 'Tracking code',
                dataIndex: 'tracking_code',
                width: '100px',
            },
            {
                title: 'From',
                dataIndex: 'from',
                width: '100px',
                render: ((from: any) => `${from.warehouse}(${from.address})`)

            },
            {
                title: 'To',
                dataIndex: 'to',
                width: '100px',
                render: ((to: any) => `${to.warehouse}(${to.address})`)
            },
            {
                title: 'Delivery date',
                dataIndex: 'delivery_date',
                width: '100px',
                render: ((date: string) => moment(date).format('DD.MM.YY')),
            },
            {
                title: 'Status',
                dataIndex: 'status',
                width: '100px',
            },
            {
                title: 'Operations',
                width: '70px',
                fixed: 'right' as 'right',
                render: (_: any, record: IOrderTypes) =>
                    <TableOperations
                        isEdit={edit}
                        isDelete={remove}
                        record={record}
                        handleEdit={handleUpdateOrder}
                        handleDelete={handleDeleteOrder}
                    />
            },
        ]
    ), [orders]);

    return {
        page,
        orders,
        ordersMeta,
        params,
        isFetchingOrders,
        columns,
        handleCreateOrder,
        handleChangeParams,
        courier_orders,
        activeTab,
        setActiveTab,

    }
}

export default useContainer;

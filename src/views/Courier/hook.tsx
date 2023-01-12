import React, {useEffect, useMemo, useState} from "react";
import {useDispatch} from "react-redux";
import {Button} from 'antd';
import moment from "moment";
import useMount from "hooks/useMount";
import useQueryParams from "hooks/useQueryParams";
import useTypedSelector from 'hooks/useTypedSelector';
import useParametricSelector from "hooks/useParametricSelector";
import {fetchOrdersEndpoint} from "state/orders/endpoints";
import {IOrderTypes} from "state/orders/types";
import {showModal} from 'state/modals/actions';
import {fetchDeliveryOrdersRequest, fetchPickupOrdersRequest} from "state/orders/actions";

function useContainer() {
    const { page, params, handleChangeParams } = useQueryParams();
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState('pickup')
    const { endpoint: getOrdersEndpoint } = fetchOrdersEndpoint;
    const { orders, ordersMeta,courier_orders } = useTypedSelector(({orders}) => orders);
    const { isLoading: isFetchingOrders } = useParametricSelector(getOrdersEndpoint);
    console.log(courier_orders)

    const handleOpenModal = (tracking_code: string, title: string) => {
        dispatch(showModal({
            modalType: 'RECEIVED_AND_ACCEPTED_MODAL',
            modalProps: {tracking_code, params, title},
        }))
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
                render: ((from: any) => `${from?.warehouse}(${from?.address})`)

            },
            {
                title: 'To',
                dataIndex: 'sender',
                width: '100px',
                render: ((sender: any) => `${sender?.address}`)
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
                width: '140px',
                fixed: 'right' as 'right',
                render: (_: any, record: IOrderTypes) =>
                    <div style={{display: 'flex'}}>
                        <Button onClick={() => handleOpenModal(record?.tracking_code, 'Accepted')}>
                            Accepted
                        </Button>
                        <Button
                            onClick={() => handleOpenModal(record?.tracking_code, 'Received')}
                            style={{marginLeft: 5}}
                        >
                            Received
                        </Button>
                    </div>
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
        handleChangeParams,
        courier_orders,
        activeTab,
        setActiveTab,

    }
}

export default useContainer;

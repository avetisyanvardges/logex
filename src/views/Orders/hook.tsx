import React, {useEffect, useMemo} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom';
import useQueryParams from "hooks/useQueryParams";
import useTypedSelector from 'hooks/useTypedSelector';
import useParametricSelector from "hooks/useParametricSelector";
import useMount from "hooks/useMount";
import {IPagePropsPermissions} from 'state/types';
import TableOperations from 'views/shared/TableOperations';
import {deleteOrder, fetchOrdersRequest} from "../../state/orders/actions";
import {fetchOrdersEndpoint} from "../../state/orders/endpoints";
import {IOrderTypes} from "../../state/orders/types";
import moment from "moment";

function useContainer({edit, remove}: IPagePropsPermissions) {
    const { page, params, handleChangeParams } = useQueryParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { endpoint: getOrdersEndpoint } = fetchOrdersEndpoint;
    const { orders, ordersMeta } = useTypedSelector(({orders}) => orders);
    const { isLoading: isFetchingOrders } = useParametricSelector(getOrdersEndpoint);

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
    const onUpdateHandler = () => {
        dispatch(fetchOrdersRequest(params));
    }

    // TODO - Lifecycle
    useEffect(onUpdateHandler, [page]);
    useMount();

    // TODO - Table columns
    const columns = useMemo(() => (
        [
            {
                title: 'Tracking code',
                dataIndex: 'tracking_code',
                width: '15%',
            },
            {
                title: 'From',
                dataIndex: 'from',
                width: '20%',
                render: ((from: any) => `${from.warehouse}(${from.address})`)

            },
            {
                title: 'To',
                dataIndex: 'to',
                width: '20%',
                render: ((to: any) => `${to.warehouse}(${to.address})`)
            },
            {
                title: 'Delivery date',
                dataIndex: 'delivery_date',
                width: '20%',
                render: ((date: string) => moment(date).format('DD.MM.YY')),
            },
            {
                title: 'Status',
                dataIndex: 'status',
                width: '20%',
            },
            {
                title: 'Operations',
                width: '20%',
                dataIndex: 'operation',
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
    }
}

export default useContainer;

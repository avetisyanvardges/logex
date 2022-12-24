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

function useContainer({edit, remove}: IPagePropsPermissions) {
    const { page, params, handleChangeParams } = useQueryParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { endpoint: getOrdersEndpoint } = fetchOrdersEndpoint;
    const { orders, ordersMeta } = useTypedSelector(({orders}) => orders);
    const { isLoading: isFetchingOrders } = useParametricSelector(getOrdersEndpoint);

    /** create  */
    const handleCreateOrder = () => {
        navigate(`/order/create`);
    }




    /** update  */
    const handleUpdateOrder = ({id}: {id: number}) => {
        navigate(`/order/update/${id}`);
    }

    /**  delete  */
    const handleDeleteOrder = (id: string) => {
        dispatch(deleteOrder({params, id}))
    }

    /**  on params update handler  */
    const onUpdateHandler = () => {
        dispatch(fetchOrdersRequest(params));
    }

    /**  Lifecycle  */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(onUpdateHandler, [page]);
    useMount();

    /**  Table columns  */
    const columns = useMemo(() => (
        [
            {
                title: 'Tracking code',
                dataIndex: 'tracking_code',
                width: '50%',
            },
            {
                title: 'Status',
                dataIndex: 'status',
                width: '50%',
            },

            {
                title: 'Operations',
                width: '50%',
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

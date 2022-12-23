import React from 'react';
import AdminLayout from '../layouts/Admin';
import {useDispatch} from "react-redux";
import {fetchOrdersRequest} from "../../state/orders/actions";
import useQueryParams from "../../hooks/useQueryParams";

const Orders = () => {
    const { page, params, handleChangeParams } = useQueryParams();
    const dispatch = useDispatch();
    dispatch(fetchOrdersRequest(params))
    return (
        <AdminLayout>
            <div>Orders</div>
        </AdminLayout>
    )
}

export default Orders;

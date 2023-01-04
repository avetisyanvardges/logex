import fetchOrders from './fetchOrders';
import createOrder from './createOrder';
import updateOrder from './updateOrder';
import deleteOrder from './deleteOrder';
import fetchOrderById from "./fetchOrderById";

const regionsOperations = [
    fetchOrders,
    createOrder,
    updateOrder,
    deleteOrder,
    fetchOrderById
];

export default regionsOperations;

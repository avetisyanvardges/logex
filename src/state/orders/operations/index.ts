import fetchOrders from './fetchOrders';
import createOrder from './createOrder';
import updateOrder from './updateOrder';
import deleteOrder from './deleteOrder';

const regionsOperations = [
    fetchOrders,
    createOrder,
    updateOrder,
    deleteOrder,
];

export default regionsOperations;

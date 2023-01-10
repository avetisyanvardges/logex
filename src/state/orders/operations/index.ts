import fetchOrders from './fetchOrders';
import createOrder from './createOrder';
import updateOrder from './updateOrder';
import deleteOrder from './deleteOrder';
import fetchOrderById from "./fetchOrderById";
import acceptOrder from "./acceptOrder";
import receiveOrder from "./receiveOrder";
import fetchPickupOrders from "./fetchPickupOrders";
import fetchDeliveryOrders from "./fetchDeliveryOrders";


const regionsOperations = [
    fetchOrders,
    createOrder,
    updateOrder,
    deleteOrder,
    fetchOrderById,
    acceptOrder,
    receiveOrder,
    fetchPickupOrders,
    fetchDeliveryOrders

];

export default regionsOperations;

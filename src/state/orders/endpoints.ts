import endpoint from "utils/endpoint";

export const fetchOrdersEndpoint = endpoint('get', '/admin/orders');
export const createOrderEndpoint = endpoint('post', '/admin/orders');
export const updateOrderEndpoint = (id: string) => endpoint('put', `/admin/orders/${id}`);
export const deleteOrderEndpoint = (id: string) => endpoint('delete', `/admin/orders/${id}`);

import {IFetchOrdersSuccessPayload, IOrderTypes, OrderTypes,} from "state/orders/types";
import {ActionWithPayload, IParams, IRoleById} from "state/types";

export type fetchOrdersRequestAction = ActionWithPayload<OrderTypes.FETCH_ORDERS_REQUEST, IParams>;
export type fetchOrdersSuccessAction = ActionWithPayload<OrderTypes.FETCH_ORDERS_SUCCESS, IFetchOrdersSuccessPayload>;
export type createOrderAction = ActionWithPayload<OrderTypes.CREATE_ORDER, {order: IOrderTypes} & {params: IParams}>;
export type updateOrderAction = ActionWithPayload<OrderTypes.UPDATE_ORDER, {order: IOrderTypes} & {params: IParams}>;
export type deleteOrderAction = ActionWithPayload<OrderTypes.DELETE_ORDER, {id: string} & {params: IParams}>;

export const fetchOrdersRequest = (params: IParams) => ({
    type: OrderTypes.FETCH_ORDERS_REQUEST,
    payload: params,
});

export const fetchOrdersSuccess = (data: IFetchOrdersSuccessPayload) => ({
    type: OrderTypes.FETCH_ORDERS_SUCCESS,
    payload: data,
});
export const acceptOrderRequest = (params: IParams) => ({
    type: OrderTypes.ACCEPT_ORDER_REQUEST,
    payload: params,
});

export const acceptOrderSuccess = (data: IFetchOrdersSuccessPayload) => ({
    type: OrderTypes.ACCEPT_ORDER_SUCCESS,
    payload: data,
});

export const receivedOrderRequest = (params: IParams) => ({
    type: OrderTypes.RECEIVE_ORDER_REQUEST,
    payload: params,
});

export const receiveOrderSuccess = (data: IFetchOrdersSuccessPayload) => ({
    type: OrderTypes.RECEIVE_ORDER_SUCCESS,
    payload: data,
});

export const fetchPickupOrdersRequest = (params: IParams) => ({
    type: OrderTypes.FETCH_PICKUP_ORDERS_REQUEST,
    payload: params,
});

export const fetchPickupOrdersSuccess = (data: IFetchOrdersSuccessPayload) => ({
    type: OrderTypes.FETCH_PICKUP_ORDERS_SUCCESS,
    payload: data,
});

export const fetchDeliveryOrdersRequest = (params: IParams) => ({
    type: OrderTypes.FETCH_DELIVERY_ORDERS_REQUEST,
    payload: params,
});

export const fetchDeliveryOrdersSuccess = (data: IFetchOrdersSuccessPayload) => ({
    type: OrderTypes.FETCH_DELIVERY_ORDERS_SUCCESS,
    payload: data,
});


export const createOrder = (data: IOrderTypes) => ({
    type: OrderTypes.CREATE_ORDER,
    payload: data,
});

export const updateOrder = (data: {order: IOrderTypes, id: string} & {params: IParams}) => ({
    type: OrderTypes.UPDATE_ORDER,
    payload: data,
});

export const deleteOrder = (data: {params: IParams, id: string}) => ({
    type: OrderTypes.DELETE_ORDER,
    payload: data,
});

export const fetchOrderByIdRequest = (id: string) => ({
    type: OrderTypes.FETCH_ORDER_BY_ID_REQUEST,
    payload: id,
});

export const fetchOrderByIdSuccess = (data: IRoleById) => ({
    type: OrderTypes.FETCH_ORDER_BY_ID_SUCCESS,
    payload: data,
});

export type OrderActionTypes = fetchOrdersSuccessAction | any;

import {OrderTypes, IFetchOrdersSuccessPayload, IOrderTypes, IOrders,} from "state/orders/types";
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

export const createOrder = (data: IOrderTypes) => ({
    type: OrderTypes.CREATE_ORDER,
    payload: data,
});

export const updateOrder = (data: {order: IOrderTypes} & {params: IParams}) => ({
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

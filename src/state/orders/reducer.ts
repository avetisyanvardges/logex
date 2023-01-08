import {IOrdersState, OrderTypes} from "./types";
import {OrderActionTypes} from "./actions";

const ordersInitialState: IOrdersState = {
    ordersMeta: {},
    orders: [],
    orderById:{}
}

const orders = (state = ordersInitialState, action: OrderActionTypes) => {
    switch (action.type) {
        case OrderTypes.FETCH_ORDERS_SUCCESS:
            console.log(action.payload)
            return {...state, ordersMeta: action.payload.meta, orders: action.payload.orders};
        case OrderTypes.FETCH_ORDER_BY_ID_SUCCESS:
            return {...state, orderById: action.payload};
        default:
            return state;
    }
};

export default orders;

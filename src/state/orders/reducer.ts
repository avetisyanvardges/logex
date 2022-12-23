import {IOrdersState, OrderTypes} from "./types";
import {OrderActionTypes} from "./actions";

const ordersInitialState: IOrdersState = {
    ordersMeta: {},
    orders: [],
}

const orders = (state = ordersInitialState, action: OrderActionTypes) => {
    switch (action.type) {
        case OrderTypes.FETCH_ORDERS_SUCCESS:
            return { ...state, regionsMeta: action.payload.meta, orders: action.payload.orders };
        default:
            return state;
    }
};

export default orders;

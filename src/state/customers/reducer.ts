import {CustomersActionTypes, IInitialState} from 'state/customers/types';
import {CustomersActions} from "state/customers/actions";

const initialState: IInitialState = {
    customersMeta: {},
    customers: [],
}

const customers = (state = initialState, action: CustomersActions) => {
    switch (action.type) {
        case CustomersActionTypes.FETCH_CUSTOMERS_SUCCESS:
            return { ...state, customersMeta: action.payload.meta, customers: action.payload.customers };
        default:
            return state;
    }
};

export default customers;
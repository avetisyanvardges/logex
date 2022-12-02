import {ActionWithPayload, IMeta, IParams} from "state/types";
import {CustomersActionTypes, ICustomers} from "state/customers/types";

export type fetchCustomersRequestAction = ActionWithPayload<CustomersActionTypes.FETCH_CUSTOMERS_REQUEST, IParams>;
export type fetchCustomersSuccessAction = ActionWithPayload<CustomersActionTypes.FETCH_CUSTOMERS_SUCCESS, { meta: IMeta, customers: ICustomers[] }>;

export const fetchCustomersRequest = (params: IParams) => ({
    type: CustomersActionTypes.FETCH_CUSTOMERS_REQUEST,
    payload: params,
});

export const fetchCustomersSuccess = (data: {meta: IMeta, customers: ICustomers[]}) => ({
    type: CustomersActionTypes.FETCH_CUSTOMERS_SUCCESS,
    payload: data,
});

export type CustomersActions = fetchCustomersSuccessAction;
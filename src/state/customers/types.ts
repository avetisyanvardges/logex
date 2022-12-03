import {ICommunity} from "state/regions/types";
import {IMeta} from "state/types";

export enum CustomersActionTypes {
    FETCH_CUSTOMERS_REQUEST = 'FETCH_CUSTOMERS_REQUEST',
    FETCH_CUSTOMERS_SUCCESS = 'FETCH_CUSTOMERS_SUCCESS',
}

export interface ICustomers {
    id: number,
    first_name: string,
    last_name: string,
    phone: string,
    region: {
        id: number,
        region: string,
    }
    community: ICommunity,
    address: string,
    is_company: boolean,
}

export interface IInitialState {
    customers: ICustomers[],
    customersMeta: IMeta,
}
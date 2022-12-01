import {IMeta, IRole} from "state/types";

export enum AdminActionTypes {
    SIGN_IN_REQUEST = 'SIGN_IN_REQUEST',
    SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
    FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
}

export interface ICurrentAdmin {
    id?: string,
    first_name?: string,
    last_name?: string,
    phone?: string,
    address?: string,
    code?: string,
    email?: string,
    image?: string,
    is_company?: boolean,
    key?: number,
    role?: IRole[],
    region?: { id: number, region: string }
}

export interface IInitialState { currentAdmin: ICurrentAdmin, users: ICurrentAdmin[], usersMeta: IMeta }

export interface ISignInRequestPayload { email: string, password: string }
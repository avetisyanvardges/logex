import { AdminActionTypes, ICurrentAdmin, ISignInRequestPayload } from 'state/admins/types';
import {ActionWithPayload, IMeta, IParams} from 'state/types';

export type signInRequestAction = ActionWithPayload<AdminActionTypes.SIGN_IN_REQUEST, ISignInRequestPayload>;
export type signInSuccessAction = ActionWithPayload<AdminActionTypes.SIGN_IN_SUCCESS, ICurrentAdmin>;
export type fetchUsersRequestAction = ActionWithPayload<AdminActionTypes.FETCH_USERS_REQUEST, IParams>;
export type fetchUsersSuccessAction = ActionWithPayload<AdminActionTypes.FETCH_USERS_SUCCESS, {meta: IMeta, users: ICurrentAdmin[]}>;
export type permissionsByRoleIdRequestAction = ActionWithPayload<AdminActionTypes.PERMISSIONS_BY_ROLE_ID_REQUEST, string>;

export const signInRequest = (data: ISignInRequestPayload) => ({
    type: AdminActionTypes.SIGN_IN_REQUEST,
    payload: data,
});

export const signInSuccess = (currentAdmin: ICurrentAdmin) => ({
    type: AdminActionTypes.SIGN_IN_SUCCESS,
    payload: currentAdmin,
});

export const fetchUsersRequest = (params: IParams) => ({
    type: AdminActionTypes.FETCH_USERS_REQUEST,
    payload: params,
});

export const fetchUsersSuccess = (data: {meta: IMeta, users: ICurrentAdmin[]}) => ({
    type: AdminActionTypes.FETCH_USERS_SUCCESS,
    payload: data,
});

export const permissionsByRoleIdRequest = (id: string) => ({
    type: AdminActionTypes.PERMISSIONS_BY_ROLE_ID_REQUEST,
    payload: id,
});

export type AdminActions = signInSuccessAction | fetchUsersSuccessAction;
import {
    AdminActionTypes,
    ICurrentAdmin,
    ISignInRequestPayload,
    ICreateAndUpdateUserPayload,
    IUserByUpdate
} from 'state/admins/types';
import {ActionWithPayload, IMeta, IParams} from 'state/types';

export type signInRequestAction = ActionWithPayload<AdminActionTypes.SIGN_IN_REQUEST, ISignInRequestPayload>;
export type signInSuccessAction = ActionWithPayload<AdminActionTypes.SIGN_IN_SUCCESS, ICurrentAdmin>;
export type fetchUsersRequestAction = ActionWithPayload<AdminActionTypes.FETCH_USERS_REQUEST, IParams>;
export type fetchUsersSuccessAction = ActionWithPayload<AdminActionTypes.FETCH_USERS_SUCCESS, { meta: IMeta, users: ICurrentAdmin[] }>;
export type fetchUserByUpdateRequestAction = ActionWithPayload<AdminActionTypes.FETCH_USER_BY_UPDATE_REQUEST, string>;
export type fetchUserByUpdateSuccessAction = ActionWithPayload<AdminActionTypes.FETCH_USER_BY_UPDATE_SUCCESS, IUserByUpdate>;
export type createUserAction = ActionWithPayload<AdminActionTypes.CREATE_USER, ICreateAndUpdateUserPayload>;
export type updateUserAction = ActionWithPayload<AdminActionTypes.UPDATE_USER, {id: string, user: ICreateAndUpdateUserPayload}>;
export type deleteUserAction = ActionWithPayload<AdminActionTypes.DELETE_USER, { params: IParams, id: string }>;

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

export const fetchUsersSuccess = (data: { meta: IMeta, users: ICurrentAdmin[] }) => ({
    type: AdminActionTypes.FETCH_USERS_SUCCESS,
    payload: data,
});

export const fetchUserByUpdateRequest = (id: string) => ({
    type: AdminActionTypes.FETCH_USER_BY_UPDATE_REQUEST,
    payload: id,
});

export const fetchUserByUpdateSuccess = (user: IUserByUpdate) => ({
    type: AdminActionTypes.FETCH_USER_BY_UPDATE_SUCCESS,
    payload: user,
});

export const createUser = (user: ICreateAndUpdateUserPayload) => ({
    type: AdminActionTypes.CREATE_USER,
    payload: user,
});

export const updateUser = (data: {id: string, user: ICreateAndUpdateUserPayload}) => ({
    type: AdminActionTypes.UPDATE_USER,
    payload: data,
});

export const deleteUser = (data: { params: IParams, id: string }) => ({
    type: AdminActionTypes.DELETE_USER,
    payload: data,
});

export type AdminActions = signInSuccessAction | fetchUsersSuccessAction | fetchUserByUpdateSuccessAction;
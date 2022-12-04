import {ActionWithPayload, IMeta, IParams, IRole} from "state/types";
import {ICreateAndUpdateRolePayload, RolesTypes} from './types';

export type fetchRolesRequestAction = ActionWithPayload<RolesTypes.FETCH_ROLES_REQUEST, IParams>;
export type fetchRolesSuccessAction = ActionWithPayload<RolesTypes.FETCH_ROLES_SUCCESS, {roles: IRole[], meta: IMeta}>;
export type createRoleAction = ActionWithPayload<RolesTypes.CREATE_ROLES, ICreateAndUpdateRolePayload>;
export type updateRoleAction = ActionWithPayload<RolesTypes.UPDATE_ROLES, ICreateAndUpdateRolePayload>;
export type deleteRoleAction = ActionWithPayload<RolesTypes.DELETE_ROLES, {id: string} & {params: IParams}>;

export const fetchRolesRequest = (params: IParams) => ({
    type: RolesTypes.FETCH_ROLES_REQUEST,
    payload: params,
});

export const fetchRolesSuccess = (data: {roles: IRole[], meta: IMeta}) => ({
    type: RolesTypes.FETCH_ROLES_SUCCESS,
    payload: data,
});

export const createRole = (data: ICreateAndUpdateRolePayload) => ({
    type: RolesTypes.CREATE_ROLES,
    payload: data,
});

export const updateRole = (data: ICreateAndUpdateRolePayload) => ({
    type: RolesTypes.UPDATE_ROLES,
    payload: data,
});

export const deleteRole = (data: {params: IParams, id: string}) => ({
    type: RolesTypes.DELETE_ROLES,
    payload: data,
});

export type RolesActionTypes = fetchRolesSuccessAction;

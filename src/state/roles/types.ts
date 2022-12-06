import {IMeta, IParams, IPermission, IRole, IRoleById} from "state/types";

export enum RolesTypes {
    FETCH_ROLES_REQUEST = 'FETCH_ROLES_REQUEST',
    FETCH_ROLES_SUCCESS = 'FETCH_ROLES_SUCCESS',
    CREATE_ROLE = 'CREATE_ROLE',
    UPDATE_ROLE = 'UPDATE_ROLE',
    DELETE_ROLE = 'DELETE_ROLE',
    FETCH_PERMISSIONS_REQUEST = 'FETCH_PERMISSIONS_REQUEST',
    FETCH_PERMISSIONS_SUCCESS = 'FETCH_PERMISSIONS_SUCCESS',
    FETCH_ROLE_BY_ID_REQUEST = 'FETCH_ROLE_BY_ID_REQUEST',
    FETCH_ROLE_BY_ID_SUCCESS = 'FETCH_ROLE_BY_ID_SUCCESS',
    CLEAR_ROLE_BY_ID = 'CLEAR_ROLE_BY_ID',
}

export interface ICreateAndUpdateRolePayload {
    name: string,
    permissions: number[],
    params: IParams,
}

export interface IRolesState {
    roles: IRole[],
    rolesMeta: IMeta,
    permissions: IPermission[],
    roleById: IRoleById,
}



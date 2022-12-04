import {IMeta, IParams, IRole} from "state/types";

export enum RolesTypes {
    FETCH_ROLES_REQUEST = 'FETCH_ROLES_REQUEST',
    FETCH_ROLES_SUCCESS = 'FETCH_ROLES_SUCCESS',
    CREATE_ROLES = 'CREATE_ROLES',
    UPDATE_ROLES = 'UPDATE_ROLES',
    DELETE_ROLES = 'DELETE_ROLES',
}

export interface ICreateAndUpdateRolePayload {
    name: string,
    permissions: number[],
    params: IParams,
}

export interface IRolesState {
    roles: IRole[],
    rolesMeta: IMeta,
}



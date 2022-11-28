export enum AdminActionTypes {
    SIGN_IN_REQUEST = 'SIGN_IN_REQUEST',
    SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
}

export interface IRole {
    id: string,
    name: string,
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
    role?: Array<IRole>,
}

export interface IInitialState {
    currentAdmin: ICurrentAdmin,
}

export interface ISignInRequestPayload {
    email: string,
    password: string,
}
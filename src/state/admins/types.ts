export interface IRole {
    id: string,
    name: string,
}

export interface ICurrentAdmin {
    id: string,
    first_name: string,
    last_name: string,
    phone: string,
    address: string,
    code: string,
    email: string,
    role: Array<IRole>,
}
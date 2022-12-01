export type ActionWithPayload<T extends string, P> = { type: T; payload: P }
export type Action<T extends string> = { type: T }

export interface IParams { page: string, per_page: string }

export interface IMeta { current_page?: number, last_page?: number, total?: number }

export interface IRole { id: string, name: string }
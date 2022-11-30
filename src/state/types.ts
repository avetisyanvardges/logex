export type ActionWithPayload<T extends string, P> = { type: T; payload: P }
export type Action<T extends string> = { type: T }

export interface IParams { page: string, per_page: string }
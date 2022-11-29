export type ActionWithPayload<T extends string, P> = { type: T; payload: P }
export type Action<T extends string> = { type: T }
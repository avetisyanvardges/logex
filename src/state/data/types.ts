export enum DataRequestTypes {
    DATA_API_REQUEST = 'DATA_API_REQUEST',
    DATA_API_SUCCESS = 'DATA_API_SUCCESS',
    DATA_API_FAILURE = 'DATA_API_FAILURE',
}

export interface IEndpoint {
    endpoint: string,
}

export interface IDataApiRequestAction extends IEndpoint {
    type: DataRequestTypes.DATA_API_REQUEST,
}

export interface IDataApiSuccessPayload extends IEndpoint {
    response: any,
}

export interface IDataApiSuccessAction extends IDataApiSuccessPayload {
    type: DataRequestTypes.DATA_API_SUCCESS,
}

export interface IDataApiFailurePayload extends IEndpoint {
    error: any,
}

export interface IDataApiFailureAction extends IDataApiFailurePayload {
    type: DataRequestTypes.DATA_API_FAILURE,
}

export type DataRequestActions = IDataApiRequestAction | IDataApiSuccessAction | IDataApiFailureAction;
import {
    DataRequestTypes,
    IDataApiRequestAction,
    IDataApiSuccessAction,
    IEndpoint,
    IDataApiSuccessPayload,
    IDataApiFailurePayload,
    IDataApiFailureAction,
    IClearDataReducerAction,
} from "state/data/types";

export const dataApiRequest = ({ endpoint }: IEndpoint): IDataApiRequestAction => ({
    type: DataRequestTypes.DATA_API_REQUEST,
    endpoint,
});

export const dataApiSuccess = ({ endpoint, response }: IDataApiSuccessPayload): IDataApiSuccessAction => ({
    type: DataRequestTypes.DATA_API_SUCCESS,
    endpoint,
    response,
});

export const dataApiFailure = ({ endpoint, error }: IDataApiFailurePayload): IDataApiFailureAction => ({
    type: DataRequestTypes.DATA_API_FAILURE,
    error,
    endpoint,
});

export const clearDataReducer = (): IClearDataReducerAction => ({
    type: DataRequestTypes.CLEAR_DATA_REDUCER,
});
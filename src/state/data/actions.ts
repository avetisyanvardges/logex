import { DataRequestTypes, IEndpoint, IDataApiSuccessPayload, IDataApiFailurePayload } from "state/data/types";
import { ActionWithPayload, Action } from 'state/createActions';

export type dataApiRequestAction = ActionWithPayload<DataRequestTypes.DATA_API_REQUEST, IEndpoint>;
export type dataApiSuccessAction = ActionWithPayload<DataRequestTypes.DATA_API_SUCCESS, IDataApiSuccessPayload>;
export type dataApiFailureAction = ActionWithPayload<DataRequestTypes.DATA_API_FAILURE, IDataApiFailurePayload>;
export type clearDataReducerAction = Action<DataRequestTypes.CLEAR_DATA_REDUCER>;

export const dataApiRequest = ({ endpoint }: IEndpoint): dataApiRequestAction => ({
    type: DataRequestTypes.DATA_API_REQUEST,
    payload: {endpoint},
});

export const dataApiSuccess = ({ endpoint, response }: IDataApiSuccessPayload): dataApiSuccessAction => ({
    type: DataRequestTypes.DATA_API_SUCCESS,
    payload: { endpoint, response },
});

export const dataApiFailure = ({ endpoint, error }: IDataApiFailurePayload): dataApiFailureAction => ({
    type: DataRequestTypes.DATA_API_FAILURE,
    payload: { endpoint, error },
});

export const clearDataReducer = (): clearDataReducerAction => ({
    type: DataRequestTypes.CLEAR_DATA_REDUCER,
});

export type DataRequestActions = dataApiRequestAction | dataApiSuccessAction | dataApiFailureAction | clearDataReducerAction;
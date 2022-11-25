import { DataRequestActions, DataRequestTypes } from 'state/data/types';

interface IInitialState {
    [key: string]: any,
}

const dataReducer = (state: IInitialState = {}, action: DataRequestActions) => {
    switch (action.type) {
        case DataRequestTypes.DATA_API_REQUEST:
            return {
                ...state,
                [action.endpoint]: { loading: true },
            };
        case DataRequestTypes.DATA_API_SUCCESS:
            return {
                ...state,
                [action.endpoint]: { loading: false, response: action.response },
            };
        case DataRequestTypes.DATA_API_FAILURE:
            return {
                ...state,
                [action.endpoint]: { loading: false, error: action.error.message || null },
            };
        default:
            return state;
    }
};

export default dataReducer;

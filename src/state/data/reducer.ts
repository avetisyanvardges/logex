import { DataRequestTypes } from 'state/data/types';
import {DataRequestActions} from 'state/data/actions';

interface IInitialState {
    [key: string]: any,
}

const dataReducer = (state: IInitialState = {}, action: DataRequestActions) => {
    switch (action.type) {
        case DataRequestTypes.DATA_API_REQUEST:
            return {
                ...state,
                [action.payload.endpoint]: { loading: true },
            };
        case DataRequestTypes.DATA_API_SUCCESS:
            return {
                ...state,
                [action.payload.endpoint]: { loading: false, response: action.payload.response },
            };
        case DataRequestTypes.DATA_API_FAILURE:
            return {
                ...state,
                [action.payload.endpoint]: { loading: false, error: action.payload.error || null },
            };

        case DataRequestTypes.CLEAR_DATA_REDUCER: return {};
        default: return state;
    }
};

export default dataReducer;

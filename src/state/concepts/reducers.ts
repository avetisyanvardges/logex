import {combineReducers} from "redux";
import {ConceptTypes, IRegionsState, RegionActionTypes} from 'state/concepts/types';

const regionsInitialState: IRegionsState = {
    meta: {},
    regions: [],
}

const regions = (state = regionsInitialState, action: RegionActionTypes) => {
    switch (action.type) {
        case ConceptTypes.FETCH_REGIONS_SUCCESS:
            return { ...state, meta: action.meta, regions: action.regions };
        default:
            return state;
    }
};

export default combineReducers({
    regions,
});
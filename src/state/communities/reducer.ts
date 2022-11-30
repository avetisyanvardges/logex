import {RegionsTypes, IRegionsState} from 'state/regions/types';
import {RegionActionTypes} from 'state/regions/actions';

const regionsInitialState: IRegionsState = {
    meta: {},
    regions: [],
}

const communities = (state = regionsInitialState, action: RegionActionTypes) => {
    switch (action.type) {
        case RegionsTypes.FETCH_REGIONS_SUCCESS:
            return { ...state, meta: action.payload.meta, regions: action.payload.regions };
        default:
            return state;
    }
};

export default communities;
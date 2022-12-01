import {RegionsTypes, IRegionsState} from 'state/regions/types';
import {RegionActionTypes} from 'state/regions/actions';

const regionsInitialState: IRegionsState = {
    regionsMeta: {},
    regions: [],
    communities: [],
    communitiesMeta: {},
}

const regions = (state = regionsInitialState, action: RegionActionTypes) => {
    switch (action.type) {
        case RegionsTypes.FETCH_REGIONS_SUCCESS:
            return { ...state, regionsMeta: action.payload.meta, regions: action.payload.regions };
        case RegionsTypes.FETCH_COMMUNITIES_SUCCESS:
            return { ...state, communitiesMeta: action.payload.meta, communities: action.payload.communities };
        default:
            return state;
    }
};

export default regions;
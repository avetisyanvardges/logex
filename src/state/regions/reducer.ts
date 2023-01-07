import {IRegionsState, RegionsTypes} from 'state/regions/types';
import {RegionActionTypes} from 'state/regions/actions';

const regionsInitialState: IRegionsState = {
    regionsMeta: {},
    regions: [],
    regionById: {},
    communities: [],
    communitiesMeta: {},
    communityById: {},
}

const regions = (state = regionsInitialState, action: RegionActionTypes) => {
    switch (action.type) {
        case RegionsTypes.FETCH_REGIONS_SUCCESS:
            return { ...state, regionsMeta: action.payload.meta, regions: action.payload.regions };
        case RegionsTypes.FETCH_COMMUNITIES_SUCCESS:
            return { ...state, communitiesMeta: action.payload.meta, communities: action.payload.communities };
        case RegionsTypes.FETCH_COMMUNITY_BY_ID_SUCCESS:
            return { ...state, communityById: action.payload };
        case RegionsTypes.FETCH_REGION_BY_ID_SUCCESS:
            return { ...state, regionById: action.payload };
        default:
            return state;
    }
};

export default regions;

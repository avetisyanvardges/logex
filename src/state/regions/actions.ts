import { RegionsTypes, IParams, IFetchRegionsSuccessPayload } from "state/regions/types";
import {ActionWithPayload} from "state/createActions";

export type fetchRegionsRequestAction = ActionWithPayload<RegionsTypes.FETCH_REGIONS_REQUEST, IParams>;
export type fetchRegionsSuccessAction = ActionWithPayload<RegionsTypes.FETCH_REGIONS_SUCCESS, IFetchRegionsSuccessPayload>;

export const fetchRegionsRequest = (params: IParams):fetchRegionsRequestAction => ({
    type: RegionsTypes.FETCH_REGIONS_REQUEST,
    payload: params,
});

export const fetchRegionsSuccess = (data: IFetchRegionsSuccessPayload):fetchRegionsSuccessAction => ({
    type: RegionsTypes.FETCH_REGIONS_SUCCESS,
    payload: data,
});

export type RegionActionTypes = fetchRegionsRequestAction | fetchRegionsSuccessAction;


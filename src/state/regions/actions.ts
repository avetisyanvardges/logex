import {RegionsTypes, IFetchRegionsSuccessPayload, IRegionTypes, IRegion} from "state/regions/types";
import {ActionWithPayload, IParams} from "state/types";

export type fetchRegionsRequestAction = ActionWithPayload<RegionsTypes.FETCH_REGIONS_REQUEST, IParams>;
export type fetchRegionsSuccessAction = ActionWithPayload<RegionsTypes.FETCH_REGIONS_SUCCESS, IFetchRegionsSuccessPayload>;
export type createRegionAction = ActionWithPayload<RegionsTypes.CREATE_REGION, {region: IRegionTypes} & {params: IParams}>;
export type updateRegionAction = ActionWithPayload<RegionsTypes.UPDATE_REGION, {region: IRegion} & {params: IParams}>;
export type deleteRegionAction = ActionWithPayload<RegionsTypes.DELETE_REGION, {id: string} & {params: IParams}>;

export const fetchRegionsRequest = (params: IParams):fetchRegionsRequestAction => ({
    type: RegionsTypes.FETCH_REGIONS_REQUEST,
    payload: params,
});

export const fetchRegionsSuccess = (data: IFetchRegionsSuccessPayload):fetchRegionsSuccessAction => ({
    type: RegionsTypes.FETCH_REGIONS_SUCCESS,
    payload: data,
});

export const createRegion = (data: {region: IRegionTypes} & {params: IParams}):createRegionAction => ({
    type: RegionsTypes.CREATE_REGION,
    payload: data,
});

export const updateRegion = (data: {region: IRegion} & {params: IParams}):updateRegionAction => ({
    type: RegionsTypes.UPDATE_REGION,
    payload: data,
});

export const deleteRegion = (data: {params: IParams, id: string}):deleteRegionAction => ({
    type: RegionsTypes.DELETE_REGION,
    payload: data,
});

export type RegionActionTypes = fetchRegionsRequestAction | fetchRegionsSuccessAction;

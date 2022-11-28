import {ActionWithPayload} from "state/createActions";

export enum ConceptTypes {
    FETCH_REGIONS_REQUEST = 'FETCH_REGIONS_REQUEST',
    FETCH_REGIONS_SUCCESS = 'FETCH_REGIONS_SUCCESS',
    CREATE_REGION = 'CREATE_REGION',
    UPDATE_REGION = 'UPDATE_REGION',
    DELETE_REGION = 'DELETE_REGION',
}

export interface IParams {
    page: string,
    per_page: string,
}

export interface IMeta {
    current_page: number,
    last_page: number,
    total: number,
}

// regions

export interface IRegions {
    id: number,
    region_am: string,
    region_en: string,
    region_ru: string,
}

export interface IRegionsState {
    meta: IMeta | object,
    regions: IRegions | object,
}

export interface IFetchRegionsSuccessAction extends IRegionsState {
    type: ConceptTypes.FETCH_REGIONS_SUCCESS,
}

export type RegionActionTypes = fetchRegionsRequestAction | IFetchRegionsSuccessAction;






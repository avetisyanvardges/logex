import {IMeta} from "state/types";

export enum RegionsTypes {
    FETCH_REGIONS_REQUEST = 'FETCH_REGIONS_REQUEST',
    FETCH_REGIONS_SUCCESS = 'FETCH_REGIONS_SUCCESS',
    CREATE_REGION = 'CREATE_REGION',
    UPDATE_REGION = 'UPDATE_REGION',
    DELETE_REGION = 'DELETE_REGION',
    FETCH_COMMUNITIES_REQUEST = 'FETCH_COMMUNITIES_REQUEST',
    FETCH_COMMUNITIES_SUCCESS = 'FETCH_COMMUNITIES_SUCCESS',
    FETCH_COMMUNITY_BY_ID_REQUEST = 'FETCH_COMMUNITY_BY_ID_REQUEST',
    FETCH_COMMUNITY_BY_ID_SUCCESS = 'FETCH_COMMUNITY_BY_ID_SUCCESS',
    CREATE_COMMUNITY = 'CREATE_COMMUNITY',
    UPDATE_COMMUNITY = 'UPDATE_COMMUNITY',
    DELETE_COMMUNITY = 'DELETE_COMMUNITY',
}

export interface IRegionTypes { region_am: string, region_en: string, region_ru: string }

export interface IRegion extends IRegionTypes { id: number }

export interface IFetchRegionsSuccessPayload { meta: IMeta, regions: IRegion[] }

export interface ICommunity { community: string, id: number, region: { id: number, region: string }}

export interface ICommunityById {
    community_am: string, community_en: string, community_ru: string, id: number, region: { id: number, region: string }
}

export interface IRegionsState {
    regionsMeta: IMeta,
    regions: IRegion[],
    communities: ICommunity[],
    communitiesMeta: IMeta,
    communityById: any,
}

export interface IFetchCommunitiesSuccessPayload { meta: IMeta, communities: ICommunity[] }




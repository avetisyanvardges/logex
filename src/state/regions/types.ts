export enum RegionsTypes {
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
    current_page?: number,
    last_page?: number,
    total?: number,
}

export interface IRegion {
    id: number,
    key: number,
    region_am: string,
    region_en: string,
    region_ru: string,
}

export interface IFetchRegionsSuccessPayload {
    meta: IMeta,
    regions: IRegion[],
}

export interface IRegionsState {
    meta: IMeta,
    regions: IRegion[],
}




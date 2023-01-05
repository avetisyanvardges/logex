import {IMeta} from "state/types";

export enum ParcelTypes {
    FETCH_PARCELS_REQUEST = 'FETCH_PARCELS_REQUEST',
    FETCH_PARCELS_SUCCESS = 'FETCH_PARCELS_SUCCESS',
    CREATE_PARCEL = 'CREATE_PARCEL',
    UPDATE_PARCEL = 'UPDATE_PARCEL',
    DELETE_PARCEL = 'DELETE_PARCEL',
    FETCH_PERMISSIONS_REQUEST = 'FETCH_PERMISSIONS_REQUEST',
    FETCH_PERMISSIONS_SUCCESS = 'FETCH_PERMISSIONS_SUCCESS',
    FETCH_PARCEL_BY_ID_REQUEST = 'FETCH_PARCEL_BY_ID_REQUEST',
    FETCH_PARCEL_BY_ID_SUCCESS = 'FETCH_PARCEL_BY_ID_SUCCESS',
}

export interface ICreateAndUpdateParcelPayload {
    name: string,
    permissions: number[],
}

export interface IParcel {
    id?: number,
    name?: string,
    courier_id?: string,
    created_at?: string,
    updated_at?: string,
    deleted_at?: string | null
}

export interface IParcelState {
    parcel: IParcel[],
    parcelMeta: IMeta,
    parcelById: IParcel,
}



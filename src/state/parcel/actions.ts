import {Action, ActionWithPayload, IMeta, IParams, IPermission} from "state/types";
import {ICreateAndUpdateParcelPayload, IParcel, ParcelTypes} from './types';

export type fetchParcelRequestAction = ActionWithPayload<ParcelTypes.FETCH_PARCELS_REQUEST, IParams>;
export type fetchParcelSuccessAction = ActionWithPayload<ParcelTypes.FETCH_PARCELS_SUCCESS, {parcel: IParcel[], meta: IMeta}>;
export type createParcelAction = ActionWithPayload<ParcelTypes.CREATE_PARCEL, ICreateAndUpdateParcelPayload>;
export type updateParcelAction = ActionWithPayload<ParcelTypes.UPDATE_PARCEL, ICreateAndUpdateParcelPayload & {id: string}>;
export type deleteParcelAction = ActionWithPayload<ParcelTypes.DELETE_PARCEL, {id: string} & {params: IParams}>;
export type fetchPermissionsRequestAction = Action<ParcelTypes.FETCH_PERMISSIONS_REQUEST>;
export type fetchPermissionsSuccessAction = ActionWithPayload<ParcelTypes.FETCH_PERMISSIONS_SUCCESS, IPermission[]>;
export type fetchParcelByIdRequestAction = ActionWithPayload<ParcelTypes.FETCH_PARCEL_BY_ID_REQUEST, string>;
export type fetchParcelByIdSuccessAction = ActionWithPayload<ParcelTypes.FETCH_PARCEL_BY_ID_SUCCESS, IParcel>;

export const fetchParcelRequest = (params: IParams) => ({
    type: ParcelTypes.FETCH_PARCELS_REQUEST,
    payload: params,
});

export const fetchParcelSuccess = (data: {parcel: IParcel[], meta: IMeta}) => ({
    type: ParcelTypes.FETCH_PARCELS_SUCCESS,
    payload: data,
});

export const createParcel = (data: ICreateAndUpdateParcelPayload) => ({
    type: ParcelTypes.CREATE_PARCEL,
    payload: data,
});

export const updateParcel = (data: ICreateAndUpdateParcelPayload & {id: string}) => ({
    type: ParcelTypes.UPDATE_PARCEL,
    payload: data,
});

export const deleteParcel = (data: {params: IParams, id: string}) => ({
    type: ParcelTypes.DELETE_PARCEL,
    payload: data,
});

export const fetchPermissionsRequest = () => ({
    type: ParcelTypes.FETCH_PERMISSIONS_REQUEST,
});

export const fetchPermissionsSuccess = (data: IPermission[]) => ({
    type: ParcelTypes.FETCH_PERMISSIONS_SUCCESS,
    payload: data,
});

export const fetchParcelByIdRequest = (id: string) => ({
    type: ParcelTypes.FETCH_PARCEL_BY_ID_REQUEST,
    payload: id,
});

export const fetchParcelByIdSuccess = (data: IParcel) => ({
    type: ParcelTypes.FETCH_PARCEL_BY_ID_SUCCESS,
    payload: data,
});

export type ParcelActionTypes = fetchParcelSuccessAction | fetchParcelByIdSuccessAction;

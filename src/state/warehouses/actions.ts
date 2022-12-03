import {ActionWithPayload, IMeta, IParams} from "state/types";
import {WarehousesActionTypes, IWarehouse} from "state/warehouses/types";

export type fetchWarehousesRequestAction = ActionWithPayload<WarehousesActionTypes.FETCH_WAREHOUSES_REQUEST, IParams>;
export type fetchWarehousesSuccessAction =
    ActionWithPayload<WarehousesActionTypes.FETCH_WAREHOUSES_SUCCESS, { meta: IMeta, warehouses: IWarehouse[] }>;

export const fetchWarehousesRequest = (params: IParams) => ({
    type: WarehousesActionTypes.FETCH_WAREHOUSES_REQUEST,
    payload: params,
});

export const fetchWarehousesSuccess = (data: {meta: IMeta, warehouses: IWarehouse[]}) => ({
    type: WarehousesActionTypes.FETCH_WAREHOUSES_SUCCESS,
    payload: data,
});

export type WarehousesActions = fetchWarehousesSuccessAction;
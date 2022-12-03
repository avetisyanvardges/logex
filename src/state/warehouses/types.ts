import {IMeta} from "state/types";

export enum WarehousesActionTypes {
    FETCH_WAREHOUSES_REQUEST = 'FETCH_WAREHOUSES_REQUEST',
    FETCH_WAREHOUSES_SUCCESS = 'FETCH_WAREHOUSES_SUCCESS',
}

export interface IWarehouse {
    id: number,
    warehouse_en: string,
    warehouse_am: string,
    warehouse_ru: string,
    open_at: string,
    close_at: string,
    code: string,
    address: string,
    latitude: number | null,
    longitude: number | null,
    region_id: string,
}

export interface IInitialState {
    warehouses: IWarehouse[],
    warehousesMeta: IMeta,
}
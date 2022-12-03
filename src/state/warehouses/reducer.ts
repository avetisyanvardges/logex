import {WarehousesActionTypes, IInitialState} from 'state/warehouses/types';
import {WarehousesActions} from './actions';

const initialState: IInitialState = {
    warehouses: [],
    warehousesMeta: {},
}

const warehouses = (state = initialState, action: WarehousesActions) => {
    switch (action.type) {
        case WarehousesActionTypes.FETCH_WAREHOUSES_SUCCESS:
            return { ...state, warehousesMeta: action.payload.meta, warehouses: action.payload.warehouses };
        default:
            return state;
    }
};

export default warehouses;
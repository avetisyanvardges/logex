import { combineReducers } from "redux";

import modals from "state/modals/reducer";
import data from "state/data/reducer";
import admins from "state/admins/reducer";
import regions from "state/regions/reducer";
import customers from "state/customers/reducer";
import warehouses from "state/warehouses/reducer";
import roles from "state/roles/reducer";
import orders from "../orders/reducer";

export const rootReducer = combineReducers({
    modals,
    data,
    admins,
    regions,
    customers,
    warehouses,
    roles,
    orders
});

export type RootState = ReturnType<typeof rootReducer>

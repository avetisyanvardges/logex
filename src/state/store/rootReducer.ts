import { combineReducers } from "redux";

import modals from "state/modals/reducer";
import data from "state/data/reducer";
import admins from "state/admins/reducer";
import regions from "state/regions/reducer";

export const rootReducer = combineReducers({
    modals,
    data,
    admins,
    regions,
});

export type RootState = ReturnType<typeof rootReducer>
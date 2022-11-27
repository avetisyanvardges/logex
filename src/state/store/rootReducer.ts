import { combineReducers } from "redux";

import modals from "state/modals/reducer";
import data from "state/data/reducer";
import admins from "state/admins/reducer";

export const rootReducer = combineReducers({
    modals,
    data,
    admins,
});

export type RootState = ReturnType<typeof rootReducer>
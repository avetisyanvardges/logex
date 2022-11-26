import { combineReducers } from "redux";

import modals from "state/modals/reducer";
import dataReducer from "state/data/reducer";
import adminsReducer from "state/admins/reducer";

export const rootReducer = combineReducers({
    modals,
    dataReducer,
    adminsReducer,
});

export type RootState = ReturnType<typeof rootReducer>
import { combineReducers } from "redux";

import modals from "state/modals/reducer";
import dataReducer from "state/data/reducer";

export const rootReducer = combineReducers({
    modals,
    dataReducer,
});

export type RootState = ReturnType<typeof rootReducer>
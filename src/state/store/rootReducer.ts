import { combineReducers } from "redux";

import modals from "state/modals/reducer";

export const rootReducer = combineReducers({
    modals,
});

export type RootState = ReturnType<typeof rootReducer>
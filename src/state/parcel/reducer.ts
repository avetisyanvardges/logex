import {IParcelState, ParcelTypes} from "./types";
import {ParcelActionTypes} from "./actions";

const initialState: IParcelState = {
    parcel: [],
    parcelMeta: {},
    parcelById: {},
}

const parcels = (state = initialState, action: ParcelActionTypes) => {
    switch (action.type) {
        case ParcelTypes.FETCH_PARCELS_SUCCESS:
            console.log(action.payload)
            return { ...state, parcel: action.payload.parcel, parcelMeta: action.payload.meta };
        case ParcelTypes.FETCH_PARCEL_BY_ID_SUCCESS:
            return { ...state, roleById: action.payload };
        default:
            return state;
    }
};

export default parcels;

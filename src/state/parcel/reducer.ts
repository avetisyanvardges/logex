import {IParcelState, ParcelTypes} from "./types";
import {ParcelActionTypes} from "./actions";

const initialState: IParcelState = {
    parcel: [],
    parcelMeta: {},
    parcelById: {
        id: 0,
        name: '',
        courier_id: '',
        orders: []
    },
}

const parcels = (state = initialState, action: ParcelActionTypes) => {
    switch (action.type) {
        case ParcelTypes.FETCH_PARCELS_SUCCESS:
            console.log(action.payload)
            return { ...state, parcel: action.payload.parcel, parcelMeta: action.payload.meta };
        case ParcelTypes.FETCH_PARCEL_BY_ID_SUCCESS:
            const newObj = action.payload
            const newOrders = newObj.orders
            const ordersList = newOrders?.reduce((acc: any, item: any, index) => {
                acc.push(item.tracking_code)
                return acc;
            }, []);
            newObj.orders = ordersList
            return { ...state, parcelById: newObj };
        default:
            return state;
    }
};

export default parcels;

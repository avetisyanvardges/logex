import {AxiosInstance} from 'axios';
import {createLogic} from 'redux-logic';
import {fetchParcelByIdRequestAction, fetchParcelByIdSuccess} from "../actions";
import {ParcelTypes} from "../types";
import {fetchParcelsByIdEndpoint} from "../endpoints";

interface IDependencies {
    httpClient: AxiosInstance,
    action: fetchParcelByIdRequestAction,
}

const fetchParcelById = createLogic({
    type: ParcelTypes.FETCH_PARCEL_BY_ID_REQUEST,
    latest: true,

    async process({ action, httpClient }: IDependencies, dispatch, done) {
        const { url } = fetchParcelsByIdEndpoint(action.payload);

        try {
            const {data: { data }} = await httpClient.get(url);
            dispatch(fetchParcelByIdSuccess(data));

        }catch {
            // take in httpClient
        }
        done();
    },
});

export default fetchParcelById;

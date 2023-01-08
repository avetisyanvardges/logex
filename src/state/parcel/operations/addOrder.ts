import {AxiosInstance} from 'axios';
import {createLogic} from 'redux-logic';
import {ParcelTypes} from "../types";
import {removeOrderEndpoint} from "../endpoints";

interface IDependencies {
    httpClient: AxiosInstance,
    action: any,
}
const addOrder = createLogic({
    type: ParcelTypes.ADD_ORDER_REQUEST,
    latest: true,

    async process({ action, httpClient }: IDependencies, dispatch, done) {
        const { url } = removeOrderEndpoint(action.payload.id);

        try {

            await httpClient.post(url, {tracking_code: action.payload.tracking_code});

        }catch {
            // take in httpClient
        }
        done();
    },
});

export default addOrder;

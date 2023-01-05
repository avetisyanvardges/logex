import {AxiosInstance} from 'axios';
import {createLogic} from 'redux-logic';
import {createRegionAction} from 'state/regions/actions';
import {OrderTypes} from "../types";
import {createOrderEndpoint} from "../endpoints";

interface IDependencies {
    httpClient: AxiosInstance,
    action: createRegionAction,
}
const createOrder = createLogic({
    type: OrderTypes.CREATE_ORDER,
    latest: true,

    async process({ action, httpClient }: IDependencies, dispatch, done) {
        const { url } = createOrderEndpoint;

        try {
            const {data: {data}} = await httpClient.post(url, action.payload);
            console.log(data, 999);

        }catch {
            // take in httpClient
        }
        done();
    },
});

export default createOrder;

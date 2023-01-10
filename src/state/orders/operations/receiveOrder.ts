import {AxiosInstance} from 'axios';
import {createLogic} from 'redux-logic';
import {fetchRegionsRequestAction} from 'state/regions/actions';
import {receiveOrderEndpoint} from "../endpoints";
import {OrderTypes} from "../types";
import {receiveOrderSuccess} from "../actions";

interface IDependencies {
    httpClient: AxiosInstance,
    action: fetchRegionsRequestAction,
}

const receiveOrder = createLogic({
    type: OrderTypes.RECEIVE_ORDER_REQUEST,
    latest: true,

    async process({ action, httpClient }: IDependencies, dispatch, done) {
        const { url } = receiveOrderEndpoint;

        try {
            const {data: { data }} = await httpClient.post(url, { params: action.payload });
            const metaData = {
                current_page: data.meta.current_page,
                last_page: data.meta.last_page,
                total: data.meta.total
            }
            dispatch(receiveOrderSuccess({ meta: metaData, orders: data.data    }));

        }catch {
            // take in httpClient
        }
        done();
    },
});

export default receiveOrder;

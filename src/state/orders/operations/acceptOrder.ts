import {AxiosInstance} from 'axios';
import {createLogic} from 'redux-logic';
import {fetchRegionsRequestAction} from 'state/regions/actions';
import {acceptOrderEndpoint} from "../endpoints";
import {OrderTypes} from "../types";
import {acceptOrderSuccess} from "../actions";

interface IDependencies {
    httpClient: AxiosInstance,
    action: fetchRegionsRequestAction,
}

const acceptOrder = createLogic({
    type: OrderTypes.ACCEPT_ORDER_REQUEST,
    latest: true,

    async process({ action, httpClient }: IDependencies, dispatch, done) {
        const { url } = acceptOrderEndpoint;
        console.log(url)
        try {
            const {data: { data }} = await httpClient.post(url, { params: action.payload });
            const metaData = {
                current_page: data.meta.current_page,
                last_page: data.meta.last_page,
                total: data.meta.total
            }
            dispatch(acceptOrderSuccess({ meta: metaData, orders: data.data    }));

        }catch {
            // take in httpClient
        }
        done();
    },
});

export default acceptOrder;

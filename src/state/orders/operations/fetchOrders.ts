import {AxiosInstance} from 'axios';
import {createLogic} from 'redux-logic';

import {RegionsTypes} from "state/regions/types";
import {fetchRegionsRequestAction, fetchRegionsSuccess} from 'state/regions/actions';
import {fetchOrdersEndpoint} from "../endpoints";
import {OrderTypes} from "../types";
import {fetchOrdersSuccess} from "../actions";

interface IDependencies {
    httpClient: AxiosInstance,
    action: fetchRegionsRequestAction,
}

const fetchOrders = createLogic({
    type: OrderTypes.FETCH_ORDERS_REQUEST,
    latest: true,

    async process({ action, httpClient }: IDependencies, dispatch, done) {
        const { url } = fetchOrdersEndpoint;

        try {
            const {data: { data }} = await httpClient.get(url, { params: action.payload });
            const metaData = {
                current_page: data.meta.current_page,
                last_page: data.meta.last_page,
                total: data.meta.total
            }
            console.log(data)
            dispatch(fetchOrdersSuccess({ meta: metaData, orders: data.data }));

        }catch {
            // take in httpClient
        }
        done();
    },
});

export default fetchOrders;

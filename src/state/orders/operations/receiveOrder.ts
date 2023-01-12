import {AxiosInstance} from 'axios';
import {createLogic} from 'redux-logic';
import {receiveOrderEndpoint} from "../endpoints";
import {OrderTypes} from "../types";
import {orderReceivedRequestAction} from "../actions";
import {hideModal} from '../../modals/actions';

interface IDependencies {
    httpClient: AxiosInstance,
    action: orderReceivedRequestAction,
}

const receiveOrder = createLogic({
    type: OrderTypes.RECEIVE_ORDER_REQUEST,
    latest: true,

    async process({ action, httpClient }: IDependencies, dispatch, done) {
        const { url } = receiveOrderEndpoint;

        try {
            await httpClient.post(url, action.payload.formData);
            dispatch(hideModal())
            // dispatch(receiveOrderSuccess({ meta: metaData, orders: data.data    }));

        }catch {
            // take in httpClient
        }
        done();
    },
});

export default receiveOrder;

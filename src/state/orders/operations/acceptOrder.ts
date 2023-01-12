import {AxiosInstance} from 'axios';
import {createLogic} from 'redux-logic';
import {acceptOrderEndpoint} from "../endpoints";
import {OrderTypes} from "../types";
import {orderAcceptedRequestAction} from "../actions";
import {hideModal} from 'state/modals/actions';

interface IDependencies {
    httpClient: AxiosInstance,
    action: orderAcceptedRequestAction,
}

const acceptOrder = createLogic({
    type: OrderTypes.ACCEPT_ORDER_REQUEST,
    latest: true,

    async process({ action, httpClient }: IDependencies, dispatch, done) {
        const { url } = acceptOrderEndpoint;
        try {
            await httpClient.post(url, action.payload.formData);
            dispatch(hideModal());
            // dispatch(acceptOrderSuccess({ meta: metaData, orders: data.data    }));

        }catch {
            // take in httpClient
        }
        done();
    },
});

export default acceptOrder;

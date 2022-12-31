import {AxiosInstance} from 'axios';
import {createLogic} from 'redux-logic';

import {CustomersActionTypes} from "state/customers/types";
import {fetchCustomerByUpdateEndpoint} from 'state/customers/endpoints';
import {fetchCustomerByUpdateRequestAction, fetchCustomerByUpdateSuccess} from 'state/customers/actions';

interface IDependencies {
    httpClient: AxiosInstance,
    action: fetchCustomerByUpdateRequestAction,
}

const fetchCustomerByUpdate = createLogic({
    type: CustomersActionTypes.FETCH_CUSTOMER_BY_UPDATE_REQUEST,
    latest: true,

    async process({action, httpClient}: IDependencies, dispatch, done) {
        const {url} = fetchCustomerByUpdateEndpoint(action.payload);

        try {
            const {data: {data}} = await httpClient.get(url);

            dispatch(fetchCustomerByUpdateSuccess(data))

        } catch {
            // take in httpClient
        }
        done();
    },
});

export default fetchCustomerByUpdate;
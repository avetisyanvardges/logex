import {AxiosInstance} from 'axios';
import { createLogic } from 'redux-logic';

import {AdminActionTypes} from "state/admins/types";
import {fetchUserByUpdateEndpoint} from 'state/admins/endpoints';
import {fetchUserByUpdateRequestAction, fetchUserByUpdateSuccess} from 'state/admins/actions';

interface IDependencies {
    httpClient: AxiosInstance,
    action: fetchUserByUpdateRequestAction,
}

const fetchUserByUpdate = createLogic({
    type: AdminActionTypes.FETCH_USER_BY_UPDATE_REQUEST,
    latest: true,

    async process({ action, httpClient }: IDependencies, dispatch, done) {
        const { url } = fetchUserByUpdateEndpoint(action.payload);

        try {
            const {data: { data }} = await httpClient.get(url);

            dispatch(fetchUserByUpdateSuccess(data))

        }catch {
            // take in httpClient
        }
        done();
    },
});

export default fetchUserByUpdate;
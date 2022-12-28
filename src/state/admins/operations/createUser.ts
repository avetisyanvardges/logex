import {AxiosInstance} from 'axios';
import { createLogic } from 'redux-logic';

import {AdminActionTypes} from "state/admins/types";
import {createUserEndpoint} from 'state/admins/endpoints';
import {createUserAction} from 'state/admins/actions';
import history from 'utils/browserHistory';

interface IDependencies {
    httpClient: AxiosInstance,
    action: createUserAction,
}
const createUser = createLogic({
    type: AdminActionTypes.CREATE_USER,
    latest: true,

    async process({ action, httpClient }: IDependencies, dispatch, done) {
        const { url } = createUserEndpoint;

        try {
            await httpClient.post(url, action.payload);
            history.back();

        }catch {
            // take in httpClient
        }
        done();
    },
});

export default createUser;
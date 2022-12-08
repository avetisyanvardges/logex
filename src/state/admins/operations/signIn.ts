import {AxiosInstance} from 'axios';
import { createLogic } from 'redux-logic';

import Account from "lib/account";
import history from "utils/browserHistory";
import {AdminActionTypes} from "state/admins/types";
import {signInEndpoint} from 'state/admins/endpoints';
import {signInSuccess, signInRequestAction, permissionsByRoleIdRequestAction} from 'state/admins/actions';

interface IDependencies {
    httpClient: AxiosInstance,
    action: signInRequestAction & permissionsByRoleIdRequestAction,
}

const userSignIn = createLogic({
    type: AdminActionTypes.SIGN_IN_REQUEST,
    latest: true,

    async process({ action: { payload }, httpClient }: IDependencies, dispatch, done) {
        const { url } = signInEndpoint;
        const { email, password } = payload;

        try {
            const {data: {data: {token, user}}} = await httpClient.post(url, {email, password});

            Account.setAccessToken(token);
            Account.setAccount(user);
            history.replace('/');
            dispatch(signInSuccess(user));

        }catch {
            // take in httpClient
        }
        done();
    },
});

export default userSignIn;
import { createLogic } from 'redux-logic';

import {AdminActionTypes, ISignInRequestAction} from "state/admins/types";

import history from "utils/browserHistory";

import Account from "lib/account";
import {signInEndpoint} from '../endpoints';
import {AxiosInstance} from 'axios';
import {signInSuccess} from '../actions';

interface IDependencies {
    httpClient: AxiosInstance,
    action: ISignInRequestAction,
}

const userSignIn = createLogic({
    type: AdminActionTypes.SIGN_IN_REQUEST,
    latest: true,

    async process({ action, httpClient }: IDependencies, dispatch, done) {
        const { url } = signInEndpoint;

        const body = {
            email: action.data.email,
            password: action.data.password,
        };

        try {
            const {data: {data: {token, user}}} = await httpClient.post(url, body);

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
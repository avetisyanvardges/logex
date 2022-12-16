import {AxiosInstance} from 'axios';
import { createLogic } from 'redux-logic';

import Account from "lib/account";
import history from "utils/browserHistory";
import {AdminActionTypes} from "state/admins/types";
import {signInEndpoint} from 'state/admins/endpoints';
import {signInSuccess, signInRequestAction} from 'state/admins/actions';
import {IPermission} from "state/types";

interface IDependencies {
    httpClient: AxiosInstance,
    action: signInRequestAction,
}

const userSignIn = createLogic({
    type: AdminActionTypes.SIGN_IN_REQUEST,
    latest: true,

    async process({ action: { payload }, httpClient }: IDependencies, dispatch, done) {
        const { url } = signInEndpoint;
        const { email, password } = payload;

        try {
            const {data: {data: {token, user}}} = await httpClient.post(url, {email, password});

            const permissions = user.role[0].permissions.reduce((acc: string[], item: IPermission) => {
                acc.push(item.name);
                return acc;
            }, []);

            const response = {...user, role: {...user.role}}

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
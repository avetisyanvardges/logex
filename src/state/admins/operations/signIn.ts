import {AxiosInstance} from 'axios';
import {createLogic} from 'redux-logic';

import Account from "lib/account";
import history from "utils/browserHistory";
import {AdminActionTypes} from "state/admins/types";
import {signInEndpoint} from 'state/admins/endpoints';
import {signInRequestAction, signInSuccess} from 'state/admins/actions';
import {IRoleById} from "state/types";

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

            const userData = {
                ...user,
                role: user.role.map((item: IRoleById ) => ({name: item.name, id: item.id})),
                permissions: user.role.reduce((acc: string[], item: IRoleById) => {
                   item.permissions.forEach((value) => {acc.push(value.name)});
                   return acc;
                }, []),
            };

            Account.setAccessToken(token);
            Account.setAccount(userData);
            history.replace('/');
            dispatch(signInSuccess(userData));

        }catch {
            // take in httpClient
            history.replace('/auth/sign-in')
        }
        done();
    },
});

export default userSignIn;

import {AxiosInstance} from 'axios';
import { createLogic } from 'redux-logic';

import {AdminActionTypes} from "state/admins/types";
import {fetchRolesByIdEndpoint} from 'state/roles/endpoints';
import {permissionsByRoleIdRequestAction, fetchUsersSuccess} from 'state/admins/actions';

interface IDependencies {
    httpClient: AxiosInstance,
    action: permissionsByRoleIdRequestAction,
}

const fetchAdminPermissions = createLogic({
    type: AdminActionTypes.PERMISSIONS_BY_ROLE_ID_REQUEST,
    latest: true,

    async process({ action, httpClient }: IDependencies, dispatch, done) {
        const { url } = fetchRolesByIdEndpoint(action.payload);

        try {
            const {data: { data }} = await httpClient.get(url);
            console.log(data)

        }catch {
            // take in httpClient
        }
        done();
    },
});

export default fetchAdminPermissions;
import {AxiosInstance} from 'axios';
import { createLogic } from 'redux-logic';

import {AdminActionTypes} from "state/admins/types";
import {fetchUsersEndpoint} from 'state/admins/endpoints';
import {fetchUsersRequestAction, fetchUsersSuccess} from 'state/admins/actions';
import convertForTable from "utils/convertForTable";

interface IDependencies {
    httpClient: AxiosInstance,
    action: fetchUsersRequestAction,
}

const fetchUsers = createLogic({
    type: AdminActionTypes.FETCH_USERS_REQUEST,
    latest: true,

    async process({ action, httpClient }: IDependencies, dispatch, done) {
        const { url } = fetchUsersEndpoint;

        try {
            const {data: { data }} = await httpClient.get(url, { params: action.payload });
            const { response, metaData } = convertForTable(data);
            dispatch(fetchUsersSuccess({ meta: metaData, users: response }))

        }catch {
            // take in httpClient
        }
        done();
    },
});

export default fetchUsers;
import {AxiosInstance} from 'axios';
import { createLogic } from 'redux-logic';

import {RegionsTypes} from "state/regions/types";
import {deleteCommunityEndpoint} from 'state/regions/endpoints';
import {deleteCommunityAction} from 'state/regions/actions';
import history from 'utils/browserHistory';

interface IDependencies {
    httpClient: AxiosInstance,
    action: deleteCommunityAction,
}
const deleteCommunity = createLogic({
    type: RegionsTypes.DELETE_COMMUNITY,
    latest: true,

    async process({ action: { payload }, httpClient }: IDependencies, dispatch, done) {
        const { url } = deleteCommunityEndpoint(String(payload.id));

        try {
            await httpClient.delete(url);
            history.back();

        }catch {
            // take in httpClient
        }
        done();
    },
});

export default deleteCommunity;
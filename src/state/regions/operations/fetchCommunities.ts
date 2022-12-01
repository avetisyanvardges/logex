import {AxiosInstance} from 'axios';
import { createLogic } from 'redux-logic';

import {RegionsTypes} from "state/regions/types";
import {fetchCommunitiesEndpoint} from 'state/regions/endpoints';
import {fetchCommunitiesRequestAction, fetchCommunitiesSuccess} from 'state/regions/actions';
import convertForTable from "utils/convertForTable";

interface IDependencies {
    httpClient: AxiosInstance,
    action: fetchCommunitiesRequestAction,
}

const fetchCommunities = createLogic({
    type: RegionsTypes.FETCH_COMMUNITIES_REQUEST,
    latest: true,

    async process({ action, httpClient }: IDependencies, dispatch, done) {
        const { url } = fetchCommunitiesEndpoint;

        try {
            const {data: { data }} = await httpClient.get(url, { params: action.payload });
            const { response, metaData } = convertForTable(data)
            dispatch(fetchCommunitiesSuccess({ meta: metaData, communities: response }));

        }catch {
            // take in httpClient
        }
        done();
    },
});

export default fetchCommunities;
import {AxiosInstance} from 'axios';
import { createLogic } from 'redux-logic';

import {RegionsTypes} from "state/regions/types";
import {fetchRegionsEndpoint} from 'state/regions/endpoints';
import {fetchRegionsRequestAction, fetchRegionsSuccess} from 'state/regions/actions';
import convertForTable from "utils/convertForTable";

interface IDependencies {
    httpClient: AxiosInstance,
    action: fetchRegionsRequestAction,
}

const fetchRegions = createLogic({
    type: RegionsTypes.FETCH_REGIONS_REQUEST,
    latest: true,

    async process({ action, httpClient }: IDependencies, dispatch, done) {
        const { url } = fetchRegionsEndpoint;

        try {
            const {data: { data }} = await httpClient.get(url, { params: action.payload });
            const { response, metaData } = convertForTable(data);
            dispatch(fetchRegionsSuccess({ meta: metaData, regions: response }));

        }catch {
            // take in httpClient
        }
        done();
    },
});

export default fetchRegions;
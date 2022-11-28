import {AxiosInstance} from 'axios';
import { createLogic } from 'redux-logic';

import {IRegion, RegionsTypes} from "state/regions/types";
import {fetchRegionsEndpoint} from 'state/regions/endpoints';
import {fetchRegionsRequestAction, fetchRegionsSuccess} from 'state/regions/actions';

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

            const regions = await data.data.map((region: IRegion) => {
                region.key = region.id;
                return region;
            });

            dispatch(fetchRegionsSuccess({
                meta: {current_page: data.meta.current_page, last_page: data.meta.last_page, total: data.meta.total},
                regions,
            }))

        }catch {
            // take in httpClient
        }
        done();
    },
});

export default fetchRegions;
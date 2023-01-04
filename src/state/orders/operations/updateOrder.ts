import {AxiosInstance} from 'axios';
import { createLogic } from 'redux-logic';
import {RegionsTypes} from "state/regions/types";
import {updateRegionEndpoint} from 'state/regions/endpoints';
import {updateRegionAction, fetchRegionsRequest} from 'state/regions/actions';
import {hideModal} from "state/modals/actions";

interface IDependencies {
    httpClient: AxiosInstance,
    action: updateRegionAction,
}
const updateOrder = createLogic({
    type: RegionsTypes.UPDATE_REGION,
    latest: true,

    async process({ action: { payload }, httpClient }: IDependencies, dispatch, done) {
        const { url } = updateRegionEndpoint(String(payload.region.id));

        const {region_am, region_en, region_ru} = payload.region;

        try {
            await httpClient.put(url, {region_am, region_en, region_ru});
            dispatch(fetchRegionsRequest(payload.params));
            dispatch(hideModal());

        }catch {
            // take in httpClient
        }
        done();
    },
});

export default updateOrder;

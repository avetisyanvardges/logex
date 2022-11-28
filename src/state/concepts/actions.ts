import {
    ConceptTypes,
    IFetchRegionsSuccessAction,
    IMeta,
    IParams,
    IRegions,
    fetchRegionsRequestAction,
} from "state/concepts/types";
import {ActionWithPayload, createAction} from "state/createActions";

export type fetchRegionsRequestAction = ActionWithPayload<ConceptTypes.FETCH_REGIONS_REQUEST, IParams>;
export type fetchRegionsSuccessAction = ActionWithPayload<ConceptTypes.FETCH_REGIONS_REQUEST, IParams>;

export const fetchRegionsRequest = (params: IParams):fetchRegionsRequestAction => (createAction(
    ConceptTypes.FETCH_REGIONS_REQUEST,
    params,
));

export const fetchRegionsSuccess = (meta: IMeta, regions: IRegions): IFetchRegionsSuccessAction => ({
    type: ConceptTypes.FETCH_REGIONS_SUCCESS,
    meta,
    regions,
});


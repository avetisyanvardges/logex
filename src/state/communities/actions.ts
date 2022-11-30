import {ActionWithPayload, IParams} from 'state/types';
import {CommunitiesTypes} from 'state/communities/types';

export type fetchCommunitiesRequestAction = ActionWithPayload<CommunitiesTypes.FETCH_COMMUNITIES_REQUEST, IParams>;

export const fetchRegionsRequest = (params: IParams):fetchCommunitiesRequestAction => ({
    type: CommunitiesTypes.FETCH_COMMUNITIES_REQUEST,
    payload: params,
});

export type CommunitiesActions = fetchCommunitiesRequestAction;
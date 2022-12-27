import fetchRegions from './fetchRegions';
import createRegion from './createRegion';
import updateRegion from './updateRegion';
import deleteRegion from './deleteRegion';
import fetchCommunities from './fetchCommunities';
import fetchCommunityById from './fetchCommunityById';
import createCommunity from './createCommunity';
import updateCommunity from './updateCommunity';
import deleteCommunity from './deleteCommunity';

const regionsOperations = [
    fetchRegions,
    createRegion,
    updateRegion,
    deleteRegion,
    fetchCommunities,
    fetchCommunityById,
    createCommunity,
    updateCommunity,
    deleteCommunity,
];

export default regionsOperations;
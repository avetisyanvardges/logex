import fetchRegions from './fetchRegions';
import createRegion from './createRegion';
import updateRegion from './updateRegion';
import deleteRegion from './deleteRegion';
import fetchCommunities from './fetchCommunities';
import fetchCommunityById from './fetchCommunityById';

const regionsOperations = [
    fetchRegions,
    createRegion,
    updateRegion,
    deleteRegion,
    fetchCommunities,
    fetchCommunityById,
];

export default regionsOperations;
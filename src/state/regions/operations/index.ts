import fetchRegions from './fetchRegions';
import createRegion from './createRegion';
import updateRegion from './updateRegion';
import deleteRegion from './deleteRegion';
import fetchCommunities from './fetchCommunities';

const regionsOperations = [
    fetchRegions,
    createRegion,
    updateRegion,
    deleteRegion,
    fetchCommunities,
];

export default regionsOperations;
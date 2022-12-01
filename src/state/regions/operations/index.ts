import fetchRegions from './fetchRegions';
import createRegion from './createRegion';
import updateRegion from './updateRegion';
import deleteRegion from './deleteRegion';
import fetchCommunities from './fetchCommunities';

const conceptsOperations = [
    fetchRegions,
    createRegion,
    updateRegion,
    deleteRegion,
    fetchCommunities,
];

export default conceptsOperations;
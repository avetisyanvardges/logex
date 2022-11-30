import fetchRegions from './fetchRegions';
import createRegion from './createRegion';
import updateRegion from './updateRegion';
import deleteRegion from './deleteRegion';

const conceptsOperations = [
    fetchRegions,
    createRegion,
    updateRegion,
    deleteRegion,
];

export default conceptsOperations;
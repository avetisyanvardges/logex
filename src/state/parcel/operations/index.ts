import fetchParcels from './fetchParcels';
import fetchParcelById from './fetchParcelById';
import createParcel from './createParcel';
import updateParcel from './updateParcel';
import deleteParcel from './deleteParcel';

const parcelsOperations = [
    fetchParcels,
    fetchParcelById,
    createParcel,
    updateParcel,
    deleteParcel,
];

export default parcelsOperations;

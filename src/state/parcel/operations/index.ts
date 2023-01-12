import fetchParcels from './fetchParcels';
import fetchParcelById from './fetchParcelById';
import createParcel from './createParcel';
import updateParcel from './updateParcel';
import deleteParcel from './deleteParcel';
import addOrder from "./addOrder";
import removeOrder from "./removeOrder";
import sendParcel from "./sendParcel";

const parcelsOperations = [
    fetchParcels,
    fetchParcelById,
    createParcel,
    updateParcel,
    deleteParcel,
    addOrder,
    removeOrder,
    sendParcel,
];

export default parcelsOperations;

import adminOperations from "state/admins/operations";
import regionsOperations from "state/regions/operations";
import customersOperations from "state/customers/operations";

const rootOperations: any = [
    ...adminOperations,
    ...regionsOperations,
    ...customersOperations,
];

export default rootOperations;
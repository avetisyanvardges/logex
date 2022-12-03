import adminOperations from "state/admins/operations";
import regionsOperations from "state/regions/operations";
import customersOperations from "state/customers/operations";
import warehousesOperations from "state/warehouses/operations";

const rootOperations: any = [
    ...adminOperations,
    ...regionsOperations,
    ...customersOperations,
    ...warehousesOperations,
];

export default rootOperations;
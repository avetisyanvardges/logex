import adminOperations from "state/admins/operations";
import regionsOperations from "state/regions/operations";
import customersOperations from "state/customers/operations";
import warehousesOperations from "state/warehouses/operations";
import rolesOperations from "state/roles/operations";
import ordersOperations from "state/orders/operations";

const rootOperations: any = [
    ...adminOperations,
    ...regionsOperations,
    ...customersOperations,
    ...warehousesOperations,
    ...rolesOperations,
    ...ordersOperations
];

export default rootOperations;

import adminOperations from "state/admins/operations";
import conceptsOperations from "state/regions/operations";

const rootOperations: any = [
    ...adminOperations,
    ...conceptsOperations,
];

export default rootOperations;
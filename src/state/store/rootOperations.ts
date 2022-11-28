import adminOperations from "state/admins/operations";
import conceptsOperations from "state/concepts/operations";

const rootOperations: any = [
    ...adminOperations,
    ...conceptsOperations,
];

export default rootOperations;
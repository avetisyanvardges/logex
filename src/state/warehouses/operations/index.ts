import fetchWarehouses from './fetchWarehouses';
import fetchWarehouseByUpdate from './fetchWarehouseByUpdate';
import createWarehouse from './createWarehouse';
import updateWarehouse from './updateWarehouse';
import deleteWarehouse from './deleteWarehouse';

const warehousesOperations = [
    fetchWarehouses,
    fetchWarehouseByUpdate,
    createWarehouse,
    updateWarehouse,
    deleteWarehouse,
];

export default warehousesOperations;
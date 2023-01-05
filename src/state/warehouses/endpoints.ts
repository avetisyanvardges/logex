import endpoint from "utils/endpoint";

export const fetchWarehousesEndpoint = endpoint('get', '/admin/warehouses/all');
export const createWarehouseEndpoint = endpoint('post', '/admin/warehouses');
export const updateWarehouseEndpoint = (id: string) => endpoint('put', `/admin/warehouses/${id}`);
export const deleteWarehouseEndpoint = (id: string) => endpoint('delete', `/admin/warehouses/${id}`);
export const fetchWarehouseByUpdateEndpoint = (id: string) => endpoint('get', `/admin/warehouses/${id}/edit`);
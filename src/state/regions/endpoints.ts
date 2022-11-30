import endpoint from "utils/endpoint";

export const fetchRegionsEndpoint = endpoint('get', '/admin/regions/all');
export const createRegionEndpoint = endpoint('post', '/admin/regions');
export const updateRegionEndpoint = (id: string) => endpoint('put', `/admin/regions/${id}`);
export const deleteRegionEndpoint = (id: string) => endpoint('delete', `/admin/regions/${id}`);
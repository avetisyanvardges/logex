import endpoint from "utils/endpoint";

export const fetchParcelsEndpoint = endpoint('get', '/admin/parcels');
export const fetchParcelsByIdEndpoint = (id: string) => endpoint('get', `/admin/parcels/${id}`);
export const createParcelEndpoint = endpoint('post', '/admin/parcels');
export const updateParcelEndpoint = (id: string) => endpoint('put', `/admin/parcels/${id}`);
export const deleteParcelEndpoint = (id: string) => endpoint('delete', `/admin/parcels/${id}`);

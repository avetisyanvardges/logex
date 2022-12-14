import endpoint from "utils/endpoint";

export const signInEndpoint = endpoint('post', '/login');
export const fetchUsersEndpoint = endpoint('get', '/admin/users');
export const fetchCouriersEndpoint = endpoint('get', '/admin/users/courier');
export const createUserEndpoint = endpoint('post', '/admin/users');
export const updateUsersEndpoint = (id: string) => endpoint('put', `/admin/users/${id}`);
export const deleteUserEndpoint = (id: string) => endpoint('delete', `/admin/users/${id}`);
export const fetchUserByUpdateEndpoint = (id: string) => endpoint('get', `/admin/users/${id}/edit`);

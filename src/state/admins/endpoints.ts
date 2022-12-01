import endpoint from "utils/endpoint";

export const signInEndpoint = endpoint('post', '/login');
export const fetchUsersEndpoint = endpoint('get', '/admin/users');
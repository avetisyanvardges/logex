import endpoint from "utils/endpoint";

export const fetchRolesEndpoint = endpoint('get', '/admin/roles');
export const fetchPermissionsEndpoint = endpoint('get', '/admin/permissions');
export const fetchRolesByIdEndpoint = (id: string) => endpoint('get', `/admin/roles/${id}`);
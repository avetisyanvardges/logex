import fetchRoles from './fetchRoles';
import fetchPermissions from './fetchPermissions';
import fetchRolesById from './fetchRolesById';

const rolesOperations = [
    fetchRoles,
    fetchPermissions,
    fetchRolesById,
];

export default rolesOperations;
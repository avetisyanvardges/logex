import userSignIn from './signIn';
import fetchUsers from './fetchUsers';
import fetchAdminPermissions from './fetchAdminPermissions';

const adminOperations = [
    userSignIn,
    fetchUsers,
    fetchAdminPermissions,
];

export default adminOperations;
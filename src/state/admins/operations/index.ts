import userSignIn from './signIn';
import fetchUsers from './fetchUsers';
import createUser from './createUser';
import updateUser from './updateUser';
import deleteUser from './deleteUser';
import fetchCouriers from './fetchCouriers';
import fetchUserByUpdate from './fetchUserByUpdate';

const adminOperations = [
    userSignIn,
    fetchUsers,
    createUser,
    updateUser,
    deleteUser,
    fetchUserByUpdate,
    fetchCouriers
];

export default adminOperations;

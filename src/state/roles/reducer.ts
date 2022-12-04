import {IRolesState, RolesTypes} from 'state/roles/types';
import {RolesActionTypes} from 'state/roles/actions';

const initialState: IRolesState = {
    roles: [],
    rolesMeta: {},
}

const roles = (state = initialState, action: RolesActionTypes) => {
    switch (action.type) {
        case RolesTypes.FETCH_ROLES_SUCCESS:
            return { ...state, roles: action.payload.roles, rolesMeta: action.payload.meta };
        default:
            return state;
    }
};

export default roles;
import Account from 'lib/account';
import {AdminActions, AdminActionTypes} from 'state/admins/types';

const initialState = {
    currentAdmin: Account.getAccount(),
}

const adminsReducer = (state = initialState, action: AdminActions) => {
    switch (action.type) {
        case AdminActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentAdmin: action.currentAdmin,
            };
        default:
            return state;
    }
};

export default adminsReducer;

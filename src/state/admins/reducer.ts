import Account from 'lib/account';
import { AdminActionTypes, IInitialState } from 'state/admins/types';
import { AdminActions } from 'state/admins/actions';

const initialState: IInitialState = {
    currentAdmin: Account.getAccount(),
    users: [],
    usersMeta: {},
}

const adminsReducer = (state = initialState, action: AdminActions) => {
    switch (action.type) {
        case AdminActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentAdmin: action.payload,
            };
        case AdminActionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload.users,
                usersMeta: action.payload.meta,
            };
        default:
            return state;
    }
};

export default adminsReducer;

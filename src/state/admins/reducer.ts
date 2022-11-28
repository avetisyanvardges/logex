import Account from 'lib/account';
import { AdminActionTypes, IInitialState } from 'state/admins/types';
import { AdminActions } from 'state/admins/actions';

const initialState: IInitialState = {
    currentAdmin: Account.getAccount(),
}

const adminsReducer = (state = initialState, action: AdminActions) => {
    switch (action.type) {
        case AdminActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentAdmin: action.payload,
            };
        default:
            return state;
    }
};

export default adminsReducer;

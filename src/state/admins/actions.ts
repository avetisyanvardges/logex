import {
    AdminActionTypes,
    ICurrentAdmin,
    ISignInRequestAction,
    ISignInRequestPayload,
    ISignInSuccessAction
} from 'state/admins/types';

export const signInRequest = (data: ISignInRequestPayload): ISignInRequestAction => ({
    type: AdminActionTypes.SIGN_IN_REQUEST,
    data,
});

export const signInSuccess = (currentAdmin: ICurrentAdmin): ISignInSuccessAction => ({
    type: AdminActionTypes.SIGN_IN_SUCCESS,
    currentAdmin,
});
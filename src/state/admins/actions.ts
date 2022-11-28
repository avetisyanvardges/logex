import { AdminActionTypes, ICurrentAdmin, ISignInRequestPayload } from 'state/admins/types';
import { ActionWithPayload } from 'state/createActions';

export type signInRequestAction = ActionWithPayload<AdminActionTypes.SIGN_IN_REQUEST, ISignInRequestPayload>;
export type signInSuccessAction = ActionWithPayload<AdminActionTypes.SIGN_IN_SUCCESS, ICurrentAdmin>;

export const signInRequest = (data: ISignInRequestPayload): signInRequestAction => ({
    type: AdminActionTypes.SIGN_IN_REQUEST,
    payload: data,
});

export const signInSuccess = (currentAdmin: ICurrentAdmin): signInSuccessAction => ({
    type: AdminActionTypes.SIGN_IN_SUCCESS,
    payload: currentAdmin,
});

export type AdminActions = signInRequestAction | signInSuccessAction;
import { IModalState, ModalActions, ModalActionTypes } from "state/modals/types";

const initialState: IModalState = {
    modalType: null,
    modalProps: {},
};

const modalReducer = (state = initialState, action: ModalActions) => {
    switch (action.type) {
        case ModalActionTypes.SHOW_MODAL:
            return {
                modalType: action.modalType,
                modalProps: action.modalProps,
            };
        case ModalActionTypes.HIDE_MODAL:
            return initialState;
        default:
            return state;
    }
};

export default modalReducer;

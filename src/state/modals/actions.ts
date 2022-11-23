import { ModalActionTypes, IHideModalAction, IShowModalAction, IShowModalPayload } from "state/modals/types";

export const showModal = ({ modalType, modalProps }: IShowModalPayload): IShowModalAction => ({
    type: ModalActionTypes.SHOW_MODAL,
    modalType,
    modalProps,
});

export const hideModal = (): IHideModalAction => ({
    type: ModalActionTypes.HIDE_MODAL,
});

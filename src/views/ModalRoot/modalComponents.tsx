import { FC } from 'react';
import RegionsFormModal from 'views/shared/modals/RegionsFormModal';

interface IModalComponents {
    [key: string]: FC<any>,
}

const MODAL_COMPONENTS: IModalComponents = {
    REGIONS_FORM_MODAL: RegionsFormModal,
};

export default MODAL_COMPONENTS;
import { FC } from 'react';
import RegionsFormModal from 'views/shared/modals/RegionsFormModal';
import SelectRegionModal from 'views/shared/modals/SelectRegionModal';

interface IModalComponents {
    [key: string]: FC<any>,
}

const MODAL_COMPONENTS: IModalComponents = {
    REGIONS_FORM_MODAL: RegionsFormModal,
    SELECT_REGION_MODAL: SelectRegionModal,
};

export default MODAL_COMPONENTS;
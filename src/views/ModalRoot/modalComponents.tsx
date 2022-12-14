import {FC} from 'react';
import RegionsFormModal from 'views/shared/modals/RegionsFormModal';
import SelectRegionModal from 'views/shared/modals/SelectRegionModal';
import SelectCustomer from "views/shared/modals/SelectCustomerModal";
import SelectCommunityModal from "views/shared/modals/SelectCommunityModal";
import SelectRoleModal from "views/shared/modals/SelectRoleModal";
import SelectWarehousesModal from "views/shared/modals/SelectWarehousesModal";
import SelectCourier from "views/shared/modals/SelectCourierModal";
import ReceivedAndAcceptedModal from "views/shared/modals/ReceivedAndAcceptedModal";

interface IModalComponents {
    [key: string]: FC<any>,
}

const MODAL_COMPONENTS: IModalComponents = {
    REGIONS_FORM_MODAL: RegionsFormModal,
    SELECT_REGION_MODAL: SelectRegionModal,
    SELECT_CUSTOMER_MODAL: SelectCustomer,
    SELECT_COURIER_MODAL: SelectCourier,
    SELECT_COMMUNITY_MODAL: SelectCommunityModal,
    SELECT_ROLE_MODAL: SelectRoleModal,
    SELECT_WAREHOUSE_MODAL: SelectWarehousesModal,
    RECEIVED_AND_ACCEPTED_MODAL: ReceivedAndAcceptedModal,
};

export default MODAL_COMPONENTS;

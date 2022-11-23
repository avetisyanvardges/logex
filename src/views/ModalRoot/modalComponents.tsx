import { FC } from 'react';
import ExampleModal from 'views/shared/modals/ExampleModal';

interface IModalComponents {
    [key: string]: FC<any>,
}

const MODAL_COMPONENTS: IModalComponents = {
    EXAMPLE_MODAL: ExampleModal,
};

export default MODAL_COMPONENTS;
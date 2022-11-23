import { FC } from 'react';
import Home from "views/Home";

interface IModalComponents {
    [key: string]: FC,
}

const MODAL_COMPONENTS: IModalComponents = {
    LOCATION_MAP_MODAL: Home,
};

export default MODAL_COMPONENTS;
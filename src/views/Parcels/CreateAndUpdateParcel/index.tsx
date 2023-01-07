import React from 'react';

import AdminLayout from 'views/layouts/Admin';
import useContainer from './hook';
import './style.scss';
import Loader from "../../shared/Loader";

const CreateAndUpdateOrder = () => {
    const {
        formik,
        openSelectRegionModal,
        statuses,
        onChangeIsReturn,
        onChangeStatus,
        getOrderByIdLoading,
        buttonLoader,
        orderById
    } = useContainer();

    if(getOrderByIdLoading) {
        return <Loader isAdmin />
    }

    return (
        <AdminLayout>
        </AdminLayout>
    );





};

export default CreateAndUpdateOrder;

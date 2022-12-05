import React from "react";
import {Spin} from "antd";
import AdminLayout from "views/layouts/Admin";
import AuthLayout from "views/layouts/Auth";

const LoaderWithLayout = ({isAdmin, isAuth}: {isAdmin?: boolean, isAuth?: boolean}) => (
    <>
        {isAdmin && <AdminLayout><Spin style={{marginTop: 50, marginLeft: '50%'}} /></AdminLayout>}
        {isAuth && <AuthLayout><Spin style={{marginTop: 50, marginLeft: '50%'}} /></AuthLayout>}
    </>
)

export default LoaderWithLayout;
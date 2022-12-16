import React, { FC } from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute: FC<any> = ({ isAllowed, redirectPath = '/landing', children }) => {
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};

export default ProtectedRoute;
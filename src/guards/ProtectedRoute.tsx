import React from "react";
import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = ({isAllowed, redirectPath = '/', children}: any) => {
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace/>;
    }

    return children ? children : <Outlet/>;
};

export default ProtectedRoute;

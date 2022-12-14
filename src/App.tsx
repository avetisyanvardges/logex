import React, {lazy, Suspense} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {ROUTES_LIST} from "constants/routesConfig";
import AuthGuard from 'guards/AuthGuard';
import AdminGuard from 'guards/AdminGuard';
import SignIn from 'views/SignIn';
import Loader from "views/shared/Loader";
import ProtectedRoute from "guards/ProtectedRoute";
import useTypedSelector from './hooks/useTypedSelector';
import Home from "views/Home";

const ModalRoot = lazy(() => import('views/ModalRoot/container'));
const PageNotFound = lazy(() => import('views/PageNotFound'));

const App = () => {
    const { currentAdmin } = useTypedSelector(({admins}) => admins);
    return (
        <>
            <Routes>
                <Route path="/auth" element={<AuthGuard/>} >
                    <Route path="sign-in" element={<SignIn/>}/>
                </Route>
                <Route path="/" element={<AdminGuard/>}>
                    <Route path='' element={<Home />} />
                    {ROUTES_LIST.map((
                        {path, component: Component, permissions}) => {
                        const pagePermissions = {
                            create: currentAdmin.permissions?.includes(permissions.create),
                            edit: currentAdmin.permissions?.includes(permissions.edit),
                            remove: currentAdmin.permissions?.includes(permissions.remove),
                        };
                        return (
                            <Route key={path} path={path} element={
                                <ProtectedRoute
                                    redirectPath='/'
                                    isAllowed={currentAdmin.permissions?.includes(permissions.list)}
                                >
                                    <Component {...pagePermissions} />
                                </ProtectedRoute>
                            }/>
                        )
                    })}
                </Route>
                <Route path="/404"
                       element={<Suspense fallback={<Loader withAuthLayout/>}><PageNotFound/></Suspense>}
                />
                <Route path="*" element={<Navigate to="/404" replace/>}/>
            </Routes>
            <ModalRoot/>
        </>
    )
}

export default App;

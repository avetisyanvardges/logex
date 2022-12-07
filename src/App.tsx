import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import AuthGuard from 'guards/AuthGuard';
import AdminGuard from 'guards/AdminGuard';
import SignIn from 'views/SignIn';
import Regions from 'views/Regions';
import Customers from 'views/Customers';
import Communities from 'views/Communities';
import Orders from 'views/Orders';
import Users from 'views/Users';
import Warehouses from 'views/Warehouses';
import Roles from 'views/Roles';
import Loader from "views/shared/Loader";

const ModalRoot = lazy(() => import('views/ModalRoot/container'));
const PageNotFound = lazy(() => import('views/PageNotFound'));
const CreateAndUpdateRole = lazy(() => import('views/Roles/CreateAndUpdateRole'));

const App = () => (
    <>
        <Routes>
            <Route
                path="/auth"
                element={<Suspense fallback={<Loader isAuth />}><AuthGuard/></Suspense>}
            >
                <Route path="sign-in" element={<SignIn/>} />
            </Route>

            <Route
                path="/"
                element={<Suspense fallback={<Loader isAdmin />}><AdminGuard/></Suspense>}
            >
                <Route path='' element={<Regions/>} />
                <Route path='customers' element={<Customers/>} />
                <Route path='community' element={<Communities/>} />
                <Route path='orders' element={<Orders/>} />
                <Route path='users' element={<Users/>} />
                <Route path='warehouses' element={<Warehouses/>} />
                <Route path='roles'>
                    <Route path='' element={<Roles/>} />
                    <Route path='create' element={<CreateAndUpdateRole />} />
                    <Route path='update/:id' element={<CreateAndUpdateRole />} />
                </Route>
            </Route>
            <Route
                path="/404"
                element={<Suspense fallback={<Loader withAuthLayout />}><PageNotFound /></Suspense>}
            />
            <Route path="*" element={ <Navigate to="/404" replace />} />
         </Routes>
        <ModalRoot />
     </>
);

export default App;

import React, { lazy, Suspense } from 'react';
import {Spin} from 'antd';
import { Route, Routes } from "react-router-dom";
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
import Account from 'lib/account';
import AdminLayout from 'views/layouts/Admin';
import AuthLayout from 'views/layouts/Auth';

const ModalRoot = lazy(() => import('views/ModalRoot/container'));
const CreateAndUpdateRole = lazy(() => import('views/Roles/CreateAndUpdateRole'));

const App = () => (
    <Suspense
        fallback={Account.getAccessToken() ?
            <AdminLayout><Spin style={{marginTop: 50}} /></AdminLayout> :
            <AuthLayout><Spin style={{marginTop: 50}} /></AuthLayout>}
    >
        <Routes>
            <Route path="/auth" element={<AuthGuard/>} >
                <Route path="sign-in" element={<SignIn/>} />
            </Route>

            <Route path="/" element={<AdminGuard/>} >
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
        </Routes>
        <ModalRoot />
     </Suspense>
);

export default App;

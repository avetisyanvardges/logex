import React from 'react';
import { Route, Routes } from "react-router-dom";
import AuthGuard from 'guards/AuthGuard';
import AdminGuard from 'guards/AdminGuard';
import SignIn from 'views/SignIn';
import Regions from 'views/Regions';
import Customers from 'views/Customers';
import Community from 'views/Community';
import Orders from 'views/Orders';
import Users from 'views/Users';
import Warehouses from 'views/Warehouses';
import ModalRoot from 'views/ModalRoot/container';

const App = () => (
    <>
        <Routes>
            <Route path="/auth" element={<AuthGuard/>} >
                <Route path="sign-in" element={<SignIn/>} />
            </Route>

            <Route path="/" element={<AdminGuard/>} >
                <Route path='' element={<Regions/>} />
                <Route path='customers' element={<Customers/>} />
                <Route path='community' element={<Community/>} />
                <Route path='orders' element={<Orders/>} />
                <Route path='users' element={<Users/>} />
                <Route path='warehouses' element={<Warehouses/>} />
            </Route>
        </Routes>
        <ModalRoot />
     </>
);

export default App;

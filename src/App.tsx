import React from 'react';
import { Route, Routes } from "react-router-dom";
import ModalRoot from "views/ModalRoot/container";
import Home from 'views/Home';
import SignIn from "views/SignIn";
import SignUp from "views/SignUp";

const App = () => (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <ModalRoot />
    </>
);

export default App;

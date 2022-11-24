import React from 'react';
import { Route, Routes } from "react-router-dom";
import ModalRoot from "views/ModalRoot/container";
import Home from 'views/Home';
import SignIn from "views/SignIn";

const App = () => (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
        </Routes>
        <ModalRoot />
    </>
);

export default App;

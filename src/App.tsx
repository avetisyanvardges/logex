import React from 'react';
import { Route, Routes } from "react-router-dom";
import ModalRoot from "views/ModalRoot/container";
import Home from 'views/Home';

const App = () => (
    <>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
        <ModalRoot />
    </>
);

export default App;

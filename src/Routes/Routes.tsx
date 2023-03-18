import React from "react";
import { Route, HashRouter, Routes } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Home from "../Pages/Home";

function AllRoutes() {
    return (
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </HashRouter>
    );
}

export default AllRoutes;
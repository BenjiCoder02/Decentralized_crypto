import React from "react";
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Home from "../Pages/Home";

function AllRoutes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/home' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AllRoutes;
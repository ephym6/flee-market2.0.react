import { BrowserRouter, Routes , Route } from "react-router-dom";
import VendorRegister from "./pages/VendorRegister";
import BuyerDashboard from "./pages/BuyerDashboard";
import Login from "./pages/Login";
import App from "./App";
import React from "react";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/vendors/register" element={<VendorRegister/>} />
                <Route path="/buyers/home" element={<BuyerDashboard/>}/>
                <Route path="/vendors/login" element={<Login/>}/>
                <Route path="/" element={<App />}/> {/* This is the landing page*/}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
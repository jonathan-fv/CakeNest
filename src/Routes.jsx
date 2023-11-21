import React from 'react';
import {createBrowserRouter, RouterProvider, Routes, Route, BrowserRouter} from "react-router-dom";
import LoginPage from './components/pages/login/LoginPage';
import OrderPage from './components/pages/order/OrderPage';


const MainRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/order" element={<OrderPage />} />
            </Routes>
        </BrowserRouter>
        
    )
}

export default MainRoute

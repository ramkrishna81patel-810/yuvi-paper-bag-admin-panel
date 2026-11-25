import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Products from "../pages/Products/Products";
import Quotes from "../pages/Quotes/Quotes";
import Inquiries from "../pages/Inquiries/Inquiries";
import Customers from "../pages/Customers/Customers";
import WebsiteContent from "../pages/WebsiteContent/WebsiteContent";
import Settings from "../pages/Settings/Settings";
import Login from "../auth/Login";
import Signup from "../auth/Signup";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* Public Routes */}
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* Admin Routes */}
                <Route path="/admin" element={<AdminLayout />}>

                    <Route
                        index
                        element={<Navigate to="dashboard" replace />}
                    />

                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                    <Route path="quotes" element={<Quotes />} />
                    <Route path="inquiries" element={<Inquiries />} />
                    <Route path="customers" element={<Customers />} />
                    <Route path="website-content" element={<WebsiteContent />} />
                    <Route path="settings" element={<Settings />} />

                </Route>

                {/* 404 Route */}
                <Route path="*" element={<h2>Page Not Found</h2>} />

            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
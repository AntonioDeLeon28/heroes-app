import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <div>
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/*" element={<DashboardRoutes />} /> {/* Si /login no existe este es marcado como el elemento default /* */}
                </Routes>
        </div>
    )
}

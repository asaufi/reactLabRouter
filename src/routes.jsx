import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Sensor from './views/Sensor';

const AppRoutes = ({ sensors }) => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home sensors={sensors} />} />
            <Route path="/:sensorId" element={<Sensor sensors={sensors} />} />
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;


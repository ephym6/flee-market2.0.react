import AppRoutes from './AppRoutes.jsx';
import React from "react";
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/variables.css';
import './css/base.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppRoutes />
    </React.StrictMode>
)
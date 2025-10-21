import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// import './index.css';
import { AuthProvider } from './services/auth';
import { AppProvider } from './context';

const root = createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <AppProvider>
            <App />
        </AppProvider>
    </AuthProvider>
);

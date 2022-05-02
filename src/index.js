import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
//Wrap entire App component in the AuthContext Provider (login state)
import { AuthContextProvider } from './store/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
);

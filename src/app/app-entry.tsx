import React from 'react';
import ReactDOM from "react-dom/client";
import {RouterProvider} from 'react-router-dom';
import './app.css';

import {appRouter} from './app-router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <RouterProvider router={appRouter} />
    </React.StrictMode>
);

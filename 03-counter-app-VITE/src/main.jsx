import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './firstApp';
import { App } from './HelloWorld';
import './style.css';




ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <FirstApp title={5646} subTitle={123} />

    </React.StrictMode>

);
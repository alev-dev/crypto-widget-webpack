import React from 'react';
import { createRoot } from 'react-dom/client';
import MainLayout from './components/MainLayout';
function app() {
    const rootElement = document.getElementById('crypto-widget');
    const root = createRoot(rootElement);
    root.render(<MainLayout />);
}

app();

export default app;

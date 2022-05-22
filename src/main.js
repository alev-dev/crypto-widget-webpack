import reactDom from 'react-dom';
import React from 'react';
import MainLayout from './components/MainLayout';
function app(window) {
    console.log('Hello World');
    reactDom.render(<MainLayout />, document.getElementById('crypto-widget'));
}

app(window);

export default app;

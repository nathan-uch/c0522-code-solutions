import React from 'react';
import ReactDOM from 'react-dom/client';
import ToggleComponent from './toggle-switch';

const container = document.getElementById('container');
const root = ReactDOM.createRoot(container);
const element = (<ToggleComponent />);
root.render(element);

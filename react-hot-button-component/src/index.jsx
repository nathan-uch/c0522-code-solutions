import React from 'react';
import ReactDOM from 'react-dom/client';
import HotButton from './hot-button';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const btn = (<HotButton />);
root.render(btn);

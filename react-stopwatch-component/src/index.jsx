import React from 'react';
import ReactDOM from 'react-dom/client';
import StopwatchComponent from './stopwatch';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const watch = <StopwatchComponent />;
root.render(watch);

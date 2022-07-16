import React from 'react';
import * as ReactDOM from 'react-dom/client';
import ValidatedInput from './validated-input';

const element = <ValidatedInput />;
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(element);

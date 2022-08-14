import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import state from './state';

import { BrowserRouter } from 'react-router-dom';
import { addProduct } from './state';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App state={state} addProduct={addProduct} />
    </BrowserRouter>
);



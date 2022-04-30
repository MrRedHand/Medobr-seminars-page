import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.scss';
import './js/main'
import App from './components/app/app';
import { createStore } from 'redux';
import {Provider} from "react-redux";
import { rootReducer } from './services/reducers';

const store = createStore(rootReducer);

console.log('store', store)

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);
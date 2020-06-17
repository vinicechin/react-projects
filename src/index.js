import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

// configure before sending and catch sending errors
const requestInterceptor = axios.interceptors.request.use(config => {
    // edit request, like auth
    return config
}, error => {
    console.log(error)
    return Promise.reject(error)
})

// modify response before using it and catch response errors
const responseInterceptor = axios.interceptors.response.use(response => {
    // edit response
    return response
}, error => {
    console.log(error)
    return Promise.reject(error)
})

// remove interceptors (added only as example)
axios.interceptors.request.eject(requestInterceptor)
axios.interceptors.response.eject(responseInterceptor)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

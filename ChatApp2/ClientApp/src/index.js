import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
//import { withRouter, BrowserRouter } from 'react-router-dom';

import App from './App';
//import ChatPage from './ChatPage';
import registerServiceWorker from './registerServiceWorker';


const rootElement = document.getElementById('root');

//ReactDOM.render(
//    <BrowserRouter><App /></BrowserRouter>,
//    rootElement);

//ReactDOM.render(
//   <App />,
//    rootElement);

ReactDOM.render(
    <App />,
    rootElement);

registerServiceWorker();


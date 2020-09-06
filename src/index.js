import './api/mockApi'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from "./router";
import * as serviceWorker from './serviceWorker';
import { message,notification,Modal } from 'antd';
React.$message = message
React.$notification = notification
React.$Modal = Modal
ReactDOM.render(
      <Routes/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from "./redux/store.js";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(

  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>

);
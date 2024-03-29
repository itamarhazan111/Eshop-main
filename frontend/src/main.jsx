import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {HelmetProvider} from 'react-helmet-async';
import axios from "axios";
import { StoreProvider } from "./Store.jsx";

axios.defaults.baseURL="https://eshop-main-five.vercel.app/";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <StoreProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </StoreProvider>
  </React.StrictMode>
)

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { Auth0Provider } from "@auth0/auth0-react";
import {Provider} from 'react-redux'
import { store } from './reduxTool/store.js';
// import 'react-bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Auth0Provider
  //   domain=""
  //   clientId=""
  //   authorizationParams={{
  //     redirect_uri: window.location.origin,
  //   }}
  // >
    <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </Provider>
  // </Auth0Provider>
);

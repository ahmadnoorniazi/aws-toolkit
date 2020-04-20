/*!

=========================================================
* Material Dashboard React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import "./global.css";
// core components
import Admin from "layouts/Admin.jsx";
import RTL from "layouts/RTL.jsx";
import Login from "views/Login/index";
import SignUp from "views/signup/index";
import ForgotPassword from "views/ForgotPassword/index";
import { SnackbarProvider } from "notistack";

import App from "./app";
import ErrorBoundary from "./ErrorBoundary";
import "assets/css/material-dashboard-react.css?v=1.7.0";
const hist = createBrowserHistory();

ReactDOM.render(
  <SnackbarProvider
    anchorOrigin={{
      vertical: "top",
      horizontal: "right"
    }}
    iconVariant={{
      success: "✅",
      error: "✖️",
      warning: "⚠️",
      info: "ℹ️"
    }}
    maxSnack={3}
  >
    <App>
      <Router history={hist}>
        <ErrorBoundary>
          <Switch>
            <Route path="/admin" component={Admin} />
            <Route path="/rtl" component={RTL} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/forgot-password" component={ForgotPassword} />

            <Redirect from="/" to="/admin/dashboard" />
          </Switch>
        </ErrorBoundary>
      </Router>
    </App>
  </SnackbarProvider>,
  document.getElementById("root")
);

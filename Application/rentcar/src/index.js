import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import {Provider} from "react-redux";
import store from "./store";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/pages/LandingPage.js";
import CarListPage from "views/pages/CarListPage.js";
import CarAddPage from "views/pages/CarAddPage.js";
import AdminPage from 'views/pages/AdminPage';
import OurCarss from 'views/pages/OurCars';
import ContactPage from 'views/pages/ContactPage';
import Login from "components/login.component";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/Dashboard";
import OurCars from "./components/user-car-list.component";
// others

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./admin";
  }
}

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={props => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={props => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/contact-page"
        render={props => <ContactPage {...props} />}
      />
      <Route
        path="/our-cars"
        render={props => <OurCars {...props} />}
      />
      <Route
        path="/admin-page"
        render={props => <AdminPage {...props} />}
      />
      <Route
        path="/car-list-page"
        render={props => <CarListPage {...props} />}
      />
      {/* <PrivateRoute exact path="/car-list-page" render={props => <CarListPage {...props} />}  /> */}
      <PrivateRoute exact path="/dashboard" component={Dashboard}  />

      <Route
        path="/car-add-page"
        render={props => <CarAddPage {...props} />}
      />
      <Route
        path="/car-page"
        render={props => <CarAddPage {...props} />}
      />
      <Route
        path="/login"
        render={props => <Login {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter></Provider>,
  document.getElementById("root")
);

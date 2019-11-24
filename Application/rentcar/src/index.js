import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

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
import AdminLogin from "views/pages/AdminLogin";
import AdminPage from 'views/pages/AdminPage';
import OurCars from 'views/pages/OurCars';
import ContactPage from 'views/pages/ContactPage';
// others

ReactDOM.render(
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
        path="/admin"
        render={props => <AdminLogin {...props} />}
      />
      <Route
        path="/admin-page"
        render={props => <AdminPage {...props} />}
      />
      <Route
        path="/car-list-page"
        render={props => <CarListPage {...props} />}
      />
      <Route
        path="/car-add-page"
        render={props => <CarAddPage {...props} />}
      />
      <Route
        path="/car-page"
        render={props => <CarAddPage {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

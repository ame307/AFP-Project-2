import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import CarsList from "./components/cars-list.component";
import EditCar from "./components/edit-car.component";
import CreateCar from "./components/create-car.component";
import Login from "./components/login.component";
import Logout from "./components/logout.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={CarsList} />
        <Route path="/edit/:id" component={EditCar} />
        <Route path="/create" component={CreateCar} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
      </div>
    </Router>
  );
}

export default App;

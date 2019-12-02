import React, {Component} from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {Provider} from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

//former code
import "assets/css/bootstrap.min.css";

//former code
import Navbar from "./components/navbar.component";
import CarsList from "./components/cars-list.component";
import EditCar from "./components/edit-car.component";
import CreateCar from "./components/create-car.component";
import Login from "./components/login.component";
import Logout from "./components/logout.component";
import LoginTest from "./login";

import store from "./store";
import PrivateRoute from "./components/private-route/PrivateRoute";
import CarListPage from "./views/pages/CarListPage";

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
  window.location.href = "./login";
}
}

class App extends Component {
  render(){
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <Route path="/" exact component={CarsList} />
          <Route path="/edit/:id" component={EditCar} />
          <Route path="/create" component={CreateCar} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/admintest" component={LoginTest} /> 
          <Switch>
            <PrivateRoute exact path="/car-list-page" component={CarListPage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
}

export default App;

// // styles
// import "assets/css/bootstrap.min.css";
// import "assets/scss/paper-kit.scss";
// import "assets/demo/demo.css";

// // pages
// import Index from "views/Index.js";
// // import NucleoIcons from "views/NucleoIcons.js";
// // import LandingPage from "views/examples/LandingPage.js";
// import ProfilePage from "views/examples/ProfilePage.js";
// import CarListPage from "views/examples/CarListPage.js";

// function App() {
//   return (
//     <Router>
//       <div className="container">
//       <Route path="/index" render={props => <Index {...props} />} />
//       {/* <Route
//         path="/nucleo-icons"
//         render={props => <NucleoIcons {...props} />}
//       /> */}
//       {/* <Route
//         path="/landing-page"
//         render={props => <LandingPage {...props} />}
//       /> */}
//       <Route
//         path="/profile-page"
//         render={props => <ProfilePage {...props} />}
//       />
//       <Route
//         path="/car-list-page"
//         render={props => <CarListPage {...props} />}
//       />
//       <Redirect to="/index" />
//       </div>
//     </Router>
//   );
// }

//  export default App;

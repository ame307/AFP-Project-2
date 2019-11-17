import React from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route } from "react-router-dom";

//former code
import "assets/css/bootstrap.min.css";

//former code
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

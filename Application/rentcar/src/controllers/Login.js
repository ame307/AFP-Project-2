import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

// reactstrap components
  import {
    Button,
    Card,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    CardBody,
    CardGroup,
    NavLink 
  } from "reactstrap";
  import { withRouter } from 'react-router-dom';
  
  import BasicNavBar from "components/Navbars/BasicNavBar";



class Login extends Component {
  constructor(){
    this.routeChange = this.routeChange.bind(this);

  }

  routeChange() {
    let path = `views/pages/AdminPage.js`;
    this.props.history.push(path);
  }
  
  render() {
    return (
      <form>
        <button onClick={this.routeChange}>Login</button>
    </form>
    )
  }
}

export default Login;
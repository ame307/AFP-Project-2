import React from "react";
import Index from "views/Index.js";
//google map components
//import {Map, GoogleApiWrapper } from 'google-maps-react';

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import BasicNavBar from "components/Navbars/BasicNavBar.js";
import ContactHeader from "components/Headers/OurCarsHeader.js";
import BasicFooter from "components/Footers/BasicFooter.js";
import { isConstructorDeclaration } from "typescript";

// //loop próba
// const elements = ['one', 'two', 'three'];
// const items = [];

// for (const [index, value] of elements.entries()) {
//   items.push(<li key={index}>{value}</li>)
// }
// //idáig tartott

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (

    <>
      <BasicNavBar />
      <ContactHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            
            <div className="name">
              <h2 className="title">
                Stacionárius Autókölcsönző <br />
              </h2>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <img>
              </img>
            </Col>
          </Row>
          <br />
          <Row>
            <div>
              {/* {items} */}
              {/* Loop próba */}
              {/* <h1>Helló Világ!</h1> */}
            </div>
          </Row>
        </Container>
      </div>
      <BasicFooter />
    </>
  );
}

export default ProfilePage;

import React from "react";
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
import ContactHeader from "components/Headers/ContactHeader.js";
import BasicFooter from "components/Footers/BasicFooter.js";

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
               Stacionárius Autókölcsönző  <br />
              </h2>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              
              <h3>
                Telephely: 1024, Budapest Kocsis utca 5.
                <br></br>
              </h3>
              <h3>
              Telefonszámaink:<br></br> 06-30/446-5566 <br></br> 06-20/644-6655 <br></br> 06-70/565-4464
              </h3>
              <h3>
                E-mail címünk: stacionariusauto@auto.hu
              </h3>
              <br />
              <div>
              </div>
             
            </Col>
          </Row>
          <br />
         
         
        </Container>
      </div>
      <BasicFooter />
    </>
  );
}

export default ProfilePage;

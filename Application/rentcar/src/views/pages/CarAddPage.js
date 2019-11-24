import React from "react";
//google map components
//import {Map, GoogleApiWrapper } from 'google-maps-react';
//image upload
import ImageUploader from 'react-images-upload';

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
import AdminNavbar from "components/Navbars/AdminNavBar.js";
import ContactHeader from "components/Headers/ContactHeader.js";
import BasicFooter from "components/Footers/BasicFooter.js";

class App extends React.Component {
 
  constructor(props) {
      super(props);
       this.state = { pictures: [] };
       this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
      this.setState({
          pictures: this.state.pictures.concat(picture),
      });
  }

  render() {
      return (
          <ImageUploader
              withIcon={true}
              buttonText='Choose images'
              onChange={this.onDrop}
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
          />
      );
  }
}

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
      <AdminNavbar />
      <ContactHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            
            <div className="name">
              <h2 className="title">
               Autók hozzáadása  <br />  </h2>
               <div class="form-group">
               <h3>Márka</h3>
               <input placeholder="Ide írja az autó márkáját" type="text" class="form-control"></input>
               <br />
               <h3>Típus</h3>
               <input placeholder="Ide írja az autó típusát" type="text" class="form-control"></input>
               <br />
               <h3>Évjárat</h3>
               <input placeholder="Ide írja az autó évszámát" type="text" class="form-control"></input>
               <br />
               <h3>Üzemanyag típusa</h3>
               <input placeholder="Ide írja milyen üzemanyagot használ az autó" type="text" class="form-control"></input>
               <br />
               <h3>Futott km</h3>
               <input placeholder="Ide írja a futott kilométerek számát" type="text" class="form-control"></input>
               <br />
               <h3>Kép feltöltése</h3>
               <ImageUploader>
               </ImageUploader>
               <button type="button" class="btn-round ml-1 btn btn-info">Hozzáadás</button>
               </div>
            </div>
          </div>         
        </Container>
      </div>
      <BasicFooter />
    </>
  );
}

export default ProfilePage;

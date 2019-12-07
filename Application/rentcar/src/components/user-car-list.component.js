import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
    Container,
    Row,
    Col
  } from "reactstrap";
  
  // core components
  import AdminNavbar from "components/Navbars/AdminNavBar.js";
  import ContactHeader from "components/Headers/ContactHeader.js";
  import BasicFooter from "components/Footers/BasicFooter.js";
  import BasicNavBar from "components/Navbars/BasicNavBar.js";

const Car = props => (
    <tr>
        <td>{props.car.brand}</td>
        <td>{props.car.model}</td>
        <td>{props.car.consumption}</td>
        <td>{props.car.plateNumber}</td>
        {/* <td>
            <Link to={"/edit/"+props.car._id}>Szerkesztés</Link> | <a href='#' onClick={() => { props.deleteCar(props.car._id) }}>Törlés</a>
        </td> */}
    </tr>    
)

export default class OurCars extends Component {
    constructor(props) {
        super(props);
        // import BasicNavBar from "components/Navbars/BasicNavBar.js";

        this.state = { cars: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/cars/')
            .then(res => {
                this.setState({ cars: res.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    carsList(){
        return this.state.cars.map(currentcar => {
            return <Car car={currentcar} deleteCar={this.deleteCar} key={currentcar._id}/> 
        })
    }

    render() {
        return (
            <div>

<BasicNavBar />
      <ContactHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
            </Col>
          </Row>
          <br />
          <Row>
          <div className="section profile-content">
        <Container>
            <div className="section profile-content">
                <h3>
                <h5>Elérhető autók</h5> <br></br>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Márka</th>
                            <th>Típus</th>
                            <th>Fogyasztás</th>
                            <th>Rendszám</th>
                            {/* <th>Interakciók</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {this.carsList()}
                    </tbody>
                </table>
                    
                </h3>
              <div>
                 
              </div>
            </div>  
        </Container>
      </div>
          </Row>
        </Container>
      </div>
      <BasicFooter />
              

      



            </div>
        )
    }
}
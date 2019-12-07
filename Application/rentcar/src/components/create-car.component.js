import React, { Component } from 'react';
import axios from 'axios';
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
import AdminNavbar from "components/Navbars/AdminNavBar.js";
import ContactHeader from "components/Headers/ContactHeader.js";
import BasicFooter from "components/Footers/BasicFooter.js";


export default class CreateCar extends Component {
    constructor(props) {
        super(props);

        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangeModel = this.onChangeModel.bind(this);
        this.onChangeConsumption = this.onChangeConsumption.bind(this);
        this.onChangePlateNumber = this.onChangePlateNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            brand: '',
            model: '',
            consumption: 0,
            plateNumber: ''
        }
    }

    onChangeBrand(e) {
        this.setState({
            brand: e.target.value
        })
    }

    onChangeModel(e) {
        this.setState({
            model: e.target.value
        })
    }

    onChangeConsumption(e) {
        this.setState({
            consumption: e.target.value
        })
    }

    onChangePlateNumber(e) {
        this.setState({
            plateNumber: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const car = {
            brand: this.state.brand,
            model: this.state.model,
            consumption: this.state.consumption,
            plateNumber: this.state.plateNumber
        }

        console.log(car);
        axios.post('http://localhost:5000/cars/add', car)
            .then(res => console.log(res.data));

        this.setState({
            brand: "",
            model: "",
            consumption: 0,
            plateNumber: ""
        })

        //window.location = '/create';
    }



    render() {
        return (
            <div>

      <div className="section profile-content">
        <Container>
          <div className="owner">
          <form onSubmit={this.onSubmit} id="create-car-form">
                    <div className="form-group">
                        <label>Márka: </label>
                        <input type="text"
                            placeholder="Ide írja a márkát"
                            required
                            className="form-control"
                            value={this.state.brand}
                            onChange={this.onChangeBrand}
                        />
                    </div>
                    <div className="form-group">
                        <label>Típus: </label>
                        <input type="text"
                            placeholder="Ide írja a modellt"
                            required
                            className="form-control"
                            value={this.state.model}
                            onChange={this.onChangeModel}
                        />
                    </div>
                    <div className="form-group">
                        <label>Fogyasztás L/100Km: </label>
                        <input type="number"
                            placeholder="Ide írja be a fogyasztást"
                            required
                            className="form-control"
                            value={this.state.consumption}
                            onChange={this.onChangeConsumption}
                        />
                    </div>
                    <div className="form-group">
                        <label>Rendszám: </label>
                        <input type="text"
                             placeholder="Ide írja a rendszámot"
                            required
                            className="form-control"
                            value={this.state.plateNumber}
                            onChange={this.onChangePlateNumber}
                        />
                    </div>

                    <div className="form-group">
                        
                        <input type="submit" value="Create Car" className="btn btn-primary" />
                    </div>
                </form>
          </div>         
        </Container>
      </div>

            </div>
        )
    }
}
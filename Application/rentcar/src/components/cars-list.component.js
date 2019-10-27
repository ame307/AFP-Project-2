import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Car = props => (
    <tr>
        <td>{props.car.brand}</td>
        <td>{props.car.model}</td>
        <td>{props.car.consumption}</td>
        <td>{props.car.plateNumber}</td>
        <td>
            <Link to={"/edit/"+props.car._id}>edit</Link> | <a href='#' onClick={() => { props.deleteCar(props.car._id) }}>delete</a>
        </td>
    </tr>    
)

export default class CarsList extends Component {
    constructor(props) {
        super(props);

        this.deleteCar = this.deleteCar.bind(this);

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

    deleteCar(id) {
        axios.delete('http://localhost:5000/cars/' + id)
            .then(res => console.log(res.data));
        this.setState({
            cars: this.state.cars.filter(el => el._id !== id)
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
                <h3>Cars</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Consumption</th>
                            <th>Plate number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.carsList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
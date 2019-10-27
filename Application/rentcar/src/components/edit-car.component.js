import React, { Component } from 'react';
import axios from 'axios';

export default class EditCar extends Component {
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

    componentDidMount() {
        axios.get('http://localhost:5000/cars/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    brand: res.data.brand,
                    model: res.data.model,
                    consumption: res.data.consumption,
                    plateNumber: res.data.plateNumber
                })
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    onChangeModel(e) {
        this.setState({
            model: e.target.value
        })
    }

    onChangeBrand(e) {
        this.setState({
            brand: e.target.value
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
            model: this.state.model,
            brand: this.state.brand,
            consumption: this.state.consumption,
            plateNumber: this.state.plateNumber
        }

        console.log(car);
         axios.post('http://localhost:5000/cars/update/'+this.props.match.params.id, car)
             .then(res => console.log(res.data));

        this.setState({
            model: '',
            brand: '',
            consumption: 0,
            plateNumber: ''
        })

        window.location = '/';
    }



    render() {
        return (
            <div>
                <h3>Edit Car</h3>
                <form onSubmit={this.onSubmit} id="create-car-form">
                    <div className="form-group">
                        <label>Model: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.model}
                            onChange={this.onChangeModel}
                        />
                    </div>
                    <div className="form-group">
                        <label>Brand: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.brand}
                            onChange={this.onChangeBrand}
                        />
                    </div>
                    <div className="form-group">
                        <label>Consumption: </label>
                        <input type="number"
                            required
                            className="form-control"
                            value={this.state.consumption}
                            onChange={this.onChangeConsumption}
                        />
                    </div>
                    <div className="form-group">
                        <label>Plate number: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.plateNumber}
                            onChange={this.onChangePlateNumber}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Edit Car" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
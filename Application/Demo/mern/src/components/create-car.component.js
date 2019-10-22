import React, { Component } from 'react';

export default class CreateCar extends Component {
    constructor(props) {
        super(props);

        this.onChangeCarBrand = this.onChangeCarBrand.bind(this);
        this.onChangeCarModel = this.onChangeCarModel.bind(this);
        this.onChangeCarConsumption = this.onChangeCarConsumption.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            brand: '',
            model: '',
            consumption: 0,
        }
    }

    onChangeCarBrand(e) {
        this.setState({
            brand: e.target.value
        });
    }

    onChangeCarModel(e) {
        this.setState({
            model: e.target.value
        });
    }

    onChangeCarConsumption(e) {
        this.setState({
            consumption: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const car = {
            model: this.state.model,
            brand: this.state.brand,
            consumption: this.state.consumption
        }

        console.log(car);

        window.location = '/';
    }


    render() {
        return (
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Brand: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.brand}
                            onChange={this.onChangeCarBrand}
                        />
                    </div>
                    <div className="form-group"> 
                        <label>Model: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.model}
                            onChange={this.onChangeCarModel}
                        />
                    </div>
                    <div className="form-group">
                    <label>Sonsumption: </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.consumption}
                        onChange={this.onChangeCarConsumption}
                        />
                    </div>
                    
                    <div className="form-group">
                    <input type="submit" value="Create Car" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
import React, { Component } from 'react';
import axios from 'axios';

export default class Logout extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        // this.state = {
        //     username: '',
        //     password: ''
        // }
    }
    onSubmit(e) {
        e.preventDefault();

        axios.post('http://localhost:5000/admins/logout')
            .then(res => console.log(res.data));

        //window.location = '/';
    }



    render() {
        return (
            <div>
                <h3>Login</h3>
                <form onSubmit={this.onSubmit} id="create-car-form">
                    <div className="form-group">
                        <input type="submit" value="Logout" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthService from "../services/auth.service";


export default class Registration extends Component {
  constructor() {
    super();

    this.state = {
      FirstName: '',
      LastName: '',
      Email: '',
      Password: '',
      Phone: '',
      State: '',
      City: '',
      ZipCode: '',
      Country: '',
      AdressLineOne: '',
      AdressLineTwo: '',
      UserTypeID: 1

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    const data = {
      FirstName: this.state.FirstName, LastName: this.state.LastName, Email: this.state.Email, Password: this.state.Password,
      Phone: this.state.Phone,
      State: this.state.State,
      City: this.state.City,
      ZipCode: this.state.ZipCode,
      Country: this.state.Country,
      AdressLineOne: this.state.AdressLineOne,
      AdressLineTwo: this.state.AdressLineTwo,
      UserTypeID: this.state.UserTypeID
    }
    AuthService.register(
      data
    ).then(
      response => {
        this.setState({
          message: response.data.message,
          successful: true
        });
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          successful: false,
          message: resMessage
        });
      }
    );

  }

  render() {
    return (
      <>

        <form onSubmit={this.handleSubmit}>
          <h3>Sign Up</h3>
          <div className="form-group">
            <label>User Type</label>
            <select id="UserTypeID" name="UserTypeID" className="form-control" onChange={this.handleChange}  >
              <option value="1">Student</option>
              <option value="2">Tutor</option>
              <option value="3">Parent</option>
            </select>
          </div>
          <div className="form-group">
            <label>First name</label>
            <input type="text" id="FirstName" name="FirstName" className="form-control" placeholder="First name" onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Last name" id="LastName" name="LastName" onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" id="Email" name="Email" onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" id="Password" name="Password" onChange={this.handleChange} />
          </div>

          <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
          <p className="forgot-password text-right">
            Already registered <Link to={"/sign-in"} className="nav-link">sign in?</Link>
          </p>
        </form>
      </>
    );
  }
}

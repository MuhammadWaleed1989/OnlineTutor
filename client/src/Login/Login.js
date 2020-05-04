import React, { Component } from "react";
import AuthService from "../services/auth.service";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {

      Email: '',
      Password: '',

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

    const data = { Email: this.state.Email, Password: this.state.Password }
    AuthService.login(
      data
    ).then(
      response => {
        this.props.history.push("/Admin");
        window.location.reload();

      },
      error => {
        const resMessage =
          (error.response &&
            error.response.message &&
            error.response.message) ||
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
          <h3>Sign In</h3>

          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" id="Email" name="Email"
              onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="Password" name="Password" placeholder="Enter password" onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">Submit</button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </>
    );
  }
}

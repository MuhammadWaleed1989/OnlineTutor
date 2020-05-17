import React, { Component } from "react";
import AuthService from "../services/auth.service";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {

      Email: '',
      Password: '',
      message: '',
      successful: false

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
        if (response.accessToken) {
          const user = response.user;
          const userType = user[0].UserType;
          switch (userType) {
            case 'Admin':
              this.props.history.push("/tutors");
              break;
            case 'Tutor':
              this.props.history.push("/tutorprofile");
              break;
            case 'Parent':
              this.props.history.push("/parentprofile");
              break;
            case 'Student':
              this.props.history.push("/studentprofile");
              break;
            default:
              this.props.history.push("/sign-in");
          }
          window.location.reload();
        }
        else {
          this.setState({

            message: response.message
          });
        }



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
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      const userType = user.UserType;
      switch (userType) {
        case 'Admin':
          this.props.history.push("/tutors");
          break;
        case 'Tutor':
          this.props.history.push("/tutorprofile");
          break;
        case 'Parent':
          this.props.history.push("/parentprofile");
          break;
        case 'Student':
          this.props.history.push("/studentprofile");
          break;
        default:
          this.props.history.push("/sign-in");
      }
      window.location.reload();
    }
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
          {this.state.message !== '' &&
            <div className="form-group">
              <div className="errorMsg">{this.state.message}</div></div>}
          <button type="submit" className="btn btn-primary btn-block">Submit</button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </>
    );
  }
}

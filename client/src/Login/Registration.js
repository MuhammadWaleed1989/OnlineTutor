import React, { Component } from "react";
import axios from "axios";
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
      City: '',
      AdressLineOne: '',
      AdressLineTwo: '',
      UserTypeID: -1,
      profileImg: '',
      userTypeList: [],
      showOption: false,
      errors: {}

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.handleDropDownChange = this.handleDropDownChange.bind(this);
  }
  validateForm() {

    // let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (this.state.FirstName === '') {
      formIsValid = false;
      errors["FirstName"] = "*Please enter your first name.";
    }

    if (typeof this.state.FirstName !== "undefined") {
      if (!this.state.FirstName.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["FirstName"] = "*Please enter alphabet characters only.";
      }
    }
    if (this.state.LastName === '') {
      formIsValid = false;
      errors["LastName"] = "*Please enter your last name.";
    }

    if (typeof this.state.LastName !== "undefined") {
      if (!this.state.LastName.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["LastName"] = "*Please enter alphabet characters only.";
      }
    }
    if (this.state.UserTypeID === -1) {
      formIsValid = false;
      errors["UserTypeID"] = "*Please select user type.";
    }


    if (this.state.Email === '') {
      formIsValid = false;
      errors["Email"] = "*Please enter your email-ID.";
    }

    if (typeof this.state.Email !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(this.state.Email)) {
        formIsValid = false;
        errors["Email"] = "*Please enter valid email-ID.";
      }
    }

    if (this.state.Phone === '') {
      formIsValid = false;
      errors["Phone"] = "*Please enter your mobile no.";
    }

    if (typeof this.state.Phone !== "undefined") {
      if (!this.state.Phone.match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["Phone"] = "*Please enter valid mobile no.";
      }
    }

    if (this.state.Password === '') {
      formIsValid = false;
      errors["Password"] = "*Please enter your password.";
    }

    if (typeof this.state.Password !== "undefined") {
      if (!this.state.Password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["Password"] = "*Please enter secure and strong password.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;


  }
  componentDidMount() {
    AuthService.getUserTypes(

    ).then(
      response => {

        this.setState({
          userTypeList: response.data
        });
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

      }
    );
  }
  handleDropDownChange = (e) => {
    if (e.target.name === "UserTypeID" && e.target.value === "2") {
      this.setState({
        showOption: true
      })
    }
    else {
      this.setState({
        showOption: false
      })
    }

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
    const formData = new FormData()
    formData.append('profileImg', this.state.profileImg)
    formData.append('FirstName', this.state.FirstName)
    formData.append('LastName', this.state.LastName)
    formData.append('Email', this.state.Email)
    formData.append('Password', this.state.Password)
    formData.append('Phone', this.state.Phone)
    formData.append('City', this.state.City)
    formData.append('AdressLineOne', this.state.AdressLineOne)
    formData.append('AdressLineTwo', this.state.AdressLineTwo)
    formData.append('UserTypeID', this.state.UserTypeID)
    //if (this.validateForm()) {
    AuthService.register(
      formData
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
    //}

  }
  onFileChange(e) {
    this.setState({ profileImg: e.target.files[0] })
  }

  render() {
    const { userTypeList } = this.state;
    return (
      <>

        <form onSubmit={this.handleSubmit}>
          <h3>Sign Up</h3>
          <div className="form-group">
            <label>User Type</label>
            <select id="UserTypeID" name="UserTypeID" className="form-control" onChange={e => { this.handleChange(e); this.handleDropDownChange(e) }}  >
              <option value="-1" >Select Type</option>
              {
                userTypeList.map((item, index) => (
                  <option key={index} value={item.UserTypeID} >{item.UserType}</option>
                ))

              }
            </select>
            <div className="errorMsg">{this.state.errors.UserTypeID}</div>
          </div>
          <div className="form-group">
            <label>First name</label>
            <input type="text" autocomplete="off" id="FirstName" name="FirstName" className="form-control" placeholder="First name" onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.FirstName}</div>
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input type="text" autocomplete="off" className="form-control" placeholder="Last name" id="LastName" name="LastName" onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.LastName}</div>
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input type="email" autocomplete="off" className="form-control" placeholder="Enter email" id="Email" name="Email" onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.Email}</div>
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="text" autocomplete="off" className="form-control" placeholder="Enter phone" id="Phone" name="Phone" onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.Phone}</div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" autocomplete="off" className="form-control" placeholder="Enter password" id="Password" name="Password" onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.Password}</div>
          </div>
          {this.state.showOption &&
            <div className="form-group">
              <label>Upload CV</label>
              <input type="file" name="file" onChange={this.onFileChange} />
            </div>
          }

          <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
          <p className="forgot-password text-right">
            Already registered <Link to={"/sign-in"} className="nav-link">sign in?</Link>
          </p>
        </form>
      </>
    );
  }
}

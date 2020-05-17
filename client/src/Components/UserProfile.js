import React, { Component } from "react";
import UserService from "../services/user.service";
import { Helmet } from 'react-helmet';

const TITLE = 'Profile Information';

export default class UserProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {

            formValues: {},
            message: "",
            successful: false,
            profileImg: '',

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
    }
    componentDidMount() {

        const users = JSON.parse(localStorage.getItem('user'));
        this.setState({ formValues: users });
    }
    handleChange(event) {
        event.preventDefault();
        let formValues = this.state.formValues;
        let name = event.target.name;
        let value = event.target.value;

        formValues[name] = value;

        this.setState({ formValues })
    }




    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            message: "",
            successful: false
        });

        const data = this.state.formValues;
        const formData = new FormData()
        formData.append('profileImg', this.state.profileImg)
        formData.append('FirstName', this.state.formValues["FirstName"])
        formData.append('LastName', this.state.formValues["LastName"])
        formData.append('Email', this.state.formValues["Email"])
        formData.append('Password', this.state.formValues["Password"])
        formData.append('Phone', this.state.formValues["Phone"])
        formData.append('City', this.state.formValues["City"])
        formData.append('AdressLineOne', this.state.formValues["AdressLineOne"])
        formData.append('AdressLineTwo', this.state.formValues["AdressLineTwo"])
        UserService.postUserData(
            formData
        ).then(
            response => {
                localStorage.setItem("user", JSON.stringify(response.data[0]));
                window.location.reload();
                this.setState({
                    message: "Successfully updated",
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
    onFileChange(e) {
        this.setState({ profileImg: e.target.files[0] })
    }
    render() {
        return (
            <>
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>




                <div className="card">
                    <div className="card-header bg-transparent header-elements-inline">
                        <h5 className="card-title">Profile information</h5>
                        {this.state.formValues["UserType"] === 'Tutor' &&
                            <div className="header-elements">
                                <button type="button" id="show" className="btn btn-light btn-sm" ><i className="icon-plus2 mr-2"></i>Preview</button>
                            </div>
                        }
                    </div>


                    <div className="card-body">
                        <form onSubmit={this.handleSubmit} action="#">
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>First Name</label>
                                        <input type="text" id="FirstName" name="FirstName" value={this.state.formValues["FirstName"] || ''} onChange={this.handleChange} className="form-control"></input>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Last Name</label>
                                        <input type="text" id="LastName" name="LastName" value={this.state.formValues["LastName"] || ''} onChange={this.handleChange} className="form-control"></input>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Address line 1</label>
                                        <input type="text" id="AdressLineOne" name="AdressLineOne" value={this.state.formValues["AdressLineOne"] || ''} onChange={this.handleChange} className="form-control"></input>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Address line 2</label>
                                        <input type="text" id="AdressLineTwo" name="AdressLineTwo" value={this.state.formValues["AdressLineTwo"] || ''} onChange={this.handleChange} className="form-control"></input>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>City</label>
                                        <input type="text" id="City" name="City" value={this.state.formValues["City"] || ''} onChange={this.handleChange} className="form-control"></input>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Email</label>
                                        <input type="text" readOnly="readOnly" id="Email" name="Email" value={this.state.formValues["Email"] || ''} onChange={this.handleChange} className="form-control"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Phone #</label>
                                        <input type="text" id="Phone" name="Phone" value={this.state.formValues["Phone"] || ''} onChange={this.handleChange} className="form-control"></input>
                                        <span className="form-text text-muted">+99-99-9999-9999</span>
                                    </div>

                                    <div className="col-md-6">
                                        <label>Upload profile image</label>
                                        <div >
                                            <input type="file" name="file" onChange={this.onFileChange} /></div>
                                        <span className="form-text text-muted">Accepted formats: gif, png, jpg. Max file size 2Mb</span>
                                    </div>
                                </div>
                            </div>

                            <div className="text-right">
                                <button type="submit" className="btn btn-primary">Save Profile</button>
                            </div>
                        </form>
                    </div>
                </div>


            </>
        );
    }
}
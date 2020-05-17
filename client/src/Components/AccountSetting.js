import React, { Component } from "react";
import AuthService from "../services/auth.service";
const TITLE = 'Account Setting';


export default class AccountSetting extends Component {
    constructor(props) {
        super(props);

        this.state = {

            formValues: {},
            message: "",
            successful: false

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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
        AuthService.updatePassword(
            data
        ).then(
            response => {
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
    render() {
        return (
            <>
                <div className="content">
                    <div className="d-md-flex align-items-md-start">
                        <div className="tab-content w-100">
                            <div className="tab-pane fade active show" id="profile">
                                <div className="card">
                                    <div className="card-header header-elements-inline">
                                        <h5 className="card-title">Account settings</h5>
                                    </div>

                                    <div className="card-body">
                                        <form onSubmit={this.handleSubmit} action="#">
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Email</label>
                                                        <input type="text" id="Email" name="Email" value={this.state.formValues["Email"] || ''} onChange={this.handleChange} readOnly="readOnly" className="form-control"></input>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <label>Current password</label>
                                                        <input type="password" id="Password" name="Password" value={this.state.formValues["Password"] || ''} onChange={this.handleChange} readOnly="readOnly" className="form-control"></input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>New password</label>
                                                        <input type="password" id="NewPassword" name="NewPassword" value={this.state.formValues["NewPassword"] || ''} onChange={this.handleChange} placeholder="Enter new password" className="form-control"></input>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <label>Repeat password</label>
                                                        <input type="password" id="ConfirmPassword" name="ConfirmPassword" value={this.state.formValues["ConfirmPassword"] || ''} onChange={this.handleChange} placeholder="Repeat new password" className="form-control"></input>
                                                    </div>
                                                </div>
                                            </div>



                                            <div className="text-right">
                                                <button type="submit" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
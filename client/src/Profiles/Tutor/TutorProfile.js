import React, { Component } from "react";
import UserService from "../../services/user.service";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import UserProfile from '../../Components/UserProfile';
import TutorProfilePreview from '../../Components/TutorProfilePreview'
const TITLE = 'Profile Information';

export default class TutorProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {

            tutorBio: {},
            message: "",
            successful: false

        };

        this.handleChangeTutorBio = this.handleChangeTutorBio.bind(this);
        this.handleSubmitTutorBio = this.handleSubmitTutorBio.bind(this);
    }
    componentDidMount() {

        this.getTutorBio();


    }

    getTutorBio() {
        const users = JSON.parse(localStorage.getItem('user'));

        UserService.getTutorBio(users.UserID).then(
            response => {
                this.setState({
                    tutorBio: response.data
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
    handleChangeTutorBio(event) {
        event.preventDefault();
        let tutorBio = this.state.tutorBio;
        let name = event.target.name;
        let value = event.target.value;

        tutorBio[name] = value;

        this.setState({ tutorBio })
    }

    handleSubmitTutorBio(e) {
        e.preventDefault();
        this.setState({
            message: "",
            successful: false
        });
        const data = this.state.tutorBio;
        if (data.TutorBioID === "-1") {
            UserService.postTutorBio(
                data
            ).then(
                response => {
                    this.getTutorBio();
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
        else {
            UserService.updateTutorBio(
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

    }



    render() {
        return (
            <>
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>
                <div className="content-wrapper">
                    <div className="page-header page-header-light">
                        <div className="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
                            <div className="d-flex">
                                <div className="breadcrumb">
                                    <Link to={"/tutorprofile"} className="breadcrumb-item">
                                        <i className="icon-home2 mr-2"></i>Profile information</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content">

                        <UserProfile></UserProfile>
                        <div className="card">
                            <div className="card-header header-elements-inline">
                                <h5 className="card-title">Bio Data</h5>

                            </div>

                            <div className="card-body">
                                <form onSubmit={this.handleSubmitTutorBio} action="#">
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Description</label>
                                                <input type="text" id="LongDescription" name="LongDescription" value={this.state.tutorBio["LongDescription"] || ''} onChange={this.handleChangeTutorBio} className="form-control"></input>
                                            </div>
                                            <div className="col-md-6">
                                                <label>Pay Per Hour</label>
                                                <input type="text" id="PayPerHour" name="PayPerHour" value={this.state.tutorBio["PayPerHour"] || ''} onChange={this.handleChangeTutorBio} className="form-control"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label>University</label>
                                                <input type="text" id="University" name="University" value={this.state.tutorBio["University"] || ''} onChange={this.handleChangeTutorBio} className="form-control"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label>Major Subject</label>
                                                <input type="text" id="MajorSubject" name="MajorSubject" value={this.state.tutorBio["MajorSubject"] || ''} onChange={this.handleChangeTutorBio} className="form-control"></input>
                                            </div>
                                            {/* <div className="col-md-6">
                                                <label>Grade</label>
                                                <input type="text" id="Grade" name="Grade" value={this.state.tutorBio["Grade"] || ''} onChange={this.handleChangeTutorBio} className="form-control"></input>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <button type="submit" className="btn btn-primary">Save Bio</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <TutorProfilePreview></TutorProfilePreview>
            </>
        );
    }
}
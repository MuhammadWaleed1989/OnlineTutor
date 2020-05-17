import React, { Component } from "react";
import UserService from "../../services/user.service";
import { Link } from "react-router-dom";

export default class ViewStudentDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: {}
        };
    }
    componentDidMount() {
        const { id } = this.props.match.params
        UserService.getUserByID(id)
            .then(response =>
                this.setState({ currentUser: response.data }));
    }
    render() {
        const { currentUser } = this.state;
        return (
            <>
                <div className="content-wrapper">
                    <div className="page-header page-header-light">
                        <div className="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
                            <div className="d-flex">
                                <div className="breadcrumb">
                                    <Link to={"/students"} className="breadcrumb-item">
                                        <i className="icon-home2 mr-2"></i>Students List</Link>
                                    <span className="breadcrumb-item active">View Student Details</span>
                                </div>
                                <a href="#" className="header-elements-toggle text-default d-md-none"><i className="icon-more"></i></a>
                            </div>

                        </div>
                    </div>
                    <div class="content">
                        <div class="card">
                            <div className="card-header bg-transparent header-elements-inline">
                                <h6 className="card-title">Basic Information</h6>
                                <div className="header-elements">
                                    <button type="button" className="btn btn-light btn-sm"><i className="icon-file-check mr-2"></i> Save</button>
                                    <button type="button" className="btn btn-light btn-sm ml-3"><i className="icon-printer mr-2"></i> Print</button>
                                </div>
                            </div>
                            <div class="card-body">



                                <div class="row">
                                    <label class="col-form-label col-lg-2">First Name</label>
                                    <div class="col-lg-10">

                                        <label class="col-form-label">{this.state.currentUser["FirstName"] || ''}</label>
                                    </div>
                                </div>

                                <div class="row">
                                    <label class="col-form-label col-lg-2">Last Name</label>
                                    <div class="col-lg-10">
                                        <label class="col-form-label">{this.state.currentUser["LastName"] || ''}</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <label class="col-form-label col-lg-2">Phone</label>
                                    <div class="col-lg-10">
                                        <label class="col-form-label">{this.state.currentUser["Phone"] || ''}</label>
                                    </div>
                                </div>

                                <div class="row">
                                    <label class="col-form-label col-lg-2">Email</label>
                                    <div class="col-lg-10">
                                        <label class="col-form-label">{this.state.currentUser["Email"] || ''}</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <label class="col-form-label col-lg-2">City</label>
                                    <div class="col-lg-10">
                                        <label class="col-form-label">{this.state.currentUser["City"] || ''}</label>
                                    </div>
                                </div>

                                <div class="row">
                                    <label class="col-form-label col-lg-2">State</label>
                                    <div class="col-lg-10">
                                        <label class="col-form-label">{this.state.currentUser["State"] || ''}</label>
                                    </div>
                                </div>

                                <div class="row">
                                    <label class="col-form-label col-lg-2">Zip Code</label>
                                    <div class="col-lg-10">
                                        <label class="col-form-label">{this.state.currentUser["ZipCode"] || ''}</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <label class="col-form-label col-lg-2">Adress Line One</label>
                                    <div class="col-lg-10">
                                        <label class="col-form-label">{this.state.currentUser["AdressLineOne"] || ''}</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <label class="col-form-label col-lg-2">Adress Line Two</label>
                                    <div class="col-lg-10">
                                        <label class="col-form-label">{this.state.currentUser["AdressLineTwo"] || ''}</label>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div className="card-header bg-transparent header-elements-inline">
                                    <h6 className="card-title">Qualification</h6>

                                </div>
                                <div class="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-lg">
                                            <thead>
                                                <tr>
                                                    <th>Description</th>
                                                    <th>Rate</th>
                                                    <th>Hours</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h6 className="mb-0">Create UI design model</h6>
                                                        <span className="text-muted">One morning, when Gregor Samsa woke from troubled.</span>
                                                    </td>
                                                    <td>$70</td>
                                                    <td>57</td>
                                                    <td><span className="font-weight-semibold">$3,990</span></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h6 className="mb-0">Support tickets list doesn't support commas</h6>
                                                        <span className="text-muted">I'd have gone up to the boss and told him just what i think.</span>
                                                    </td>
                                                    <td>$70</td>
                                                    <td>12</td>
                                                    <td><span className="font-weight-semibold">$840</span></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h6 className="mb-0">Fix website issues on mobile</h6>
                                                        <span className="text-muted">I am so happy, my dear friend, so absorbed in the exquisite.</span>
                                                    </td>
                                                    <td>$70</td>
                                                    <td>31</td>
                                                    <td><span className="font-weight-semibold">$2,170</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
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
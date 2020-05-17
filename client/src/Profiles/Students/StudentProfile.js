import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserProfile from '../../Components/UserProfile';

export default class StudentProfile extends Component {
    render() {
        return (
            <>
                <div className="content-wrapper">
                    <div className="page-header page-header-light">
                        <div className="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
                            <div className="d-flex">
                                <div className="breadcrumb">
                                    <Link to={"/studentprofile"} className="breadcrumb-item">
                                        <i className="icon-home2 mr-2"></i>Profile information</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <UserProfile></UserProfile>
                    </div>
                </div>
            </>
        );
    }
}
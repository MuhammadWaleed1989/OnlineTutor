import React, { Component } from "react";
import UserProfile from '../../Components/UserProfile'

export default class ParentProfile extends Component {
    render() {
        return (
            <>
                <div className="content-wrapper">
                    <div className="page-header page-header-light">
                        <div className="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
                            <div className="d-flex">
                                <div className="breadcrumb">
                                    <a href="index.html" className="breadcrumb-item"><i className="icon-home2 mr-2"></i>Tutor Home</a>
                                    <a href="user_pages_profile_tabbed.html" className="breadcrumb-item">Profile information</a>
                                </div>
                                <a href="#" className="header-elements-toggle text-default d-md-none"><i className="icon-more"></i></a>
                            </div>
                        </div>
                    </div>

                    <UserProfile></UserProfile>

                </div>
            </>
        );
    }
}
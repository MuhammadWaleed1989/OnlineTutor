import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import AccountSetting from '../../Components/AccountSetting'
const TITLE = 'Account Setting';

export default class StudentAccountSettings extends Component {
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
                                    <Link to={"/parentprofile"} className="breadcrumb-item">
                                        <i className="icon-home2 mr-2"></i>Profile information</Link>
                                    <span className="breadcrumb-item active">Account setting</span>

                                </div>
                            </div>
                        </div>
                    </div>

                    <AccountSetting></AccountSetting>
                </div>
            </>
        );
    }
}
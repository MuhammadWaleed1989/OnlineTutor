import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Subject from './SubjectsAndLevels/Subject'
import Levels from './SubjectsAndLevels/Levels'
import SubjectsAndLevels from './SubjectsAndLevels/SubjectsAndLevels'
const TITLE = 'Subjects List';


export default class SubjectsList extends Component {

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
                                    <Link to={"/subjectslist"} className="breadcrumb-item">
                                        <i className="icon-home2 mr-2"></i>Subjects and Levels</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="d-md-flex align-items-md-start">
                            <div className="tab-content w-100">
                                <div className="tab-pane fade active show" id="profile">
                                    <Subject></Subject>
                                    <Levels></Levels>
                                    <SubjectsAndLevels></SubjectsAndLevels>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
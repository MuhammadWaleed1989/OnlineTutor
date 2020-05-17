import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import TutorService from "../../services/tutor.service";
import MultiSelect from "@khanacademy/react-multi-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TITLE = 'Speciality and Qualifications';


export default class SpecialityAndQualificationsProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            subjectsList: [],
            levelsList: [],
            subjectsAndLevelsList: [],
            subjectAndLevelsValues: {},
            message: "",
            successful: false,
            selected: [],
            subjectID: '-1'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getTutorAllSubjectsAndLevels = this.getTutorAllSubjectsAndLevels.bind(this);
        this.getallsubjects = this.getallsubjects.bind(this);
        this.getAllLevelsBySubjectID = this.getAllLevelsBySubjectID.bind(this);
    }



    handleChange(event) {
        event.preventDefault();
        let subjectAndLevelsValues = this.state.subjectAndLevelsValues;
        let name = event.target.name;
        let value = event.target.value;

        subjectAndLevelsValues[name] = value;

        this.setState({ subjectAndLevelsValues })

        this.setState({ subjectID: value })

        this.getAllLevelsBySubjectID();

    }
    getAllLevelsBySubjectID() {
        TutorService.getAllLevelsBySubjectID(this.state.subjectID)
            .then(response => {
                let tmpArray = []
                for (var i = 0; i < response.data.length; i++) {
                    tmpArray.push({ label: response.data[i].LevelName, value: response.data[i].LevelID })
                }

                this.setState({ levelsList: tmpArray });
            });



    }
    getallsubjects() {
        TutorService.getallsubjects()
            .then(response => this.setState({ subjectsList: response.data }));
    }

    getTutorAllSubjectsAndLevels() {
        TutorService.getTutorAllSubjectsAndLevels()
            .then(response => this.setState({ subjectsAndLevelsList: response.data }));
    }


    handleSubmit(e) {

        e.preventDefault();
        this.setState({
            message: "",
            successful: false
        });
        const data = this.state.subjectAndLevelsValues;
        let tmpArray = []
        for (var i = 0; i < this.state.selected.length; i++) {
            tmpArray.push({ LevelID: this.state.selected[i], SubjectID: data.SubjectID })
        }

        TutorService.saveTutorSubjectAndLevels(
            tmpArray
        ).then(
            response => {
                this.setState({
                    message: "Successfully updated",
                    successful: true
                });
                this.getTutorAllSubjectsAndLevels();
                window.$("#subjectsAndLevelsModel").modal("hide");
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

    componentDidMount() {

        this.getTutorAllSubjectsAndLevels();
        this.getallsubjects();


    }
    render() {
        const { subjectsAndLevelsList } = this.state;
        const { subjectsList } = this.state;
        const { selected } = this.state;
        const { levelsList } = this.state;
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
                                    <span className="breadcrumb-item active">Speciality and Qualifications</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content">


                        <div className="card">
                            <div className="card-header bg-transparent header-elements-inline">
                                <h6 className="card-title">Subjects</h6>
                                <div className="header-elements">
                                    <button type="button" className="btn btn-light btn-sm" data-toggle="modal" data-target="#subjectsAndLevelsModel"><i className="icon-plus2 mr-2"></i>Add</button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr className="border-bottom-danger">
                                                <th>#</th>
                                                <th>Subject Name</th>
                                                <th>Levels</th>
                                                {/* <th>Action</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {subjectsAndLevelsList.length > 0 ? (
                                                subjectsAndLevelsList.map((subjectsAndLevels, index) => (
                                                    <tr key={subjectsAndLevels.SubjectID}>
                                                        <td>{index + 1}</td>
                                                        <td>{subjectsAndLevels.SubjectName}</td>
                                                        <td>{subjectsAndLevels.LevelName}</td>
                                                        {/* <td><button className="btn" >
                                                            <span>
                                                                <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
                                                            </span>
                                                        </button>
                                                            <button className="btn">
                                                                <span>
                                                                    <FontAwesomeIcon icon="edit"></FontAwesomeIcon>
                                                                </span>
                                                            </button></td> */}
                                                    </tr>
                                                ))
                                            ) : (
                                                    <tr>
                                                        <td colSpan={3} className="Textalign">No Subject Level Recorded</td>
                                                    </tr>
                                                )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="modal fade" id="subjectsAndLevelsModel" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="false">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalCenterTitle">Add Subject Levels</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <form onSubmit={this.handleSubmit} action="#">
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <label>Subect</label>
                                                    <select className="form-control" id="SubjectID" name="SubjectID" value={this.state.subjectAndLevelsValues["SubjectID"] || ''} onChange={this.handleChange}>
                                                        <option value="-1" >Select Subject</option>
                                                        {
                                                            subjectsList.map((item, index) => (
                                                                <option key={index} value={item.SubjectID} >{item.SubjectName}</option>
                                                            ))

                                                        }
                                                    </select>
                                                    {/* <input type="text" id="SubjectName" name="SubjectName" value={this.state.subjectAndLevelsValues["SubjectName"] || ''} onChange={this.handleChange} className="form-control"></input> */}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <label>Levels</label>
                                                    <MultiSelect
                                                        options={levelsList}
                                                        selected={selected}
                                                        onSelectedChanged={selected => this.setState({ selected })}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary">Save changes</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
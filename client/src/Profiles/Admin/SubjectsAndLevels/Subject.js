import React, { Component } from "react";
import SubjectLevelService from "../../../services/subjectAndLevel.service";


export default class Subject extends Component {
    constructor(props) {
        super(props);

        this.state = {
            subjectsList: [],
            subjectValues: {},
            message: "",
            successful: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getallsubjects = this.getallsubjects.bind(this);
    }



    handleChange(event) {
        event.preventDefault();
        let subjectValues = this.state.subjectValues;
        let name = event.target.name;
        let value = event.target.value;

        subjectValues[name] = value;

        this.setState({ subjectValues })
    }

    getallsubjects() {
        SubjectLevelService.getallsubjects()
            .then(response => this.setState({ subjectsList: response.data }));
    }


    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            message: "",
            successful: false
        });

        const data = this.state.subjectValues;
        SubjectLevelService.savesubject(
            data
        ).then(
            response => {
                this.setState({
                    message: "Successfully updated",
                    successful: true
                });
                this.getallsubjects();
                window.$("#subject").modal("hide");
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

        this.getallsubjects();

    }
    render() {
        const { subjectsList } = this.state;
        return (
            <>
                <div className="card">
                    <div className="card-header bg-transparent header-elements-inline">
                        <h6 className="card-title">Subjects</h6>
                        <div className="header-elements">
                            <button type="button" className="btn btn-light btn-sm" data-toggle="modal" data-target="#subject"><i className="icon-plus2 mr-2"></i>Add</button>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr className="border-bottom-danger">
                                        <th>#</th>
                                        <th>Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {subjectsList.length > 0 ? (
                                        subjectsList.map((subject, index) => (
                                            <tr key={subject.SubjectID}>
                                                <td>{index + 1}</td>
                                                <td>{subject.SubjectName}</td>
                                            </tr>
                                        ))
                                    ) : (
                                            <tr>
                                                <td colSpan={2} className="Textalign">No Subject Recorded</td>
                                            </tr>
                                        )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="subject" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="false">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Add Subject</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={this.handleSubmit} action="#">
                                <div className="modal-body">
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label>Subject Name</label>
                                                <input type="text" id="SubjectName" name="SubjectName" value={this.state.subjectValues["SubjectName"] || ''} onChange={this.handleChange} className="form-control"></input>
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
            </>
        );
    }
}
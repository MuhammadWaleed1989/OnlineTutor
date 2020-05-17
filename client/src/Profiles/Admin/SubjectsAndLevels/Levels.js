import React, { Component } from "react";
import SubjectLevelService from "../../../services/subjectAndLevel.service";


export default class Levels extends Component {
    constructor(props) {
        super(props);

        this.state = {
            levelsList: [],
            levelsValues: {},
            message: "",
            successful: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getAllLevels = this.getAllLevels.bind(this);
    }



    handleChange(event) {
        event.preventDefault();
        let levelsValues = this.state.levelsValues;
        let name = event.target.name;
        let value = event.target.value;

        levelsValues[name] = value;

        this.setState({ levelsValues })
    }

    getAllLevels() {
        SubjectLevelService.getAllLevels()
            .then(response => this.setState({ levelsList: response.data }));
    }


    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            message: "",
            successful: false
        });

        const data = this.state.levelsValues;
        SubjectLevelService.saveLevel(
            data
        ).then(
            response => {
                this.setState({
                    message: "Successfully updated",
                    successful: true
                });
                this.getAllLevels();
                window.$("#level").modal("hide");
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

        this.getAllLevels();

    }
    render() {
        const { levelsList } = this.state;
        return (
            <>
                <div className="card">
                    <div className="card-header bg-transparent header-elements-inline">
                        <h6 className="card-title">Levels</h6>
                        <div className="header-elements">
                            <button type="button" className="btn btn-light btn-sm" data-toggle="modal" data-target="#level"><i className="icon-plus2 mr-2"></i>Add</button>
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
                                    {levelsList.length > 0 ? (
                                        levelsList.map((level, index) => (
                                            <tr key={level.LevelID}>
                                                <td>{index + 1}</td>
                                                <td>{level.LevelName}</td>
                                            </tr>
                                        ))
                                    ) : (
                                            <tr>
                                                <td colSpan={2} className="Textalign">No Level Recorded</td>
                                            </tr>
                                        )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="level" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="false">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Add Level</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={this.handleSubmit} action="#">
                                <div className="modal-body">
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label>Level Name</label>
                                                <input type="text" id="LevelName" name="LevelName" value={this.state.levelsValues["LevelName"] || ''} onChange={this.handleChange} className="form-control"></input>
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
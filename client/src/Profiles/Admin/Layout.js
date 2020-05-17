import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import StudentList from "./StudentList";
import TutorList from "./TutorList";
import ParentList from "./ParentsList";
import ViewTutorDetails from "./ViewTutorDetails";
import ViewStudentDetails from "./ViewStudentDetails";
import SubjectsList from "./SubjectsList";


export default class AdminLayout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ""
        };
    }

    componentDidMount() {
        this.setState({
            content: "Hi This is muhammad!"
        });
    }

    render() {
        return (
            <>
                <Router>
                    <Navbar />
                    <div className="page-content">
                        {/* <SideBar /> */}
                        <Switch>

                            <Route path="/students" component={StudentList} />
                            <Route path="/tutors" component={TutorList} />
                            <Route path="/parents" component={ParentList} />
                            <Route path="/tutorDetails/:id/edit" component={ViewTutorDetails} />
                            <Route path="/studentDetails/:id/edit" component={ViewStudentDetails} />
                            <Route path="/subjectslist" component={SubjectsList} />
                        </Switch>
                    </div>
                </Router>
            </>
        );
    }
}
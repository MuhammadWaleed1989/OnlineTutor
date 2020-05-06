import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import SideBar from "../../Components/SideBar";
import StudentList from "./StudentList";
import TutorList from "./TutorList";
import ParentList from "./ParentsList";

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
                        <SideBar />
                        <Switch>

                            <Route path="/students" component={StudentList} />
                            <Route exact path="/tutors" component={TutorList} />
                            <Route path="/parents" component={ParentList} />
                        </Switch>
                    </div>
                </Router>
            </>
        );
    }
}
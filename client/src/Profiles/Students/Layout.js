import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import SideBar from "../../Components/SideBar";
import StudentProfile from "./StudentProfile";
import UserService from "../../services/user.service";

export default class StudentLayout extends Component {
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

                            <Route exact path="/studentprofile" component={StudentProfile} />
                            {/* <Route path="/parents" component={ParentList} /> */}
                        </Switch>
                    </div>
                </Router>
            </>
        );
    }
}
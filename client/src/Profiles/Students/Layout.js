import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import StudentAccountSettings from "./StudentAccountSettings";
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
                        <Switch>

                            <Route exact path="/studentprofile" component={StudentProfile} />
                            <Route path="/studentaccountsettings" component={StudentAccountSettings} />
                        </Switch>
                    </div>
                </Router>
            </>
        );
    }
}
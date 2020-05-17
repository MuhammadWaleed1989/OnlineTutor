import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import ParentAccountSettings from "./ParentAccountSettings";
import ParentProfile from "./ParentProfile";

export default class ParentLayout extends Component {
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

                            <Route exact path="/parentprofile" component={ParentProfile} />
                            <Route path="/parentaccountsettings" component={ParentAccountSettings} />
                        </Switch>
                    </div>
                </Router>
            </>
        );
    }
}
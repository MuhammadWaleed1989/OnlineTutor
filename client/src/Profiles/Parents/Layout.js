import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import SideBar from "../../Components/SideBar";
import ParentProfile from "./ParentProfile";
import UserService from "../../services/user.service";

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
                    <div class="page-content">
                        <SideBar />
                        <Switch>

                            <Route exact path="/parentprofile" component={ParentProfile} />
                            {/* <Route path="/parents" component={ParentList} /> */}
                        </Switch>
                    </div>
                </Router>
            </>
        );
    }
}
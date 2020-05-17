import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import TutorProfile from "./TutorProfile";
import SpecialityAndQualifications from "./SpecialityAndQualifications";
import Avalibility from "./Avalibility";
import Payment from "./Payment";
import AccountSetting from "./TutorAccountSettings";


export default class TutorLayout extends Component {
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

                            <Route exact path="/tutorprofile" component={TutorProfile} />
                            <Route path="/tutorqualifications" component={SpecialityAndQualifications} />
                            <Route path="/tutoravalibility" component={Avalibility} />
                            <Route path="/tutorpayments" component={Payment} />
                            <Route path="/tutoraccountsettings" component={AccountSetting} />
                            {/* <Route path="/parents" component={ParentList} /> */}
                        </Switch>
                    </div>
                </Router>
            </>
        );
    }
}
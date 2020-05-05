import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login/Login";
import Registration from "./Login/Registration";
import "./App.css";

import Home from "./ShowToAll/home.component";
import Admin from "./Profiles/Admin/Profile";
import AuthService from "./services/auth.service";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined
    };
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: AuthService.getCurrentUser(),
        showModeratorBoard: user[0].UserType.includes("Student"),
        showAdminBoard: user[0].UserType.includes("Admin")
      });
    }
  }

  logOut() {
    AuthService.logout();
  }
  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
    return (
      <>
        <Router>
          {currentUser ? (
            <Admin></Admin>
          ) : (
              <Home></Home>
            )}
        </Router>
      </>
    );
  }
}

export default App;

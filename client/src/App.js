import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Home from "./ShowToAll/home.component";
import Admin from "./Profiles/Admin/Layout";
import Tutor from "./Profiles/Tutor/Layout";
import Student from "./Profiles/Students/Layout";
import Parent from "./Profiles/Parents/Layout";
import AuthService from "./services/auth.service";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit, faPlus);
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userType: '',
      currentUser: undefined
    };
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: AuthService.getCurrentUser(),
        userType: user.UserType
      });
    }
  }

  render() {
    const { currentUser, userType } = this.state;
    return (
      <>
        <Router>
          {
            currentUser ? (
              (() => {
                switch (userType) {
                  case 'Admin':
                    return <Admin></Admin>
                  case 'Tutor':
                    return <Tutor></Tutor>
                  case 'Parent':
                    return <Parent></Parent>
                  case 'Student':
                    return <Student></Student>
                  default:
                    return <Home></Home>
                }
              })()
            ) : (
                <Home></Home>
              )
          }
        </Router>
      </>
    );
  }
}

export default App;

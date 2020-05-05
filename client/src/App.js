import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login/Login";
import Registration from "./Login/Registration";
import "./App.css";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import StudentList from "./Admin/StudentList";
import TutorList from "./Admin/TutorList";
import ParentList from "./Admin/ParentsList";
import Home from "./ShowToAll/home.component";
import Admin from "./Admin/Profile";
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
        {/* <Router>
          <Navbar />
          <div class="page-content">
            <SideBar /> */}
        {/* <Switch> */}
        {/* <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} /> */}
        {/* <Route path="/students" component={StudentList} />
              <Route path="/tutors" component={TutorList} />
              <Route path="/parents" component={ParentList} />
            </Switch> */}
        {/* </div>
        </Router> */}
        {/* <Login></Login> */}
        {/*
<Registration></Registration>
    

      <StudentList></StudentList>
      <TutorList></TutorList> */}
        <Router>
          {currentUser ? (
            <Admin></Admin>
          ) : (
              <Home></Home>
            )}
          {/* <Switch>
            <Route exact path={["/", "/home"]} component={Login} />
            <Route path="/Admin" component={Admin} />

          </Switch> */}
        </Router>
      </>
    );
  }
}

export default App;

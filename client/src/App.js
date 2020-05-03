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

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <div class="page-content">
            <SideBar />
            <Switch>
              {/* <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} /> */}
              <Route path="/students" component={StudentList} />
              <Route path="/tutors" component={TutorList} />
              <Route path="/parents" component={ParentList} />
            </Switch>
          </div>
        </Router>
        {/* <Registration></Registration> */}
        {/*<Login></Login>

    

      <StudentList></StudentList>
      <TutorList></TutorList> */}
      </>
    );
  }
}

export default App;

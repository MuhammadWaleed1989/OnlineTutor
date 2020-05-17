import React, { Component } from "react";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import TutorService from "../services/tutor.service";
import "../layout/Ltr/Default/full/assets/css/style.css";


export default class TUtorProfilePreview extends Component {
    constructor(props) {

        super(props);

        this.state = {
            userType: '',
            formValues: {},
            tutorBio: {},
            subjectsAndLevelsList: [],
        };
        this.getTutorBio = this.getTutorBio.bind(this);
        this.getTutorAllSubjectsAndLevels = this.getTutorAllSubjectsAndLevels.bind(this);
    }


    componentDidMount() {
        const users = JSON.parse(localStorage.getItem('user'));
        this.setState({ formValues: users });
        this.getTutorBio(users.UserID);
        this.getTutorAllSubjectsAndLevels();
    }
    getTutorBio(UserID) {

        UserService.getTutorBio(UserID).then(
            response => {
                this.setState({
                    tutorBio: response.data
                });
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({
                    successful: false,
                    message: resMessage
                });
            }
        );
    }
    getTutorAllSubjectsAndLevels() {
        TutorService.getTutorAllSubjectsAndLevels()
            .then(response => this.setState({ subjectsAndLevelsList: response.data }));
    }
    render() {
        const { subjectsAndLevelsList } = this.state;
        return (
            <>
                <div className="main_wrapper" id="pop">
                    <div className="wrapper">
                        <div className="cover">


                            <div className="close_box" id="close" >
                                <i className="fas fa-times"></i>
                            </div>

                            <div className="cover_wrapper">
                                <div className="header_wrapper">
                                    <h1>{this.state.formValues["FirstName"]} {this.state.formValues["LastName"]}</h1>
                                    <div className="stars">
                                        <ul>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                        <a href="#"><span>(Based on 2 reviews)</span></a>
                                    </div>
                                    <div className="detail">
                                        <h4>Friendly, experienced tutor and qualified teacher.</h4>
                                    </div>
                                    <nav className="nav_bar">
                                        <ul>
                                            <li><a href="#bio">bio</a></li>
                                            <li><a href="#reviews">reviews</a></li>
                                            <li><a href="#availability">availability</a></li>
                                            <li><a href="#subject">subjects</a></li>
                                            <li><a href="#qualification">qualification</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="profile_image">
                                    <div className="profile_card">
                                        <img src={`http://localhost:5000/uploads/${this.state.formValues["ImageName"]}`} alt="Profile"></img>
                                        <div className="icon_wrapper">
                                            <div>
                                                <center>
                                                    <i className="fas fa-pound-sign"></i>
                                                    <p>{this.state.tutorBio["PayPerHour"]}£/hour</p>
                                                </center>
                                            </div>
                                            <div>
                                                <center>
                                                    <i className="fas fa-clock"></i>
                                                    <p>124+hrs taught</p>
                                                </center>
                                            </div>
                                            <div>
                                                <center>
                                                    <i className="fas fa-reply"></i>
                                                    <p>Replies in 20 hours</p>
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <a href="#" className="btn mt-0 btn-secondary btn-block my-2 btn-block">Request Lesson</a>
                                        <a href="#" className="btn mt-0 btn-secondary btn-block btn-outline-dark my-2 btn-block">Ask Question</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <div className="content_body">
                                <div className="bio box" id="bio">
                                    <h2><i className="fas fa-user-alt"></i>My Bio</h2>
                                    <h5>Friendly, experienced tutor and qualified teacher.</h5>
                                    <p>{this.state.tutorBio["LongDescription"]}
                                    </p>
                                </div>
                                <div className="reviews box" id="reviews">
                                    <h2><i className="fas fa-comment-dots"></i>My Reviews</h2>
                                    <div className="review_msg">
                                        <div className="profile">
                                            <div className="logo">BS</div>
                                            <h3>Ben S</h3>
                                        </div>
                                        <div className="msg">
                                            <ul>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                            </ul>
                                            <p>Tim is a patient, knowledgeable and experienced tutor. Highly recommended.</p>
                                            <p>18th July, 2018</p>
                                        </div>
                                    </div>


                                    <div className="review_msg">
                                        <div className="profile">
                                            <div className="logo logo2">FH</div>
                                            <h3>Farrah H</h3>
                                        </div>
                                        <div className="msg">
                                            <ul>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                            </ul>
                                            <p>Tim is absolutely excellent! He is nice patient, helpful and responsive and he explains
                                        <br />
                                                                                            everything so well and is super efficient in terms of time. I am Very pleased and grateful.</p>
                                            <p>26th April, 2017</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="availability box" id="availability">
                                    <h2><i className="fas fa-calendar-alt"></i>My Availability</h2>
                                    <p>Here is my general availability.</p>



                                    <table className="table table-bordered">
                                        <thead className="thead-light">
                                            <tr>
                                                <th></th>
                                                <th>Mo</th>
                                                <th>Tu</th>
                                                <th>We</th>
                                                <th>Th</th>
                                                <th>Fr</th>
                                                <th>Sa</th>
                                                <th>Su</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <b><p>Morning</p></b>
                                                    <p>Pre 12pm</p>
                                                </td>
                                                <td><i className="fas fa-chalkboard-teacher"></i></td>
                                                <td><i className="fas fa-chalkboard-teacher"></i></td>
                                                <td><i className="fas fa-chalkboard-teacher"></i></td>
                                                <td><i className="fas fa-chalkboard-teacher"></i></td>
                                                <td><i className="fas fa-chalkboard-teacher"></i></td>
                                                <td><i className="fas fa-chalkboard-teacher"></i></td>
                                                <td><i className="fas fa-chalkboard-teacher"></i></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b><p>Afternoon</p></b>
                                                    <p>12-4pm</p>
                                                </td>
                                                <td><i className="fas fa-chalkboard-teacher"></i></td>
                                                <td><i className="fas"></i></td>
                                                <td><i className="fas fa-chalkboard-teacher"></i></td>
                                                <td><i className="fas"></i></td>
                                                <td><i className="fas fa-chalkboard-teacher"></i></td>
                                                <td><i className="fas"></i></td>
                                                <td><i className="fas fa-chalkboard-teacher"></i></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b><p>Evening</p></b>
                                                    <p>4-7pm</p>
                                                </td>
                                                <td><i className="fas"></i></td>
                                                <td><i className="fas fa-chalkboard-teacher"></i></td>
                                                <td><i className="fas"></i></td>
                                                <td><i className="fas fa-chalkboard-teacher"></i></td>
                                                <td><i className="fas"></i></td>
                                                <td><i className="fas fa-chalkboard-teacher"></i></td>
                                                <td><i className="fas"></i></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b><p>Late</p></b>
                                                    <p>7-10pm</p>
                                                </td>
                                                <td><i className="fas"></i></td>
                                                <td><i className="fas fa-chalkboard-teacher"></i></td>
                                                <td><i className="fas"></i></td>
                                                <td><i className="fas"></i></td>
                                                <td><i className="fas fa-chalkboard-teacher"></i></td>
                                                <td><i className="fas"></i></td>
                                                <td><i className="fas fa-chalkboard-teacher"></i></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="subject box" id="subject">
                                    <h2><i className="fas fa-book"></i>My Subjects</h2>
                                    <p>I teach the following subjects:</p>
                                    {/* <h5>Maths</h5> */}
                                    <table className="table">
                                        <tbody>
                                            {subjectsAndLevelsList.length > 0 ? (
                                                subjectsAndLevelsList.map((subjectsAndLevels, index) => (
                                                    <tr key={subjectsAndLevels.SubjectID}>

                                                        <td><p>{subjectsAndLevels.SubjectName}</p></td>
                                                        <td><p>{subjectsAndLevels.LevelName}</p></td>

                                                    </tr>
                                                ))
                                            ) : (
                                                    <tr>
                                                        <td colSpan={2} className="Textalign">No Subject Level Recorded</td>
                                                    </tr>
                                                )}

                                        </tbody>
                                    </table>
                                </div>



                                <div className="qualification box" id="qualification">
                                    <h2><i className="fas fa-graduation-cap"></i>My Qualification</h2>
                                    <h5>University</h5>
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p>{this.state.tutorBio["University"] || ''}</p>
                                                </td>
                                                <td>
                                                    <p>{this.state.tutorBio["MajorSubject"] || ''} </p>
                                                </td>
                                                <td>
                                                    <p>{this.state.tutorBio["Grade"] || ''}</p>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
import React, { Component } from "react";
import AuthService from "../../services/auth.service";
import UserService from "../../services/user.service";

export default class ParentProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {

            formValues: {},
            message: "",
            successful: false

        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {

        const users = JSON.parse(localStorage.getItem('user'));
        this.setState({ formValues: users[0] });
    }
    handleChange(event) {
        event.preventDefault();
        let formValues = this.state.formValues;
        let name = event.target.name;
        let value = event.target.value;

        formValues[name] = value;

        this.setState({ formValues })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            message: "",
            successful: false
        });

        const data = this.state.formValues;
        UserService.postUserData(
            data
        ).then(
            response => {
                this.setState({
                    message: response.data.message,
                    successful: true
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

    render() {
        return (
            <>
                <div className="content-wrapper">
                    <div className="page-header page-header-light">
                        <div className="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
                            <div className="d-flex">
                                <div className="breadcrumb">
                                    <a href="index.html" className="breadcrumb-item"><i className="icon-home2 mr-2"></i>Tutor Home</a>
                                    <a href="user_pages_profile_tabbed.html" className="breadcrumb-item">Profile information</a>
                                </div>
                                <a href="#" className="header-elements-toggle text-default d-md-none"><i className="icon-more"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <div className="d-md-flex align-items-md-start">
                            <div className="tab-content w-100">
                                <div className="tab-pane fade active show" id="profile">
                                    <div className="card">
                                        <div className="card-header header-elements-inline">
                                            <h5 className="card-title">Profile information</h5>

                                        </div>

                                        <div className="card-body">
                                            <form onSubmit={this.handleSubmit} action="#">
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>First Name</label>
                                                            <input type="text" id="FirstName" name="FirstName" value={this.state.formValues["FirstName"]} onChange={this.handleChange.bind(this)} className="form-control"></input>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label>Last Name</label>
                                                            <input type="text" id="LastName" name="LastName" value={this.state.formValues["LastName"]} onChange={this.handleChange.bind(this)} className="form-control"></input>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Address line 1</label>
                                                            <input type="text" id="AdressLineOne" name="AdressLineOne" value={this.state.formValues["AdressLineOne"]} onChange={this.handleChange.bind(this)} className="form-control"></input>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label>Address line 2</label>
                                                            <input type="text" id="AdressLineTwo" name="AdressLineTwo" value={this.state.formValues["AdressLineTwo"]} onChange={this.handleChange.bind(this)} className="form-control"></input>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <label>City</label>
                                                            <input type="text" id="City" name="City" value={this.state.formValues["City"]} onChange={this.handleChange.bind(this)} className="form-control"></input>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label>State/Province</label>
                                                            <input type="text" id="State" name="State" value={this.state.formValues["State"]} onChange={this.handleChange.bind(this)} className="form-control"></input>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label>ZIP code</label>
                                                            <input type="text" id="ZipCode" name="ZipCode" value={this.state.formValues["ZipCode"]} onChange={this.handleChange.bind(this)} className="form-control"></input>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Email</label>
                                                            <input type="text" readOnly="readOnly" id="Email" name="Email" value={this.state.formValues["Email"]} onChange={this.handleChange.bind(this)} className="form-control"></input>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label>Your country</label>
                                                            <select className="form-control form-control-select2 select2-hidden-accessible" data-fouc="" data-select2-id="1" tabIndex="-1" aria-hidden="true">
                                                                <option value="germany" selected="" data-select2-id="3">Germany</option>
                                                                <option value="france">France</option>
                                                                <option value="spain">Spain</option>
                                                                <option value="netherlands">Netherlands</option>
                                                                <option value="other">...</option>
                                                                <option value="uk">United Kingdom</option>
                                                            </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="2"><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-4o7t-container"><span className="select2-selection__rendered" id="select2-4o7t-container" role="textbox" aria-readonly="true" title="Germany">Germany</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span>
                                                            </span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Phone #</label>
                                                            <input type="text" id="Phone" name="Phone" value={this.state.formValues["Phone"]} onChange={this.handleChange.bind(this)} className="form-control"></input>
                                                            <span className="form-text text-muted">+99-99-9999-9999</span>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <label>Upload profile image</label>
                                                            <div className="uniform-uploader">
                                                                <input type="file" className="form-input-styled" data-fouc=""></input><span className="filename">No file selected</span><span className="action btn bg-warning">Choose File</span></div>
                                                            <span className="form-text text-muted">Accepted formats: gif, png, jpg. Max file size 2Mb</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="text-right">
                                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header header-elements-inline">
                                            <h5 className="card-title">Account settings</h5>
                                            <div className="header-elements">
                                                <div className="list-icons">
                                                    <a className="list-icons-item" data-action="collapse"></a>
                                                    <a className="list-icons-item" data-action="reload"></a>
                                                    <a className="list-icons-item" data-action="remove"></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-body">
                                            <form action="#">
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Username</label>
                                                            <input type="text" value="Kopyov" readOnly="readOnly" className="form-control"></input>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <label>Current password</label>
                                                            <input type="password" value="password" readOnly="readOnly" className="form-control"></input>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>New password</label>
                                                            <input type="password" placeholder="Enter new password" className="form-control"></input>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <label>Repeat password</label>
                                                            <input type="password" placeholder="Repeat new password" className="form-control"></input>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Profile visibility</label>

                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <div className="uniform-choice"><span className="checked"><input type="radio" name="visibility" className="form-input-styled" data-fouc=""></input></span></div>
                                                Visible to everyone
                                            </label>
                                                            </div>

                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <div className="uniform-choice"><span><input type="radio" name="visibility" className="form-input-styled" data-fouc=""></input></span></div>
                                                Visible to friends only
                                            </label>
                                                            </div>

                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <div className="uniform-choice"><span><input type="radio" name="visibility" className="form-input-styled" data-fouc=""></input></span></div>
                                                Visible to my connections only
                                            </label>
                                                            </div>

                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <div className="uniform-choice"><span><input type="radio" name="visibility" className="form-input-styled" data-fouc=""></input></span></div>
                                                Visible to my colleagues only
                                            </label>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <label>Notifications</label>

                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <div className="uniform-checker"><span className="checked"><input type="checkbox" className="form-input-styled" data-fouc=""></input></span></div>
                                                Password expiration notification
                                            </label>
                                                            </div>

                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <div className="uniform-checker"><span className="checked"><input type="checkbox" className="form-input-styled" data-fouc=""></input></span></div>
                                                New message notification
                                            </label>
                                                            </div>

                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <div className="uniform-checker"><span className="checked"><input type="checkbox" className="form-input-styled" data-fouc=""></input></span></div>
                                                New task notification
                                            </label>
                                                            </div>

                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <div className="uniform-checker"><span><input type="checkbox" className="form-input-styled"></input></span></div>
                                                New contact request notification
                                            </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="text-right">
                                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>

                                <div className="tab-pane fade" id="schedule">

                                    <div className="card">
                                        <div className="card-header header-elements-inline">
                                            <h6 className="card-title">Available hours</h6>
                                            <div className="header-elements">
                                                <div className="list-icons">
                                                    <a className="list-icons-item" data-action="collapse"></a>
                                                    <a className="list-icons-item" data-action="reload"></a>
                                                    <a className="list-icons-item" data-action="remove"></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-body">
                                            <div className="chart-container">
                                                <div className="chart has-fixed-height" id="available_hours" _echarts_instance_="ec_1588663385364">
                                                    <div>
                                                        <canvas data-zr-dom-id="zr_0" width="125" height="500"></canvas>
                                                    </div>
                                                    <div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header header-elements-inline">
                                            <h5 className="card-title">My schedule</h5>
                                            <div className="header-elements">
                                                <div className="list-icons">
                                                    <a className="list-icons-item" data-action="collapse"></a>
                                                    <a className="list-icons-item" data-action="reload"></a>
                                                    <a className="list-icons-item" data-action="remove"></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-body">
                                            <div className="my-schedule"></div>
                                        </div>
                                    </div>

                                </div>

                                <div className="tab-pane fade" id="inbox">

                                    <div className="card">
                                        <div className="card-header bg-transparent header-elements-inline">
                                            <h6 className="card-title">My inbox</h6>

                                            <div className="header-elements">
                                                <span className="badge bg-blue">25 new today</span>
                                            </div>
                                        </div>

                                        <div className="navbar navbar-light bg-light navbar-expand-lg border-bottom-0 py-lg-2">
                                            <div className="text-center d-lg-none w-100">
                                                <button type="button" className="navbar-toggler w-100" data-toggle="collapse" data-target="#inbox-toolbar-toggle-multiple">
                                                    <i className="icon-circle-down2"></i>
                                                </button>
                                            </div>

                                            <div className="navbar-collapse text-center text-lg-left flex-wrap collapse" id="inbox-toolbar-toggle-multiple">
                                                <div className="mt-3 mt-lg-0">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn btn-light btn-icon btn-checkbox-all">
                                                            <div className="uniform-checker"><span><input type="checkbox" className="form-input-styled" data-fouc=""></input></span></div>
                                                        </button>

                                                        <button type="button" className="btn btn-light btn-icon dropdown-toggle" data-toggle="dropdown"></button>
                                                        <div className="dropdown-menu">
                                                            <a href="#" className="dropdown-item">Select all</a>
                                                            <a href="#" className="dropdown-item">Select read</a>
                                                            <a href="#" className="dropdown-item">Select unread</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a href="#" className="dropdown-item">Clear selection</a>
                                                        </div>
                                                    </div>

                                                    <div className="btn-group ml-3 mr-lg-3">
                                                        <button type="button" className="btn btn-light"><i className="icon-pencil7"></i> <span className="d-none d-lg-inline-block ml-2">Compose</span></button>
                                                        <button type="button" className="btn btn-light"><i className="icon-bin"></i> <span className="d-none d-lg-inline-block ml-2">Delete</span></button>
                                                        <button type="button" className="btn btn-light"><i className="icon-spam"></i> <span className="d-none d-lg-inline-block ml-2">Spam</span></button>
                                                    </div>
                                                </div>

                                                <div className="navbar-text ml-lg-auto"><span className="font-weight-semibold">1-50</span> of <span className="font-weight-semibold">528</span></div>

                                                <div className="ml-lg-3 mb-3 mb-lg-0">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn btn-light btn-icon disabled"><i className="icon-arrow-left12"></i></button>
                                                        <button type="button" className="btn btn-light btn-icon"><i className="icon-arrow-right13"></i></button>
                                                    </div>

                                                    <div className="btn-group ml-3">
                                                        <button type="button" className="btn btn-light dropdown-toggle" data-toggle="dropdown"><i className="icon-cog3"></i></button>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item">Action</a>
                                                            <a href="#" className="dropdown-item">Another action</a>
                                                            <a href="#" className="dropdown-item">Something else here</a>
                                                            <a href="#" className="dropdown-item">One more line</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="table-responsive">
                                            <table className="table table-inbox">
                                                <tbody data-link="row" className="rowlink">
                                                    <tr className="unread">
                                                        <td className="table-inbox-checkbox rowlink-skip">
                                                            <div className="uniform-checker"><span><input type="checkbox" className="form-input-styled" data-fouc=""></input></span></div>
                                                        </td>
                                                        <td className="table-inbox-star rowlink-skip">
                                                            <a href="#">
                                                                <i className="icon-star-empty3 text-muted"></i>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-image">
                                                            <img src="../../../../global_assets/images/brands/spotify.png" className="rounded-circle" width="32" height="32" alt=""></img>
                                                        </td>
                                                        <td className="table-inbox-name">
                                                            <a href="mail_read.html">
                                                                <div className="letter-icon-title text-default">Spotify</div>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-message">
                                                            <div className="table-inbox-subject">On Tower-hill, as you go down &nbsp;-&nbsp;</div>
                                                            <span className="text-muted font-weight-normal">To the London docks, you may have seen a crippled beggar (or KEDGER, as the sailors say) holding a painted board before him, representing the tragic scene in which he lost his leg</span>
                                                        </td>
                                                        <td className="table-inbox-attachment">
                                                            <i className="icon-attachment text-muted"></i>
                                                        </td>
                                                        <td className="table-inbox-time">
                                                            11:09 pm
                                    </td>
                                                    </tr>

                                                    <tr className="unread">
                                                        <td className="table-inbox-checkbox rowlink-skip">
                                                            <div className="uniform-checker"><span><input type="checkbox" className="form-input-styled" data-fouc=""></input></span></div>
                                                        </td>
                                                        <td className="table-inbox-star rowlink-skip">
                                                            <a href="#">
                                                                <i className="icon-star-empty3 text-muted"></i>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-image">
                                                            <span className="btn bg-warning-400 rounded-circle btn-icon btn-sm">
                                                                <span className="letter-icon">J</span>
                                                            </span>
                                                        </td>
                                                        <td className="table-inbox-name">
                                                            <a href="mail_read.html">
                                                                <div className="letter-icon-title text-default">James Alexander</div>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-message">
                                                            <div className="table-inbox-subject"><span className="badge bg-success mr-2">Promo</span> There are three whales and three boats &nbsp;-&nbsp;</div>
                                                            <span className="text-muted font-weight-normal">And one of the boats (presumed to contain the missing leg in all its original integrity) is being crunched by the jaws of the foremost whale</span>
                                                        </td>
                                                        <td className="table-inbox-attachment">
                                                            <i className="icon-attachment text-muted"></i>
                                                        </td>
                                                        <td className="table-inbox-time">
                                                            10:21 pm
                                    </td>
                                                    </tr>

                                                    <tr className="unread">
                                                        <td className="table-inbox-checkbox rowlink-skip">
                                                            <div className="uniform-checker"><span><input type="checkbox" className="form-input-styled" data-fouc=""></input></span></div>
                                                        </td>
                                                        <td className="table-inbox-star rowlink-skip">
                                                            <a href="#">
                                                                <i className="icon-star-full2 text-warning-300"></i>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-image">
                                                            <img src="../../../../global_assets/images/demo/users/face2.jpg" className="rounded-circle" width="32" height="32" alt=""></img>
                                                        </td>
                                                        <td className="table-inbox-name">
                                                            <a href="mail_read.html">
                                                                <div className="letter-icon-title text-default">Nathan Jacobson</div>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-message">
                                                            <div className="table-inbox-subject">Any time these ten years, they tell me, has that man held up &nbsp;-&nbsp;</div>
                                                            <span className="text-muted font-weight-normal">That picture, and exhibited that stump to an incredulous world. But the time of his justification has now come. His three whales are as good whales as were ever published in Wapping, at any rate; and his stump</span>
                                                        </td>
                                                        <td className="table-inbox-attachment"></td>
                                                        <td className="table-inbox-time">
                                                            8:37 pm
                                    </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="table-inbox-checkbox rowlink-skip">
                                                            <div className="uniform-checker"><span><input type="checkbox" className="form-input-styled" data-fouc=""></input></span></div>
                                                        </td>
                                                        <td className="table-inbox-star rowlink-skip">
                                                            <a href="#">
                                                                <i className="icon-star-full2 text-warning-300"></i>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-image">
                                                            <span className="btn bg-indigo-400 rounded-circle btn-icon btn-sm">
                                                                <span className="letter-icon">M</span>
                                                            </span>
                                                        </td>
                                                        <td className="table-inbox-name">
                                                            <a href="mail_read.html">
                                                                <div className="letter-icon-title text-default">Margo Baker</div>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-message">
                                                            <div className="table-inbox-subject">Throughout the Pacific, and also in Nantucket, and New Bedford &nbsp;-&nbsp;</div>
                                                            <span className="text-muted font-weight-normal">and Sag Harbor, you will come across lively sketches of whales and whaling-scenes, graven by the fishermen themselves on Sperm Whale-teeth, or ladies' busks wrought out of the Right Whale-bone</span>
                                                        </td>
                                                        <td className="table-inbox-attachment"></td>
                                                        <td className="table-inbox-time">
                                                            4:28 am
                                    </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="table-inbox-checkbox rowlink-skip">
                                                            <div className="uniform-checker"><span><input type="checkbox" className="form-input-styled" data-fouc=""></input></span></div>
                                                        </td>
                                                        <td className="table-inbox-star rowlink-skip">
                                                            <a href="#">
                                                                <i className="icon-star-empty3 text-muted"></i>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-image">
                                                            <img src="../../../../global_assets/images/brands/dribbble.png" className="rounded-circle" width="32" height="32" alt=""></img>
                                                        </td>
                                                        <td className="table-inbox-name">
                                                            <a href="mail_read.html">
                                                                <div className="letter-icon-title text-default">Dribbble</div>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-message">
                                                            <div className="table-inbox-subject">The whalemen call the numerous little ingenious contrivances &nbsp;-&nbsp;</div>
                                                            <span className="text-muted font-weight-normal">They elaborately carve out of the rough material, in their hours of ocean leisure. Some of them have little boxes of dentistical-looking implements</span>
                                                        </td>
                                                        <td className="table-inbox-attachment"></td>
                                                        <td className="table-inbox-time">
                                                            Dec 5
                                    </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="table-inbox-checkbox rowlink-skip">
                                                            <div className="uniform-checker"><span><input type="checkbox" className="form-input-styled" data-fouc=""></input></span></div>
                                                        </td>
                                                        <td className="table-inbox-star rowlink-skip">
                                                            <a href="#">
                                                                <i className="icon-star-empty3 text-muted"></i>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-image">
                                                            <span className="btn bg-brown-400 rounded-circle btn-icon btn-sm">
                                                                <span className="letter-icon">H</span>
                                                            </span>
                                                        </td>
                                                        <td className="table-inbox-name">
                                                            <a href="mail_read.html">
                                                                <div className="letter-icon-title text-default">Hanna Dorman</div>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-message">
                                                            <div className="table-inbox-subject">Some of them have little boxes of dentistical-looking implements &nbsp;-&nbsp;</div>
                                                            <span className="text-muted font-weight-normal">Specially intended for the skrimshandering business. But, in general, they toil with their jack-knives alone; and, with that almost omnipotent tool of the sailor</span>
                                                        </td>
                                                        <td className="table-inbox-attachment">
                                                            <i className="icon-attachment text-muted"></i>
                                                        </td>
                                                        <td className="table-inbox-time">
                                                            Dec 5
                                    </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="table-inbox-checkbox rowlink-skip">
                                                            <div className="uniform-checker"><span><input type="checkbox" className="form-input-styled" data-fouc=""></input></span></div>
                                                        </td>
                                                        <td className="table-inbox-star rowlink-skip">
                                                            <a href="#">
                                                                <i className="icon-star-empty3 text-muted"></i>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-image">
                                                            <img src="../../../../global_assets/images/brands/twitter.png" className="rounded-circle" width="32" height="32" alt=""></img>
                                                        </td>
                                                        <td className="table-inbox-name">
                                                            <a href="mail_read.html">
                                                                <div className="letter-icon-title text-default">Twitter</div>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-message">
                                                            <div className="table-inbox-subject"><span className="badge bg-indigo-400 mr-2">Order</span> Long exile from Christendom &nbsp;-&nbsp;</div>
                                                            <span className="text-muted font-weight-normal">And civilization inevitably restores a man to that condition in which God placed him, i.e. what is called savagery</span>
                                                        </td>
                                                        <td className="table-inbox-attachment"></td>
                                                        <td className="table-inbox-time">
                                                            Dec 4
                                    </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="table-inbox-checkbox rowlink-skip">
                                                            <div className="uniform-checker"><span><input type="checkbox" className="form-input-styled" data-fouc=""></input></span></div>
                                                        </td>
                                                        <td className="table-inbox-star rowlink-skip">
                                                            <a href="#">
                                                                <i className="icon-star-full2 text-warning-300"></i>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-image">
                                                            <span className="btn bg-pink-400 rounded-circle btn-icon btn-sm">
                                                                <span className="letter-icon">V</span>
                                                            </span>
                                                        </td>
                                                        <td className="table-inbox-name">
                                                            <a href="mail_read.html">
                                                                <div className="letter-icon-title text-default">Vanessa Aurelius</div>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-message">
                                                            <div className="table-inbox-subject">Your true whale-hunter is as much a savage as an Iroquois &nbsp;-&nbsp;</div>
                                                            <span className="text-muted font-weight-normal">I myself am a savage, owning no allegiance but to the King of the Cannibals; and ready at any moment to rebel against him. Now, one of the peculiar characteristics of the savage in his domestic hours</span>
                                                        </td>
                                                        <td className="table-inbox-attachment">
                                                            <i className="icon-attachment text-muted"></i>
                                                        </td>
                                                        <td className="table-inbox-time">
                                                            Dec 4
                                    </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="table-inbox-checkbox rowlink-skip">
                                                            <div className="uniform-checker"><span><input type="checkbox" className="form-input-styled" data-fouc=""></input></span></div>
                                                        </td>
                                                        <td className="table-inbox-star rowlink-skip">
                                                            <a href="#">
                                                                <i className="icon-star-empty3 text-muted"></i>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-image">
                                                            <img src="../../../../global_assets/images/demo/users/face8.jpg" className="rounded-circle" width="32" height="32" alt=""></img>
                                                        </td>
                                                        <td className="table-inbox-name">
                                                            <a href="mail_read.html">
                                                                <div className="letter-icon-title text-default">William Brenson</div>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-message">
                                                            <div className="table-inbox-subject">An ancient Hawaiian war-club or spear-paddle &nbsp;-&nbsp;</div>
                                                            <span className="text-muted font-weight-normal">In its full multiplicity and elaboration of carving, is as great a trophy of human perseverance as a Latin lexicon. For, with but a bit of broken sea-shell or a shark's tooth</span>
                                                        </td>
                                                        <td className="table-inbox-attachment">
                                                            <i className="icon-attachment text-muted"></i>
                                                        </td>
                                                        <td className="table-inbox-time">
                                                            Dec 4
                                    </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="table-inbox-checkbox rowlink-skip">
                                                            <div className="uniform-checker"><span><input type="checkbox" className="form-input-styled" data-fouc=""></input></span></div>
                                                        </td>
                                                        <td className="table-inbox-star rowlink-skip">
                                                            <a href="#">
                                                                <i className="icon-star-empty3 text-muted"></i>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-image">
                                                            <img src="../../../../global_assets/images/brands/facebook.png" className="rounded-circle" width="32" height="32" alt=""></img>
                                                        </td>
                                                        <td className="table-inbox-name">
                                                            <a href="mail_read.html">
                                                                <div className="letter-icon-title text-default">Facebook</div>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-message">
                                                            <div className="table-inbox-subject">As with the Hawaiian savage, so with the white sailor-savage &nbsp;-&nbsp;</div>
                                                            <span className="text-muted font-weight-normal">With the same marvellous patience, and with the same single shark's tooth, of his one poor jack-knife, he will carve you a bit of bone sculpture, not quite as workmanlike</span>
                                                        </td>
                                                        <td className="table-inbox-attachment"></td>
                                                        <td className="table-inbox-time">
                                                            Dec 3
                                    </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="table-inbox-checkbox rowlink-skip">
                                                            <div className="uniform-checker"><span><input type="checkbox" className="form-input-styled" data-fouc=""></input></span></div>
                                                        </td>
                                                        <td className="table-inbox-star rowlink-skip">
                                                            <a href="#">
                                                                <i className="icon-star-full2 text-warning-300"></i>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-image">
                                                            <img src="../../../../global_assets/images/demo/users/face16.jpg" className="rounded-circle" width="32" height="32" alt=""></img>
                                                        </td>
                                                        <td className="table-inbox-name">
                                                            <a href="mail_read.html">
                                                                <div className="letter-icon-title text-default">Vicky Barna</div>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-message">
                                                            <div className="table-inbox-subject"><span className="badge bg-pink-400 mr-2">Track</span> Achilles's shield &nbsp;-&nbsp;</div>
                                                            <span className="text-muted font-weight-normal">Wooden whales, or whales cut in profile out of the small dark slabs of the noble South Sea war-wood, are frequently met with in the forecastles of American whalers. Some of them are done with much accuracy</span>
                                                        </td>
                                                        <td className="table-inbox-attachment"></td>
                                                        <td className="table-inbox-time">
                                                            Dec 2
                                    </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="table-inbox-checkbox rowlink-skip">
                                                            <div className="uniform-checker"><span><input type="checkbox" className="form-input-styled" data-fouc=""></input></span></div>
                                                        </td>
                                                        <td className="table-inbox-star rowlink-skip">
                                                            <a href="#">
                                                                <i className="icon-star-empty3 text-muted"></i>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-image">
                                                            <img src="../../../../global_assets/images/brands/youtube.png" className="rounded-circle" width="32" height="32" alt=""></img>
                                                        </td>
                                                        <td className="table-inbox-name">
                                                            <a href="mail_read.html">
                                                                <div className="letter-icon-title text-default">Youtube</div>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-message">
                                                            <div className="table-inbox-subject">At some old gable-roofed country houses &nbsp;-&nbsp;</div>
                                                            <span className="text-muted font-weight-normal">You will see brass whales hung by the tail for knockers to the road-side door. When the porter is sleepy, the anvil-headed whale would be best. But these knocking whales are seldom remarkable as faithful essays</span>
                                                        </td>
                                                        <td className="table-inbox-attachment">
                                                            <i className="icon-attachment text-muted"></i>
                                                        </td>
                                                        <td className="table-inbox-time">
                                                            Nov 30
                                    </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="table-inbox-checkbox rowlink-skip">
                                                            <div className="uniform-checker"><span><input type="checkbox" className="form-input-styled" data-fouc=""></input></span></div>
                                                        </td>
                                                        <td className="table-inbox-star rowlink-skip">
                                                            <a href="#">
                                                                <i className="icon-star-empty3 text-muted"></i>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-image">
                                                            <img src="../../../../global_assets/images/demo/users/face24.jpg" className="rounded-circle" width="32" height="32" alt=""></img>
                                                        </td>
                                                        <td className="table-inbox-name">
                                                            <a href="mail_read.html">
                                                                <div className="letter-icon-title text-default">Tony Gurrano</div>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-message">
                                                            <div className="table-inbox-subject">On the spires of some old-fashioned churches &nbsp;-&nbsp;</div>
                                                            <span className="text-muted font-weight-normal">You will see sheet-iron whales placed there for weather-cocks; but they are so elevated, and besides that are to all intents and purposes so labelled with "HANDS OFF!" you cannot examine them</span>
                                                        </td>
                                                        <td className="table-inbox-attachment"></td>
                                                        <td className="table-inbox-time">
                                                            Nov 28
                                    </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="table-inbox-checkbox rowlink-skip">
                                                            <div className="uniform-checker"><span><input type="checkbox" className="form-input-styled" data-fouc=""></input></span></div>
                                                        </td>
                                                        <td className="table-inbox-star rowlink-skip">
                                                            <a href="#">
                                                                <i className="icon-star-empty3 text-muted"></i>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-image">
                                                            <span className="btn bg-danger-400 rounded-circle btn-icon btn-sm">
                                                                <span className="letter-icon">B</span>
                                                            </span>
                                                        </td>
                                                        <td className="table-inbox-name">
                                                            <a href="mail_read.html">
                                                                <div className="letter-icon-title text-default">Barbara Walden</div>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-message">
                                                            <div className="table-inbox-subject">In bony, ribby regions of the earth &nbsp;-&nbsp;</div>
                                                            <span className="text-muted font-weight-normal">Where at the base of high broken cliffs masses of rock lie strewn in fantastic groupings upon the plain, you will often discover images as of the petrified forms</span>
                                                        </td>
                                                        <td className="table-inbox-attachment"></td>
                                                        <td className="table-inbox-time">
                                                            Nov 28
                                    </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="table-inbox-checkbox rowlink-skip">
                                                            <div className="uniform-checker"><span><input type="checkbox" className="form-input-styled" data-fouc=""></input></span></div>
                                                        </td>
                                                        <td className="table-inbox-star rowlink-skip">
                                                            <a href="#">
                                                                <i className="icon-star-full2 text-warning-300"></i>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-image">
                                                            <img src="../../../../global_assets/images/brands/amazon.png" className="rounded-circle" width="32" height="32" alt=""></img>
                                                        </td>
                                                        <td className="table-inbox-name">
                                                            <a href="mail_read.html">
                                                                <div className="letter-icon-title text-default">Amazon</div>
                                                            </a>
                                                        </td>
                                                        <td className="table-inbox-message">
                                                            <div className="table-inbox-subject">Here and there from some lucky point of view &nbsp;-&nbsp;</div>
                                                            <span className="text-muted font-weight-normal">You will catch passing glimpses of the profiles of whales defined along the undulating ridges. But you must be a thorough whaleman, to see these sights; and not only that, but if you wish to return to such a sight again</span>
                                                        </td>
                                                        <td className="table-inbox-attachment">
                                                            <i className="icon-attachment text-muted"></i>
                                                        </td>
                                                        <td className="table-inbox-time">
                                                            Nov 27
                                    </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>

                                </div>

                                <div className="tab-pane fade" id="orders">

                                    <div className="card">
                                        <div className="card-header header-elements-inline">
                                            <h6 className="card-title">Orders history</h6>
                                            <div className="header-elements">
                                                <span><i className="icon-arrow-down22 text-danger"></i> <span className="font-weight-semibold">- 29.4%</span></span>
                                            </div>
                                        </div>

                                        <div className="card-body">
                                            <div className="chart-container">
                                                <div className="chart has-fixed-height" id="balance_statistics" _echarts_instance_="ec_1588663385363">
                                                    <div>
                                                        <canvas data-zr-dom-id="zr_0" width="125" height="500"></canvas>
                                                    </div>
                                                    <div></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="table-responsive">
                                            <table className="table text-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th colSpan="2">Product name</th>
                                                        <th>Size</th>
                                                        <th>Colour</th>
                                                        <th>Article number</th>
                                                        <th>Units</th>
                                                        <th>Price</th>
                                                        <th className="text-center"><i className="icon-arrow-down12"></i></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="table-active">
                                                        <td colSpan="7" className="font-weight-semibold">New orders</td>
                                                        <td className="text-right">
                                                            <span className="badge bg-secondary badge-pill">24</span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="pr-0">
                                                            <a href="#">
                                                                <img src="../../../../global_assets/images/demo/products/1.jpeg" height="60" alt=""></img>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a href="#" className="font-weight-semibold">Fathom Backpack</a>
                                                            <div className="text-muted font-size-sm">
                                                                <span className="badge badge-mark bg-grey border-grey mr-1"></span> Processing
                                        </div>
                                                        </td>
                                                        <td>34cm x 29cm</td>
                                                        <td>Orange</td>
                                                        <td>
                                                            <a href="#">1237749</a>
                                                        </td>
                                                        <td>1</td>
                                                        <td>
                                                            <h6 className="mb-0 font-weight-semibold">€ 79.00</h6>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="list-icons">
                                                                <div className="dropdown">
                                                                    <a href="#" className="list-icons-item" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="icon-truck"></i> Track parcel</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-file-download"></i> Download invoice</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-wallet"></i> Payment details</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a href="#" className="dropdown-item"><i className="icon-warning2"></i> Report problem</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="pr-0">
                                                            <a href="#">
                                                                <img src="../../../../global_assets/images/demo/products/2.jpeg" height="60" alt=""></img>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a href="#" className="font-weight-semibold">Mystery Air Long Sleeve T Shirt</a>
                                                            <div className="text-muted font-size-sm">
                                                                <span className="badge badge-mark bg-grey border-grey mr-1"></span> Processing
                                        </div>
                                                        </td>
                                                        <td>L</td>
                                                        <td>Process Red</td>
                                                        <td>
                                                            <a href="#">345634</a>
                                                        </td>
                                                        <td>1</td>
                                                        <td>
                                                            <h6 className="mb-0 font-weight-semibold">€ 38.00</h6>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="list-icons">
                                                                <div className="dropdown">
                                                                    <a href="#" className="list-icons-item" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="icon-truck"></i> Track parcel</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-file-download"></i> Download invoice</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-wallet"></i> Payment details</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a href="#" className="dropdown-item"><i className="icon-warning2"></i> Report problem</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="pr-0">
                                                            <a href="#">
                                                                <img src="../../../../global_assets/images/demo/products/3.jpeg" height="60" alt=""></img>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a href="#" className="font-weight-semibold">Women’s Prospect Backpack</a>
                                                            <div className="text-muted font-size-sm">
                                                                <span className="badge badge-mark bg-grey border-grey mr-1"></span> Processing
                                        </div>
                                                        </td>
                                                        <td>46cm x 28cm</td>
                                                        <td>Neu Nordic Print</td>
                                                        <td>
                                                            <a href="#">5739584</a>
                                                        </td>
                                                        <td>1</td>
                                                        <td>
                                                            <h6 className="mb-0 font-weight-semibold">€ 60.00</h6>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="list-icons">
                                                                <div className="dropdown">
                                                                    <a href="#" className="list-icons-item" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="icon-truck"></i> Track parcel</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-file-download"></i> Download invoice</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-wallet"></i> Payment details</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a href="#" className="dropdown-item"><i className="icon-warning2"></i> Report problem</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="pr-0">
                                                            <a href="#">
                                                                <img src="../../../../global_assets/images/demo/products/4.jpeg" height="60" alt=""></img>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a href="#" className="font-weight-semibold">Overlook Short Sleeve T Shirt</a>
                                                            <div className="text-muted font-size-sm">
                                                                <span className="badge badge-mark bg-grey border-grey mr-1"></span> Processing
                                        </div>
                                                        </td>
                                                        <td>M</td>
                                                        <td>Gray Heather</td>
                                                        <td>
                                                            <a href="#">434450</a>
                                                        </td>
                                                        <td>1</td>
                                                        <td>
                                                            <h6 className="mb-0 font-weight-semibold">€ 35.00</h6>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="list-icons">
                                                                <div className="dropdown">
                                                                    <a href="#" className="list-icons-item" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="icon-truck"></i> Track parcel</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-file-download"></i> Download invoice</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-wallet"></i> Payment details</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a href="#" className="dropdown-item"><i className="icon-warning2"></i> Report problem</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr className="table-active">
                                                        <td colSpan="7" className="font-weight-semibold">Shipped orders</td>
                                                        <td className="text-right">
                                                            <span className="badge bg-success badge-pill">42</span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="pr-0">
                                                            <a href="#">
                                                                <img src="../../../../global_assets/images/demo/products/5.jpeg" height="60" alt=""></img>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a href="#" className="font-weight-semibold">Infinite Ride Liner</a>
                                                            <div className="text-muted font-size-sm">
                                                                <span className="badge badge-mark bg-success border-success mr-1"></span> Shipped
                                        </div>
                                                        </td>
                                                        <td>43</td>
                                                        <td>Black</td>
                                                        <td>
                                                            <a href="#">34739</a>
                                                        </td>
                                                        <td>1</td>
                                                        <td>
                                                            <h6 className="mb-0 font-weight-semibold">€ 210.00</h6>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="list-icons">
                                                                <div className="dropdown">
                                                                    <a href="#" className="list-icons-item" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="icon-truck"></i> Track parcel</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-file-download"></i> Download invoice</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-wallet"></i> Payment details</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a href="#" className="dropdown-item"><i className="icon-warning2"></i> Report problem</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="pr-0">
                                                            <a href="#">
                                                                <img src="../../../../global_assets/images/demo/products/6.jpeg" height="60" alt=""></img>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a href="#" className="font-weight-semibold">Custom Snowboard</a>
                                                            <div className="text-muted font-size-sm">
                                                                <span className="badge badge-mark bg-success border-success mr-1"></span> Shipped
                                        </div>
                                                        </td>
                                                        <td>151</td>
                                                        <td>Black/Blue</td>
                                                        <td>
                                                            <a href="#">5574832</a>
                                                        </td>
                                                        <td>1</td>
                                                        <td>
                                                            <h6 className="mb-0 font-weight-semibold">€ 600.00</h6>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="list-icons">
                                                                <div className="dropdown">
                                                                    <a href="#" className="list-icons-item" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="icon-truck"></i> Track parcel</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-file-download"></i> Download invoice</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-wallet"></i> Payment details</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a href="#" className="dropdown-item"><i className="icon-warning2"></i> Report problem</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="pr-0">
                                                            <a href="#">
                                                                <img src="../../../../global_assets/images/demo/products/7.jpeg" height="60" alt=""></img>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a href="#" className="font-weight-semibold">Kids' Day Hiker 20L Backpack</a>
                                                            <div className="text-muted font-size-sm">
                                                                <span className="badge badge-mark bg-success border-success mr-1"></span> Shipped
                                        </div>
                                                        </td>
                                                        <td>24cm x 29cm</td>
                                                        <td>Figaro Stripe</td>
                                                        <td>
                                                            <a href="#">6684902</a>
                                                        </td>
                                                        <td>1</td>
                                                        <td>
                                                            <h6 className="mb-0 font-weight-semibold">€ 55.00</h6>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="list-icons">
                                                                <div className="dropdown">
                                                                    <a href="#" className="list-icons-item" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="icon-truck"></i> Track parcel</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-file-download"></i> Download invoice</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-wallet"></i> Payment details</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a href="#" className="dropdown-item"><i className="icon-warning2"></i> Report problem</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="pr-0">
                                                            <a href="#">
                                                                <img src="../../../../global_assets/images/demo/products/8.jpeg" height="60" alt=""></img>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a href="#" className="font-weight-semibold">Lunch Sack</a>
                                                            <div className="text-muted font-size-sm">
                                                                <span className="badge badge-mark bg-success border-success mr-1"></span> Shipped
                                        </div>
                                                        </td>
                                                        <td>24cm x 20cm</td>
                                                        <td>Junk Food Print</td>
                                                        <td>
                                                            <a href="#">5574829</a>
                                                        </td>
                                                        <td>1</td>
                                                        <td>
                                                            <h6 className="mb-0 font-weight-semibold">€ 20.00</h6>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="list-icons">
                                                                <div className="dropdown">
                                                                    <a href="#" className="list-icons-item" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="icon-truck"></i> Track parcel</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-file-download"></i> Download invoice</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-wallet"></i> Payment details</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a href="#" className="dropdown-item"><i className="icon-warning2"></i> Report problem</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="pr-0">
                                                            <a href="#">
                                                                <img src="../../../../global_assets/images/demo/products/9.jpeg" height="60" alt=""></img>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a href="#" className="font-weight-semibold">Cambridge Jacket</a>
                                                            <div className="text-muted font-size-sm">
                                                                <span className="badge badge-mark bg-success border-success mr-1"></span> Shipped
                                        </div>
                                                        </td>
                                                        <td>XL</td>
                                                        <td>Nomad/Railroad</td>
                                                        <td>
                                                            <a href="#">475839</a>
                                                        </td>
                                                        <td>1</td>
                                                        <td>
                                                            <h6 className="mb-0 font-weight-semibold">€ 175.00</h6>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="list-icons">
                                                                <div className="dropdown">
                                                                    <a href="#" className="list-icons-item" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="icon-truck"></i> Track parcel</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-file-download"></i> Download invoice</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-wallet"></i> Payment details</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a href="#" className="dropdown-item"><i className="icon-warning2"></i> Report problem</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="pr-0">
                                                            <a href="#">
                                                                <img src="../../../../global_assets/images/demo/products/10.jpeg" height="60" alt=""></img>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a href="#" className="font-weight-semibold">Covert Jacket</a>
                                                            <div className="text-muted font-size-sm">
                                                                <span className="badge badge-mark bg-success border-success mr-1"></span> Shipped
                                        </div>
                                                        </td>
                                                        <td>XXL</td>
                                                        <td>Mocha/Glacier Sierra</td>
                                                        <td>
                                                            <a href="#">589439</a>
                                                        </td>
                                                        <td>1</td>
                                                        <td>
                                                            <h6 className="mb-0 font-weight-semibold">€ 126.00</h6>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="list-icons">
                                                                <div className="dropdown">
                                                                    <a href="#" className="list-icons-item" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="icon-truck"></i> Track parcel</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-file-download"></i> Download invoice</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-wallet"></i> Payment details</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a href="#" className="dropdown-item"><i className="icon-warning2"></i> Report problem</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr className="table-active">
                                                        <td colSpan="7" className="font-weight-semibold">Cancelled orders</td>
                                                        <td className="text-right">
                                                            <span className="badge bg-danger badge-pill">9</span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="pr-0">
                                                            <a href="#">
                                                                <img src="../../../../global_assets/images/demo/products/11.jpeg" height="60" alt=""></img>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a href="#" className="font-weight-semibold">Day Hiker Pinnacle 31L Backpack</a>
                                                            <div className="text-muted font-size-sm">
                                                                <span className="badge badge-mark bg-danger border-danger mr-1"></span> Cancelled
                                        </div>
                                                        </td>
                                                        <td>42cm x 26.5cm</td>
                                                        <td>Blotto Ripstop</td>
                                                        <td>
                                                            <a href="#">5849305</a>
                                                        </td>
                                                        <td>1</td>
                                                        <td>
                                                            <h6 className="mb-0 font-weight-semibold">€ 130.00</h6>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="list-icons">
                                                                <div className="dropdown">
                                                                    <a href="#" className="list-icons-item" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="icon-truck"></i> Track parcel</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-file-download"></i> Download invoice</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-wallet"></i> Payment details</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a href="#" className="dropdown-item"><i className="icon-warning2"></i> Report problem</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="pr-0">
                                                            <a href="#">
                                                                <img src="../../../../global_assets/images/demo/products/12.jpeg" height="60" alt=""></img>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a href="#" className="font-weight-semibold">Kids' Gromlet Backpack</a>
                                                            <div className="text-muted font-size-sm">
                                                                <span className="badge badge-mark bg-danger border-danger mr-1"></span> Cancelled
                                        </div>
                                                        </td>
                                                        <td>22cm x 20cm</td>
                                                        <td>Slime Camo Print</td>
                                                        <td>
                                                            <a href="#">4438495</a>
                                                        </td>
                                                        <td>1</td>
                                                        <td>
                                                            <h6 className="mb-0 font-weight-semibold">€ 35.00</h6>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="list-icons">
                                                                <div className="dropdown">
                                                                    <a href="#" className="list-icons-item" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="icon-truck"></i> Track parcel</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-file-download"></i> Download invoice</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-wallet"></i> Payment details</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a href="#" className="dropdown-item"><i className="icon-warning2"></i> Report problem</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="pr-0">
                                                            <a href="#">
                                                                <img src="../../../../global_assets/images/demo/products/13.jpeg" height="60" alt=""></img>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a href="#" className="font-weight-semibold">Tinder Backpack</a>
                                                            <div className="text-muted font-size-sm">
                                                                <span className="badge badge-mark bg-danger border-danger mr-1"></span> Cancelled
                                        </div>
                                                        </td>
                                                        <td>42cm x 26cm</td>
                                                        <td>Dark Tide Twill</td>
                                                        <td>
                                                            <a href="#">4759383</a>
                                                        </td>
                                                        <td>2</td>
                                                        <td>
                                                            <h6 className="mb-0 font-weight-semibold">€ 180.00</h6>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="list-icons">
                                                                <div className="dropdown">
                                                                    <a href="#" className="list-icons-item" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="icon-truck"></i> Track parcel</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-file-download"></i> Download invoice</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-wallet"></i> Payment details</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a href="#" className="dropdown-item"><i className="icon-warning2"></i> Report problem</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="pr-0">
                                                            <a href="#">
                                                                <img src="../../../../global_assets/images/demo/products/14.jpeg" height="60" alt=""></img>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a href="#" className="font-weight-semibold">Almighty Snowboard Boot</a>
                                                            <div className="text-muted font-size-sm">
                                                                <span className="badge badge-mark bg-danger border-danger mr-1"></span> Cancelled
                                        </div>
                                                        </td>
                                                        <td>45</td>
                                                        <td>Multiweave</td>
                                                        <td>
                                                            <a href="#">34432</a>
                                                        </td>
                                                        <td>1</td>
                                                        <td>
                                                            <h6 className="mb-0 font-weight-semibold">€ 370.00</h6>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="list-icons">
                                                                <div className="dropdown">
                                                                    <a href="#" className="list-icons-item" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item"><i className="icon-truck"></i> Track parcel</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-file-download"></i> Download invoice</a>
                                                                        <a href="#" className="dropdown-item"><i className="icon-wallet"></i> Payment details</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a href="#" className="dropdown-item"><i className="icon-warning2"></i> Report problem</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </>
        );
    }
}
import React, { Component } from "react";
import UserService from "../../services/user.service";
import { Link } from "react-router-dom";



export default class TutorList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentUser: []
		};
		this.handleAccept = this.handleAccept.bind(this);
		this.handleReject = this.handleReject.bind(this);
		this.updateUserProfileAccess = this.updateUserProfileAccess.bind(this);
		this.getAllUser = this.getAllUser.bind(this);
	}
	handleAccept(userID) {
		const data = { IsProfileAccepted: 1, UserID: userID };
		this.updateUserProfileAccess(data);
	}
	handleReject(userID) {
		const data = { IsProfileAccepted: 2, UserID: userID };
		this.updateUserProfileAccess(data);
	}

	updateUserProfileAccess(data) {

		UserService.updateUserProfileAccess(data)
			.then(response => {
				this.getAllUser();
			});
	}
	getAllUser() {
		UserService.getAllUser(2)
			.then(response => this.setState({ currentUser: response.data }));
	}

	componentDidMount() {
		this.getAllUser();
	}
	render() {
		const { currentUser } = this.state;
		return (
			<>
				<div className="content-wrapper">
					<div className="page-header page-header-light">
						<div className="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
							<div className="d-flex">
								<div className="breadcrumb">
									<a href="index.html" className="breadcrumb-item"><i className="icon-home2 mr-2"></i> Tutor List</a>
								</div>
								<a href="#" className="header-elements-toggle text-default d-md-none"><i className="icon-more"></i></a>
							</div>

						</div>
					</div>

					<div className="content">

						<div className="card">
							<div className="table-responsive">
								<table className="table table-striped">
									<thead>
										<tr className="border-bottom-danger">
											<th>#</th>
											<th>First Name</th>
											<th>Last Name</th>
											<th>Email</th>
											<th>Status</th>
											<th>Resume</th>
											<th className="text-center">Action</th>
										</tr>
									</thead>
									<tbody>
										{currentUser.length > 0 ? (
											currentUser.map((user, index) => (
												<tr key={user.UserID}>
													<td>{index + 1}</td>
													<td>{user.FirstName}</td>
													<td>{user.LastName}</td>
													<td>{user.Email}</td>

													<td><span className={`badge ${user.IsProfileAccepted === 1 ? "badge-success" : user.IsProfileAccepted === 2 ? "badge-danger" : "badge-info"}`} >{user.IsProfileAccepted === 1 ? "Active" : user.IsProfileAccepted === 2 ? "Rejected" : "Pending"}</span></td>
													<td><a href={`http://localhost:5000/uploads/${user.ResumeName}`} target="_blank" >View</a></td>
													<td className="text-center">

														<a href="#" onClick={() => this.handleAccept(user.UserID)}>Accept</a> /
														<a href="#" onClick={() => this.handleReject(user.UserID)}>Reject</a> /
														<Link to={"/tutorDetails/" + user.UserID + "/edit"}>View Details</Link>
													</td>
												</tr>
											))
										) : (
												<tr>
													<td colSpan={5} className="Textalign">No Tutor</td>
												</tr>
											)}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>

			</>
		);
	}
}
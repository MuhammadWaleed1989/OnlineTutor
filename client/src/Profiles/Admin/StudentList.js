import React, { Component } from "react";
import UserService from "../../services/user.service";
import { Link } from "react-router-dom";

export default class StudentList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentUser: []
		};
	}
	componentDidMount() {
		UserService.getAllUser(1)
			.then(response => this.setState({ currentUser: response.data }));
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
									<a href="index.html" className="breadcrumb-item"><i className="icon-home2 mr-2"></i> Student List</a>
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
											<th>Action</th>
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
													<td><Link to={"/studentDetails/" + user.UserID + "/edit"}>View Details</Link></td>
												</tr>
											))
										) : (
												<tr>
													<td colSpan={5} className="Textalign">No Student</td>
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

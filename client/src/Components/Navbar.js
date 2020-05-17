import React, { Component } from "react";
import AuthService from "../services/auth.service";
import NavLinksComp from './NavLinksComponent';

// import picture from '../../../../global_assets/images/demo/users/face11.jpg';
export default class Navbar extends Component {
	constructor(props) {

		super(props);

		this.state = {
			userType: '',
			firstName: '',
			lastName: '',
			profileImg: '',
		};

		this.logOut = this.logOut.bind(this);

	}

	componentDidMount() {
		const user = AuthService.getCurrentUser();

		if (user) {
			this.setState({
				userType: user.UserType,
				firstName: user.FirstName,
				lastName: user.LastName,
				profileImg: user.ImageName,
			});
		}
	}

	logOut() {
		AuthService.logout();
	}

	render() {
		const { userType } = this.state;
		const { firstName } = this.state;
		const { lastName } = this.state;
		return (
			<>
				<div className="navbar navbar-expand-md navbar-dark">


					<div className="collapse navbar-collapse" id="navbar-mobile">

						<div className="Link">
							<div>
								<ul>
									{


										(() => {
											switch (userType.toLowerCase()) {
												case 'admin':
													return <NavLinksComp linktype={userType.toLowerCase()}></NavLinksComp>
												case 'tutor':
													return <NavLinksComp linktype={userType.toLowerCase()}></NavLinksComp>
												case 'parent':
													return <NavLinksComp linktype={userType.toLowerCase()}></NavLinksComp>
												case 'student':
													return <NavLinksComp linktype={userType.toLowerCase()}></NavLinksComp>
												default:
													return <NavLinksComp linktype="student"></NavLinksComp>
											}
										})()

									}

									{/* <li>

										<div class="dropdown Link_button" id="dropdownMenuButton">
											<button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">
												Drop down
										</button>
											<div class="dropdown-menu" aria-labelledby="dropdownMenuButton" >
												<a href="#" class="dropdown-item">Link 1</a>
												<a href="#" class="dropdown-item">Link 2</a>
												<a href="#" class="dropdown-item">Link 3</a>
												<a href="#" class="dropdown-item">Link 4</a>
											</div>
										</div>
									</li> */}
								</ul>

							</div>

						</div>

						<ul className="navbar-nav">
							<li className="nav-item dropdown">
								<a href="#" className="navbar-nav-link dropdown-toggle caret-0" data-toggle="dropdown">
									<i className="icon-people"></i>
									<span className="d-md-none ml-2">Users</span>
								</a>

								<div className="dropdown-menu dropdown-menu-right dropdown-content wmin-md-300">
									<div className="dropdown-content-header">
										<span className="font-weight-semibold">Users online</span>
										<a href="#" className="text-default"><i className="icon-search4 font-size-base"></i></a>
									</div>

									<div className="dropdown-content-body dropdown-scrollable">
										<ul className="media-list">






											<li className="media">
												<div className="mr-3">
													<img src="../global_assets/images/demo/users/face16.jpg" width="36" height="36" className="rounded-circle" alt="" />
												</div>
												<div className="media-body">
													<a href="#" className="media-title font-weight-semibold">Vanessa Aurelius</a>
													<span className="d-block text-muted font-size-sm">UX expert</span>
												</div>
												<div className="ml-3 align-self-center"><span className="badge badge-mark border-grey-400"></span></div>
											</li>
										</ul>
									</div>

									<div className="dropdown-content-footer bg-light">
										<a href="#" className="text-grey mr-auto">All users</a>
										<a href="#" className="text-grey"><i className="icon-gear"></i></a>
									</div>
								</div>
							</li>

							<li className="nav-item dropdown">
								<a href="#" className="navbar-nav-link dropdown-toggle caret-0" data-toggle="dropdown">
									<i className="icon-bubbles4"></i>
									<span className="d-md-none ml-2">Messages</span>
									<span className="badge badge-pill bg-warning-400 ml-auto ml-md-0">2</span>
								</a>

								<div className="dropdown-menu dropdown-menu-right dropdown-content wmin-md-350">
									<div className="dropdown-content-header">
										<span className="font-weight-semibold">Messages</span>
										<a href="#" className="text-default"><i className="icon-compose"></i></a>
									</div>

									<div className="dropdown-content-body dropdown-scrollable">
										<ul className="media-list">

											<li className="media">
												<div className="mr-3 position-relative">
													<img src="../global_assets/images/demo/users/face3.jpg" width="36" height="36" className="rounded-circle" alt="" />
												</div>

												<div className="media-body">
													<div className="media-title">
														<a href="#">
															<span className="font-weight-semibold">Margo Baker</span>
															<span className="text-muted float-right font-size-sm">12:16</span>
														</a>
													</div>

													<span className="text-muted">That was something he was unable to do because...</span>
												</div>
											</li>






										</ul>
									</div>

									<div className="dropdown-content-footer justify-content-center p-0">
										<a href="#" className="bg-light text-grey w-100 py-2" data-popup="tooltip" title="Load more"><i className="icon-menu7 d-block top-0"></i></a>
									</div>
								</div>
							</li>

							<li className="nav-item dropdown dropdown-user">
								<a href="#" className="navbar-nav-link d-flex align-items-center dropdown-toggle" data-toggle="dropdown">
									<img src={`http://localhost:5000/uploads/${this.state.profileImg}`} className="rounded-circle mr-2" height="34" alt="" />
									<span>{lastName}, {firstName}</span>
								</a>

								<div className="dropdown-menu dropdown-menu-right">
									<a href="#" className="dropdown-item"><i className="icon-user-plus"></i> My profile</a>
									<a href="#" className="dropdown-item"><i className="icon-coins"></i> My balance</a>
									<a href="#" className="dropdown-item"><i className="icon-comment-discussion"></i> Messages <span className="badge badge-pill bg-blue ml-auto">58</span></a>
									<div className="dropdown-divider"></div>
									<a href="#" className="dropdown-item"><i className="icon-cog5"></i> Account settings</a>
									<a href="/sign-in" className="nav-link" onClick={this.logOut}> <i className="icon-switch2"></i> Logout</a>

								</div>
							</li>
						</ul>
					</div>
				</div>

			</>
		);
	}
}

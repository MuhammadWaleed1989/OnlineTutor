import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../Login/Login";
import Registration from "../Login/Registration";

export default class Home extends Component {
    render() {
        return (
            <>
                {/* <div className="page-content login-cover">
                    <div className="content-wrapper">
                        <div className="content d-flex justify-content-center align-items-center">
                            <form className="login-form" action="http:demo.interface.club/limitless/demo/Template/layout_1/LTR/default/full/index.html">
                                <div className="card mb-0">
                                    <div className="card-body">
                                        <div className="text-center mb-3">
                                            <i className="icon-bubble-lines3 icon-2x text-warning-400 border-warning-400 border-3 rounded-round p-3 mb-3 mt-1"></i>
                                            <h5 className="mb-0">Forms inside modals</h5>
                                            <span className="d-block text-muted">Login and other forms inside modal</span>
                                        </div>
                                        <div className="form-group text-center text-muted content-divider">
                                            <span className="px-2">Login form</span>
                                        </div>
                                        <div className="form-group">
                                            <button type="button" className="btn bg-blue btn-block" data-toggle="modal" data-target="#modal-login"><i className="icon-comment mr-2"></i> Launch modal</button>
                                        </div>
                                        <div className="form-group text-center text-muted content-divider">
                                            <span className="px-2">Registration form</span>
                                        </div>
                                        <div className="form-group">
                                            <button type="button" className="btn bg-blue btn-block" data-toggle="modal" data-target="#modal-registration"><i className="icon-comment mr-2"></i> Launch modal</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div id="modal-login" className="modal fade" tabindex="-1">
                                <div className="modal-dialog modal-sm">
                                    <div className="modal-content">
                                        <form className="modal-body" action="http:demo.interface.club/limitless/demo/Template/layout_1/LTR/default/full/index.html">
                                            <div className="text-center mb-3">
                                                <i className="icon-reading icon-2x text-slate-300 border-slate-300 border-3 rounded-round p-3 mb-3 mt-1"></i>
                                                <h5 className="mb-0">Login to your account</h5>
                                                <span className="d-block text-muted">Your credentials</span>
                                            </div>
                                            <div className="form-group form-group-feedback form-group-feedback-left">
                                                <input type="text" className="form-control" placeholder="Username"></input>
                                                <div className="form-control-feedback">
                                                    <i className="icon-user text-muted"></i>
                                                </div>
                                            </div>
                                            <div className="form-group form-group-feedback form-group-feedback-left">
                                                <input type="password" className="form-control" placeholder="Password"></input>
                                                <div className="form-control-feedback">
                                                    <i className="icon-lock2 text-muted"></i>
                                                </div>
                                            </div>
                                            <div className="form-group d-flex align-items-center">
                                                <div className="form-check mb-0">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" name="remember" className="form-input-styled" checked data-fouc></input>
                           Remember
                           </label>
                                                </div>
                                                <a href="login_password_recover.html" className="ml-auto">Forgot password?</a>
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-primary btn-block">Sign in <i className="icon-circle-right2 ml-2"></i></button>
                                            </div>
                                            <div className="form-group text-center text-muted content-divider">
                                                <span className="px-2">or sign in with</span>
                                            </div>
                                            <div className="form-group text-center">
                                                <button type="button" className="btn btn-outline bg-indigo border-indigo text-indigo btn-icon rounded-round border-2"><i className="icon-facebook"></i></button>
                                                <button type="button" className="btn btn-outline bg-pink-300 border-pink-300 text-pink-300 btn-icon rounded-round border-2 ml-2"><i className="icon-dribbble3"></i></button>
                                                <button type="button" className="btn btn-outline bg-slate-600 border-slate-600 text-slate-600 btn-icon rounded-round border-2 ml-2"><i className="icon-github"></i></button>
                                                <button type="button" className="btn btn-outline bg-info border-info text-info btn-icon rounded-round border-2 ml-2"><i className="icon-twitter"></i></button>
                                            </div>
                                            <div className="form-group text-center text-muted content-divider">
                                                <span className="px-2">Don't have an account?</span>
                                            </div>
                                            <div className="form-group">
                                                <a href="#" className="btn btn-light btn-block">Sign up</a>
                                            </div>
                                            <span className="form-text text-center text-muted">By continuing, you're confirming that you've read our <a href="#">Terms &amp; Conditions</a> and <a href="#">Cookie Policy</a></span>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div id="modal-registration" className="modal fade" tabindex="-1">
                                <div className="modal-dialog modal-sm">
                                    <div className="modal-content">
                                        <form className="modal-body" action="http:demo.interface.club/limitless/demo/Template/layout_1/LTR/default/full/index.html">
                                            <div className="text-center mb-3">
                                                <i className="icon-plus3 icon-2x text-success border-success border-3 rounded-round p-3 mb-3 mt-1"></i>
                                                <h5 className="mb-0">Create account</h5>
                                                <span className="d-block text-muted">All fields are required</span>
                                            </div>
                                            <div className="form-group text-center text-muted content-divider">
                                                <span className="px-2">Your credentials</span>
                                            </div>
                                            <div className="form-group form-group-feedback form-group-feedback-left">
                                                <input type="text" className="form-control" placeholder="Username"></input>
                                                <div className="form-control-feedback">
                                                    <i className="icon-user-check text-muted"></i>
                                                </div>
                                                <span className="form-text text-danger"><i className="icon-cancel-circle2 mr-2"></i> This username is already taken</span>
                                            </div>
                                            <div className="form-group form-group-feedback form-group-feedback-left">
                                                <input type="password" className="form-control" placeholder="Password"></input>
                                                <div className="form-control-feedback">
                                                    <i className="icon-user-lock text-muted"></i>
                                                </div>
                                            </div>
                                            <div className="form-group text-center text-muted content-divider">
                                                <span className="px-2">Your contacts</span>
                                            </div>
                                            <div className="form-group form-group-feedback form-group-feedback-left">
                                                <input type="password" className="form-control" placeholder="Your email"></input>
                                                <div className="form-control-feedback">
                                                    <i className="icon-mention text-muted"></i>
                                                </div>
                                            </div>
                                            <div className="form-group form-group-feedback form-group-feedback-left">
                                                <input type="password" className="form-control" placeholder="Repeat email"></input>
                                                <div className="form-control-feedback">
                                                    <i className="icon-mention text-muted"></i>
                                                </div>
                                            </div>
                                            <div className="form-group text-center text-muted content-divider">
                                                <span className="px-2">Additions</span>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" name="remember" className="form-input-styled" checked data-fouc></input>
                           Send me <a href="#">test account settings</a>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" name="remember" className="form-input-styled" checked data-fouc></input>
                           Subscribe to monthly newsletter
                           </label>
                                                </div>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" name="remember" className="form-input-styled" data-fouc></input>
                           Accept <a href="#">terms of service</a>
                                                    </label>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn bg-teal-400 btn-block">Register <i className="icon-circle-right2 ml-2"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </> */}
                <Router>
                    <div className="App">
                        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                            <div className="container">
                                <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
                                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link" to={"/sign-in"}>Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <div className="auth-wrapper">
                            <div className="auth-inner">
                                <Switch>
                                    <Route exact path='/' component={Login} />
                                    <Route path="/sign-in" component={Login} />
                                    <Route path="/sign-up" component={Registration} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </Router>
            </>
        );
    }
}
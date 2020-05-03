import React from "react";

export default function Registration() {
  return (
    <>
      <section className="container-fluid">
        <section className="row justify-content-center mt-3">
          <section className="col-12 col-sm-6 col-md-4">
            <form className="form-container">
              <div className="text-center">
                <i className="fa fa-user fa-lg">
                  &nbsp;<b>Register Here</b>
                </i>
              </div>
              <hr width="100%"></hr>

              <div className="form-group mt-2">
                <div className="inner-addon left-addon">
                  <i className="fa fa-user"></i>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter UserName"
                  />
                </div>
              </div>
              <div className="form-group mt-4">
                <div className="inner-addon left-addon">
                  <i className="fa fa-envelope"></i>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-group mt-4">
                <div className="inner-addon left-addon">
                  <i className="fa fa-key"></i>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="form-group mt-4">
                <div className="inner-addon left-addon">
                  <i className="fa fa-key"></i>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
              <div className="form-group form-check mt-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Remember me
                </label>
                <span className="ml-4">
                  <a href="#">Forgot Password?</a>
                </span>{" "}
              </div>

              <div className="inner-addon left-addon">
                <i className="fa fa-user"></i>
                <button
                  type="submit"
                  className="btn btn-outline-success btn-block mt-4"
                >
                  Register
                </button>
              </div>
              <div className="TextWithHr">
                <span>or </span>
              </div>
              <div className="inner-addon left-addon mt-2">
                <i className="fa fa-lock"></i>
                <a href="#">
                  <button
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                  >
                    Login
                  </button>
                </a>
              </div>
            </form>
          </section>
        </section>
      </section>
    </>
  );
}

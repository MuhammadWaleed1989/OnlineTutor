import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <>

      <div className="sidebar sidebar-dark sidebar-main sidebar-expand-md">
        <div className="sidebar-mobile-toggler text-center">
          <a href="#" className="sidebar-mobile-main-toggle">
            <i className="icon-arrow-left8"></i>
          </a>
          <a href="#" className="sidebar-mobile-expand">
            <i className="icon-screen-full"></i>
            <i className="icon-screen-normal"></i>
          </a>
        </div>

        <div className="sidebar-content">
          <div className="sidebar-user">
            <div className="card-body">
              <div className="media">
                <div className="mr-3">
                  <a href="#">
                    <img
                      src="../../../../global_assets/images/demo/users/face11.jpg"
                      width="38"
                      height="38"
                      className="rounded-circle"
                      alt=""
                    />
                  </a>
                </div>

                <div className="media-body">
                  <div className="media-title font-weight-semibold">
                    Victoria Baker
                  </div>
                  <div className="font-size-xs opacity-50">
                    <i className="icon-pin font-size-sm"></i> &nbsp;Santa Ana, CA
                  </div>
                </div>

                <div className="ml-3 align-self-center">
                  <a href="#" className="text-white">
                    <i className="icon-cog3"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card card-sidebar-mobile">
            <ul className="nav nav-sidebar" data-nav-type="accordion">
              <li className="nav-item ">
                <Link to={"/tutors"} className="nav-link active">
                  <i className="icon-home4"></i>
                  <span> Tutor List </span>
                </Link>
              </li>
              <li className="nav-item ">
                <Link to={"/students"} className="nav-link">
                  <i className="icon-copy"></i>
                  <span>Student List</span>
                </Link>
              </li>
              <li className="nav-item ">
                <Link to={"/parents"} className="nav-link">
                  <i className="icon-color-sampler"></i>
                  <span>Parent List</span>
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="#" className="nav-link">
                  <i className="icon-stack"></i>
                  <span>Payment </span>
                </Link>
              </li>
              <li className="nav-item ">
                <a href="changelog.html" className="nav-link">
                  <i className="icon-list-unordered"></i>
                  <span>Changelog</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </>
  );
}

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import inverse from "./inverse.png";
import "./navbar.css";
import Schedule from "./styles/higher_odd_2018-19.pdf";
import AcdamicSchedule from "./styles/AICTE_2018-19.pdf";
import Antiragging from "./styles/antiragging.pdf";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="sticky-wrapper">
          <img src={inverse} alt="Logo" />
        </div>
        <nav className="navbar navbar-expand-lg navbar-light  " id="assa">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <NavLink className="nav-link" to="/" id="navContent">
                  Home
                </NavLink>
              </li>

              {/* Dropdown 1 */}

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to=""
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  id="navContent"
                >
                  About Us
                </NavLink>
                <div
                  id="divideDropDown"
                  className="dropdown-menu  "
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <div className="row">
                    <div className="col">
                      <NavLink className="dropdown-item" to="/about">
                        About the College
                      </NavLink>
                      <NavLink className="dropdown-item" to="/visionAndMission">
                        Vission & Mission
                      </NavLink>
                      <NavLink className="dropdown-item" to="/rules">
                        Rules & Regulation
                      </NavLink>
                    </div>
                    <div className="col">
                      <NavLink className="dropdown-item" to="/chairman">
                        Chairman
                      </NavLink>
                      <NavLink className="dropdown-item" to="/viceChairman">
                        Vice Chairman
                      </NavLink>
                      <NavLink className="dropdown-item" to="/management">
                        Management
                      </NavLink>
                    </div>
                  </div>
                </div>
              </li>

              {/* Dropdown 2*/}
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to=""
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  id="navContent"
                >
                  Administration
                </NavLink>
                <div
                  className="dropdown-menu "
                  id="divideDropDownBig"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <div className="row">
                    <div className="col">
                      <NavLink className="dropdown-item" to="/governingBody">
                        Governing Board
                      </NavLink>
                      <NavLink className="dropdown-item" to="/principal">
                        Principal
                      </NavLink>
                      <NavLink className="dropdown-item" to="/vicePrincipal">
                        Vice Prinicpal
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to="/admissionProcedure"
                      >
                        Admission Procedure
                      </NavLink>
                    </div>
                    <div className="col">
                      <NavLink className="dropdown-item" to="/committe">
                        Commitee
                      </NavLink>
                      <NavLink className="dropdown-item" to="/grievance">
                        Greviance and Redressal
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to={AcdamicSchedule}
                        target="noopener"
                      >
                        Approvals
                      </NavLink>
                      <NavLink className="dropdown-item" to="/Budget">
                        Budget
                      </NavLink>
                    </div>
                  </div>
                </div>
              </li>

              {/* Dropdown 3 */}

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to=""
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  id="navContent"
                >
                  Academics
                </NavLink>
                <div
                  className="dropdown-menu "
                  id="divideDropDown"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <div className="row">
                    <div className="col">
                      <NavLink className="dropdown-item" to="/Course">
                        Courses Offered
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to={Schedule}
                        target="noopener"
                      >
                        Academic Schedule
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to={Antiragging}
                        target="noopener"
                      >
                        Anti Ragging
                      </NavLink>
                    </div>
                    <div className="col">
                      <NavLink className="dropdown-item" to="/scholarship">
                        Scholarsip
                      </NavLink>
                      <a
                        className="dropdown-item"
                        href="https://www.vidyalakshmi.co.in/Students"
                        target="noopener"
                      >
                        Apply for Scholarship
                      </a>
                      <a
                        className="dropdown-item"
                        href="https://www.vidyalakshmi.co.in/Students"
                        target="noopener"
                      >
                        Educational loans
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              {/* Dropdown 4 */}

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to=""
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  id="navContent"
                >
                  Facilities
                </NavLink>
                <div
                  className="dropdown-menu "
                  id="divideDropDown"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <div className="row">
                    <div className="col">
                      <NavLink
                        className="dropdown-item"
                        to="/library"
                      >
                        Library
                      </NavLink>
                      <NavLink className="dropdown-item" to="/busroutes">
                        Transport
                      </NavLink>
                      <NavLink className="dropdown-item" to="/rmkhostel">
                        Hostel
                      </NavLink>
                      <NavLink className="dropdown-item" to="/canteen">
                        Canteen
                      </NavLink>
                    </div>
                    <div className="col">
                      <NavLink className="dropdown-item" to="/healthcare">
                        Health Care
                      </NavLink>
                      <NavLink className="dropdown-item" to="/atm">
                        Bank ATM
                      </NavLink>
                      <NavLink className="dropdown-item" to="/Gym">
                        Gymnasium
                      </NavLink>
                    </div>
                  </div>
                </div>
              </li>

              {/* Dropdown 5 */}

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to=""
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  id="navContent"
                >
                  Departments
                </NavLink>
                <div
                  className="dropdown-menu "
                  id="divideDropDownLarge"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <div className="row">
                    <div className="col">
                      <NavLink className="dropdown-item" to="/cse-department">
                        Computer Science and Engineering
                      </NavLink>
                      <NavLink className="dropdown-item" to="#">
                        Electronics & Communication Engineering
                      </NavLink>
                      <NavLink className="dropdown-item" to="#">
                        Electrical & Electronics Engineering
                      </NavLink>
                    </div>
                    <div className="col">
                      <NavLink className="dropdown-item" to="#">
                        Mechanical Engineering
                      </NavLink>
                      <NavLink className="dropdown-item" to="#">
                        Science & Humanities
                      </NavLink>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="nav-link"
                  to="./research/researchLinks"
                  id="navContent"
                >
                  Research
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/placement" id="navContent">
                  Placement
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/alumini" id="navContent">
                  Alumni
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;

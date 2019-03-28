import React from "react";
import About from "./about";
import Activities from "./activity";
import Academics from "./academics";
import Achecivements from "./acheivement";
import Contact from "./contact";
import Faculty from "./faculty";
import Laboratory from "./laboratory";
import Placement from "./placement";
import NavBar from "../navbar";
import FooterPage from "../footer";
import "../styles/common.css";

const cseDepartLink = () => {
  return (
    <React.Fragment>
      <NavBar />
      <br />
      <div className="row">
        <div className="col-3" style={{ overflow: "hidden",maxWidth: "20%" }}>
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
            style={{ marginLeft: "0px" }}
          >
            <a
              className="nav-link active"
              id="v-pills-aboutDepart-tab"
              data-toggle="pill"
              href="#v-pills-aboutDepart"
              role="tab"
              aria-controls="v-pills-aboutDepart"
              aria-selected="true"
            >
              <i className="fa fa-home" aria-hidden="true" />
              &nbsp; About Us
            </a>
            <a
              className="nav-link"
              id="v-pills-lab-tab"
              data-toggle="pill"
              href="#v-pills-lab"
              role="tab"
              aria-controls="v-pills-lab"
              aria-selected="false"
            >
              <i className="fa fas fa-desktop" />
              &nbsp; Laboratory
            </a>
            <a
              className="nav-link"
              id="v-pills-faculty-tab"
              data-toggle="pill"
              href="#v-pills-faculty"
              role="tab"
              aria-controls="v-pills-faculty"
              aria-selected="false"
            >
              <i className="fa fa-users" />
              &nbsp;Faculty
            </a>
            <a
              className="nav-link"
              id="v-pills-placement-tab"
              data-toggle="pill"
              href="#v-pills-placement"
              role="tab"
              aria-controls="v-pills-placement"
              aria-selected="false"
            >
              <i className="fas fa-newspaper" />
              &nbsp; Placement
            </a>
            <a
              className="nav-link"
              id="v-pills-activities-tab"
              data-toggle="pill"
              href="#v-pills-activities"
              role="tab"
              aria-controls="v-pills-activities"
              aria-selected="false"
            >
              <i className="fa fa-calendar" />
              &nbsp; Activities
            </a>
            <a
              className="nav-link"
              id="v-pills-achievements-tab"
              data-toggle="pill"
              href="#v-pills-achievements"
              role="tab"
              aria-controls="v-pills-achievements"
              aria-selected="false"
            >
              <i className="fa fas fa-trophy" />
              &nbsp;Achievements
            </a>
            <a
              className="nav-link"
              id="v-pills-academics-tab"
              data-toggle="pill"
              href="#v-pills-academics"
              role="tab"
              aria-controls="v-pills-academics"
              aria-selected="false"
            >
              <i className="fa fas fa-graduation-cap" />
              &nbsp; Academics
            </a>
            <a
              className="nav-link"
              id="v-pills-contact-tab"
              data-toggle="pill"
              href="#v-pills-contact"
              role="tab"
              aria-controls="v-pills-contact"
              aria-selected="false"
            >
              <i className="fa fa-phone" />
              &nbsp; Contact Us
            </a>
           
          </div>
        </div>
        <div className="col-8">
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-aboutDepart"
              role="tabpanel"
              aria-labelledby="v-pills-aboutDepart-tab"
            >
              <About />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-lab"
              role="tabpanel"
              aria-labelledby="v-pills-lab-tab"
            >
              <Laboratory />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-faculty"
              role="tabpanel"
              aria-labelledby="v-pills-faculty-tab"
            >
              <Faculty />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-placement"
              role="tabpanel"
              aria-labelledby="v-pills-placement-tab"
            >
              <Placement />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-activities"
              role="tabpanel"
              aria-labelledby="v-pills-activities-tab"
            >
              <Activities />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-achievements"
              role="tabpanel"
              aria-labelledby="v-pills-achievements-tab"
            >
              <Achecivements />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-academics"
              role="tabpanel"
              aria-labelledby="v-pills-academics-tab"
            >
              <Academics />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-contact"
              role="tabpanel"
              aria-labelledby="v-pills-contact-tab"
            >
              <Contact />
            </div>
            
          </div>
        </div>
      
      </div>
      <br />
      <FooterPage />
    </React.Fragment>
  );
};

export default cseDepartLink;

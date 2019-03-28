import React, { Component } from "react";
import GrievanceAbout from "./grievanceAbout";
import GrievanceMembers from "./grievanceMembers";
import GrievanceForm from "./grievanceForm";
import GrievanceReport from "./grievanceReport";
import GrievanceContact from "./grievanceContact";
import NavBar from "../navbar";
import "../styles/common.css";
import FooterPage from "../footer";

class Greviance extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <br />
        <div className="row">
          <div className="col-3 " style={{ overflow: "hidden" }}>
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
              style={{ marginLeft: "-24px" }}
            >
              <a
                className="nav-link active"
                id="v-pills-home-tab"
                data-toggle="pill"
                href="#v-pills-home"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                <i class="fa fa-home" />
                &nbsp; Home
              </a>
              <a
                className="nav-link"
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                <i class="fa fa-users" />
                &nbsp; Members
              </a>
              <a
                className="nav-link"
                id="v-pills-messages-tab"
                data-toggle="pill"
                href="#v-pills-messages"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                <i class="fa fa-wpforms" />
                &nbsp;Grievance Form
              </a>
              <a
                className="nav-link"
                id="v-pills-settings-tab"
                data-toggle="pill"
                href="#v-pills-settings"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                <i class="fa fa-file" />
                &nbsp; Reports
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
                <i class="fa fa-phone" />
                &nbsp; Contact
              </a>
            </div>
          </div>
          <div className="col-8">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <GrievanceAbout />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <GrievanceMembers />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                <GrievanceForm />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                <GrievanceReport />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-contact"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                <GrievanceContact />
              </div>
            </div>
          </div>
        </div>
        <br />
        <FooterPage />
      </React.Fragment>
    );
  }
}

export default Greviance;

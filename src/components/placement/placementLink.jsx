import React from "react";
import About from "./about";
import Coordinators from "./coordinators";
import DreamCompanies from "./dreamCompanies";
import IndustryConnect from "./industryConnect";
import Mous from "./mous";
import RecruitrFeedback from "./recruiterFeddback";
import Recuiters from "./recuiters";
import Resources from "./resources";
import Registraion from "./regisration";
import Statistics from "./statistics";
import Testimonial from "./testimonial";
import Training from "./training";
import NavBar from "../navbar";
import FooterPage from "../footer";
import "../styles/common.css";

const PlacementLink = () => {
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
              id="v-pills-about-tab"
              data-toggle="pill"
              href="#v-pills-about"
              role="tab"
              aria-controls="v-pills-about"
              aria-selected="true"
            >
              <i className="fa fa-home" aria-hidden="true" />
              &nbsp; About Us
            </a>
            <a
              className="nav-link"
              id="v-pills-Coordinators-tab"
              data-toggle="pill"
              href="#v-pills-Coordinators"
              role="tab"
              aria-controls="v-pills-Coordinators"
              aria-selected="false"
            >
              <i className="fa fas fa-users" />
              &nbsp; Coordinators
            </a>
            <a
              className="nav-link"
              id="v-pills-dream-tab"
              data-toggle="pill"
              href="#v-pills-dream"
              role="tab"
              aria-controls="v-pills-dream"
              aria-selected="false"
            >
              <i className="fa fas fa-comments" />
              &nbsp;Dream Companies
            </a>
            <a
              className="nav-link"
              id="v-pills-industry-tab"
              data-toggle="pill"
              href="#v-pills-industry"
              role="tab"
              aria-controls="v-pills-industry"
              aria-selected="false"
            >
              <i className="fa fa-link" />
              &nbsp; Industry Connect
            </a>
            <a
              className="nav-link"
              id="v-pills-mous-tab"
              data-toggle="pill"
              href="#v-pills-mous"
              role="tab"
              aria-controls="v-pills-mous"
              aria-selected="false"
            >
              <i className="fa fa-handshake-o" />
              &nbsp; MoUs
            </a>
            <a
              className="nav-link"
              id="v-pills-recuiterf-tab"
              data-toggle="pill"
              href="#v-pills-recuiterf"
              role="tab"
              aria-controls="v-pills-recuiterf"
              aria-selected="false"
            >
              <i className="fa fas fa-comment" />
              &nbsp;Recuiter Feedback
            </a>
            <a
              className="nav-link"
              id="v-pills-recuiter-tab"
              data-toggle="pill"
              href="#v-pills-recuiter"
              role="tab"
              aria-controls="v-pills-recuiter"
              aria-selected="false"
            >
              <i className="fa fas fa-users" />
              &nbsp;Our Recuiters
            </a>
            <a
              className="nav-link"
              id="v-pills-reg-tab"
              data-toggle="pill"
              href="#v-pills-reg"
              role="tab"
              aria-controls="v-pills-reg"
              aria-selected="false"
            >
              <i className="fa fa-registered" />
              &nbsp; Registration
            </a>
            <a
              className="nav-link"
              id="v-pills-resources-tab"
              data-toggle="pill"
              href="#v-pills-resources"
              role="tab"
              aria-controls="v-pills-resources"
              aria-selected="false"
            >
              <i className="fa fa-book" />
              &nbsp; Useful Resources
            </a>
            <a
              className="nav-link"
              id="v-pills-statis-tab"
              data-toggle="pill"
              href="#v-pills-statis"
              role="tab"
              aria-controls="v-pills-statis"
              aria-selected="false"
            >
              <i className="fa fa-bar-chart" />
              &nbsp; Placement Statictics
            </a>
            <a
              className="nav-link"
              id="v-pills-test-tab"
              data-toggle="pill"
              href="#v-pills-test"
              role="tab"
              aria-controls="v-pills-test"
              aria-selected="false"
            >
              <i className="fa fas fa-quote-left" />
              &nbsp; Testimonials
            </a>
            <a
              className="nav-link"
              id="v-pills-train-tab"
              data-toggle="pill"
              href="#v-pills-train"
              role="tab"
              aria-controls="v-pills-train"
              aria-selected="false"
            >
              <i className="fa fas fa-graduation-cap" />
              &nbsp; Trainings
            </a>
           
          </div>
        </div>
        <div className="col-8">
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-about"
              role="tabpanel"
              aria-labelledby="v-pills-about-tab"
            >
              <About />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-Coordinators"
              role="tabpanel"
              aria-labelledby="v-pills-Coordinators-tab"
            >
              <Coordinators />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-dream"
              role="tabpanel"
              aria-labelledby="v-pills-dream-tab"
            >
              <DreamCompanies />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-industry"
              role="tabpanel"
              aria-labelledby="v-pills-industry-tab"
            >
              <IndustryConnect />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-mous"
              role="tabpanel"
              aria-labelledby="v-pills-mous-tab"
            >
              <Mous />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-recuiterf"
              role="tabpanel"
              aria-labelledby="v-pills-recuiterf-tab"
            >
              <RecruitrFeedback />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-recuiter"
              role="tabpanel"
              aria-labelledby="v-pills-recuiter-tab"
            >
              <Recuiters />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-reg"
              role="tabpanel"
              aria-labelledby="v-pills-reg-tab"
            >
              <Registraion />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-resources"
              role="tabpanel"
              aria-labelledby="v-pills-resources-tab"
            >
              <Resources />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-statis"
              role="tabpanel"
              aria-labelledby="v-pills-statis-tab"
            >
              <Statistics />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-test"
              role="tabpanel"
              aria-labelledby="v-pills-test-tab"
            >
              <Testimonial />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-train"
              role="tabpanel"
              aria-labelledby="v-pills-train-tab"
            >
              <Training />
            </div>
            
          </div>
        </div>
      
      </div>
      <br />
      <FooterPage />
    </React.Fragment>
  );
};

export default PlacementLink;

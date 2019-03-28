import React from "react";
import AboutLibrary from "./aboutLibrary";
import Activities from "./activitiesLib";
import Books from "./booksLib";
import Journals from "./journalsLib";
import Magazines from "./magazinesLib";
import DigitalLibrary from "./digitalLib";
import OPAC from "./opacLib";
import Elearning from "./e-learningLib";
import MoreLibrary from "./moreLib";
import NavBar from "../navbar";
import FooterPage from "../footer";
import "../styles/common.css";

const LibraryLink = () => {
  return (
    <React.Fragment>
      <NavBar />
      <br />
      <div className="row">
        <div className="col-3" style={{ overflow: "hidden" }}>
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
            style={{ marginLeft: "-24px" }}
          >
            <a
              className="nav-link active"
              id="v-pills-aboutLib-tab"
              data-toggle="pill"
              href="#v-pills-aboutLib"
              role="tab"
              aria-controls="v-pills-aboutLib"
              aria-selected="true"
            >
              <i className="fas fa-book-reader" aria-hidden="true" />
              &nbsp; About Library
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
              <i className="fas fa-clipboard-list" />
              &nbsp; Activities
            </a>
            <a
              className="nav-link"
              id="v-pills-books-tab"
              data-toggle="pill"
              href="#v-pills-books"
              role="tab"
              aria-controls="v-pills-books"
              aria-selected="false"
            >
              <i className="fas fa-book-open" />
              &nbsp;Books
            </a>
            <a
              className="nav-link"
              id="v-pills-journals-tab"
              data-toggle="pill"
              href="#v-pills-journals"
              role="tab"
              aria-controls="v-pills-journals"
              aria-selected="false"
            >
              <i className="fas fa-newspaper" />
              &nbsp; Journals
            </a>
            <a
              className="nav-link"
              id="v-pills-magazines-tab"
              data-toggle="pill"
              href="#v-pills-magazines"
              role="tab"
              aria-controls="v-pills-magazines"
              aria-selected="false"
            >
              <i className="fas fa-scroll" />
              &nbsp; Magazines
            </a>
            <a
              className="nav-link"
              id="v-pills-digital-tab"
              data-toggle="pill"
              href="#v-pills-digital"
              role="tab"
              aria-controls="v-pills-digital"
              aria-selected="false"
            >
              <i className="fas fa-digital-tachograph" />
              &nbsp; Digital Library
            </a>
            <a
              className="nav-link"
              id="v-pills-opac-tab"
              data-toggle="pill"
              href="#v-pills-opac"
              role="tab"
              aria-controls="v-pills-opac"
              aria-selected="false"
            >
              <i className="fas fa-info-circle" />
              &nbsp; OPAC
            </a>
            <a
              className="nav-link"
              id="v-pills-elearn-tab"
              data-toggle="pill"
              href="#v-pills-elearn"
              role="tab"
              aria-controls="v-pills-elearn"
              aria-selected="false"
            >
              <i className="fas fa-chalkboard-teacher" />
              &nbsp; E-Learning
            </a>
            <a
              className="nav-link"
              id="v-pills-more-tab"
              data-toggle="pill"
              href="#v-pills-more"
              role="tab"
              aria-controls="v-pills-more"
              aria-selected="false"
            >
              <i className="fas fa-ellipsis-h" />
              &nbsp;More
            </a>
          </div>
        </div>
        <div className="col-8">
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-aboutLib"
              role="tabpanel"
              aria-labelledby="v-pills-aboutLib-tab"
            >
              <AboutLibrary />
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
              id="v-pills-books"
              role="tabpanel"
              aria-labelledby="v-pills-books-tab"
            >
              <Books />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-journals"
              role="tabpanel"
              aria-labelledby="v-pills-journals-tab"
            >
              <Journals />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-magazines"
              role="tabpanel"
              aria-labelledby="v-pills-magazines-tab"
            >
              <Magazines />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-digital"
              role="tabpanel"
              aria-labelledby="v-pills-digital-tab"
            >
              <DigitalLibrary />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-opac"
              role="tabpanel"
              aria-labelledby="v-pills-opac-tab"
            >
              <OPAC />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-elearn"
              role="tabpanel"
              aria-labelledby="v-pills-elearn-tab"
            >
              <Elearning />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-more"
              role="tabpanel"
              aria-labelledby="v-pills-more-tab"
            >
              <MoreLibrary />
            </div>
          </div>
        </div>
      </div>
      <br />
      <FooterPage />
    </React.Fragment>
  );
};

export default LibraryLink;

import React from "react";
import AboutResearch from "./About";
import Research from "./academicResearch";
import Sponsored from "./sponsoredResearch";
import Patent from "./Patents";
import Citation from "./researchCitations";
import Coordinate from "./Coordinators";

import NavBar from "../navbar";
import FooterPage from "../footer";
import "../styles/common.css";

const ResearchLink = () => {
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
          >
            <a
              className="nav-link active"
              id="v-pills-aboutLib-tab"
              data-toggle="pill"
              href="#v-pills-aboutLib"
              role="tab"
              aria-controls="v-pills-aboutLib"
              aria-selected="true"
              style={{ marginLeft: "-24px" }}
            >
              <i className="fas fa-book-reader" aria-hidden="true" />
              &nbsp; About
            </a>
            <a
              className="nav-link"
              id="v-pills-activities-tab"
              data-toggle="pill"
              href="#v-pills-activities"
              role="tab"
              aria-controls="v-pills-activities"
              aria-selected="false"
              style={{ marginLeft: "-24px" }}
            >
              <i className="fas fa-clipboard-list" />
              &nbsp; Academic Research
            </a>
            <a
              className="nav-link"
              id="v-pills-books-tab"
              data-toggle="pill"
              href="#v-pills-books"
              role="tab"
              aria-controls="v-pills-books"
              aria-selected="false"
              style={{ marginLeft: "-24px" }}
            >
              <i className="fas fa-book-open" />
              &nbsp;Sponsored Research
            </a>
            <a
              className="nav-link"
              id="v-pills-journals-tab"
              data-toggle="pill"
              href="#v-pills-journals"
              role="tab"
              aria-controls="v-pills-journals"
              aria-selected="false"
              style={{ marginLeft: "-24px" }}
            >
              <i className="fas fa-newspaper" />
              &nbsp; Patents
            </a>
            <a
              className="nav-link"
              id="v-pills-magazines-tab"
              data-toggle="pill"
              href="#v-pills-magazines"
              role="tab"
              aria-controls="v-pills-magazines"
              aria-selected="false"
              style={{ marginLeft: "-24px" }}
            >
              <i className="fas fa-scroll" />
              &nbsp; Research Citations
            </a>
            <a
              className="nav-link"
              id="v-pills-digital-tab"
              data-toggle="pill"
              href="#v-pills-digital"
              role="tab"
              aria-controls="v-pills-digital"
              aria-selected="false"
              style={{ marginLeft: "-24px" }}
            >
              <i className="fas fa-digital-tachograph" />
              &nbsp; Coordinators
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
              <AboutResearch />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-activities"
              role="tabpanel"
              aria-labelledby="v-pills-activities-tab"
            >
              <Research />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-books"
              role="tabpanel"
              aria-labelledby="v-pills-books-tab"
            >
              <Sponsored />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-journals"
              role="tabpanel"
              aria-labelledby="v-pills-journals-tab"
            >
              <Patent />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-magazines"
              role="tabpanel"
              aria-labelledby="v-pills-magazines-tab"
            >
              <Citation />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-digital"
              role="tabpanel"
              aria-labelledby="v-pills-digital-tab"
            >
              <Coordinate />
            </div>
          </div>
        </div>
      </div>
      <br />
      <FooterPage />
    </React.Fragment>
  );
};

export default ResearchLink;
